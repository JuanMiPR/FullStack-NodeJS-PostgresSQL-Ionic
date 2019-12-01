import express, { json } from "express";
const verify = require("../src/controllers/verifyToken.controller");
import morgan from "morgan";
const env = require("dotenv");
var bodyParser = require('body-parser');
const cors = require("cors");
env.config();
const passport = require("passport");

import userRoutes from "./routes/users";
import buyRoutes from "./routes/buy";
import wareHousesRoutes from "./routes/warehouses";
import productsRoutes from "./routes/products";
import logingRoutes from "./routes/login";

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());



app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/buys", buyRoutes);
app.use("/warehouses",wareHousesRoutes);
app.use("/login", logingRoutes);






export default app;