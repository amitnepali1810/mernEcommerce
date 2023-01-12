import React, { Fragment, useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearErrors, getProduct } from '../../actions/productAction';
import ProductCard from '../Home/ProductCard';
import Loader from '../layout/Loader/Loader';
import "./Products.css";

const Products = () => {

    
    const { keyword } = useParams();
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const { products, loading, error, productsCount, resultPerPage } = useSelector(
        (state) => state.products
    )

    console.log(productsCount);


    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }


    useEffect(() => {
        dispatch(getProduct(keyword, currentPage));
    }, [dispatch, keyword, currentPage]);

    return (
        <Fragment>
            {loading ? (<Loader />) : (
                <Fragment>
                    <h2 className="productsHeading">
                        PRODUCTS
                    </h2>
                    <div className="products">
                        {
                            products && products.map((product) => <ProductCard key={product._id} product={product} />)
                        }
                    </div>

                    <div className="paginationBox">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass="page-item"
                            linkClass="page-link"
                            activeClass="pageItemActive"
                            activeLinkClass="pageLinkActive"
                        />
                    </div>

                </Fragment>
            )}
        </Fragment>
    )
}

export default Products;