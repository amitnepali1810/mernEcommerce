import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";

const options = {

// Links and other
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  

  // Icon Edit
  cartIconMargin:"1vmax",
  
  serachIconUrl: "/search",
  searchIcon:true,
  searchIconColor: "rgba(35, 35, 35,0.9)",
  searchIconColorHover: "#eb4034",
  SearchIconElement:MdSearch,
  
  cartIconUrl: "/cart",
  cartIcon:true,
  cartIconColor: "rgba(35, 35, 35,0.9)",
  cartIconColorHover: "#eb4034",
  CartIconElement:MdAddShoppingCart,

  profileIconUrl: "/login",
  profileIcon:true,
  profileIconColor: "rgba(35, 35, 35,0.9)",
  profileIconColorHover: "#eb4034",
  ProfileIconElement: MdAccountCircle, 

// Transition
  searchIconTransition:	0.5	,
  cartIconTransition:	0.5	,
  profileIconTransition:	0.5	,
  searchIconAnimationTime:	1.5	,
  cartIconAnimationTime: 0.5,
  profileIconAnimationTime:	0.5,
  link1AnimationTime: 0.9,
  link2AnimationTime: 0.5,
  link3AnimationTime: 1.2,
  link4AnimationTime: 1,
};


const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;