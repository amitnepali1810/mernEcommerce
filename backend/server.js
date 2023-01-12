const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./configs/database");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Sutting down the server due to Unhandled Promise...`)
})


// config
dotenv.config({path:'backend/configs/config.env'});

// Database
connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server running in http://localhost:${process.env.PORT} successfully.`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Sutting down the server due to Unhandled Promise...`)

    server.close(() => {
        process.exit(1);
    })
})