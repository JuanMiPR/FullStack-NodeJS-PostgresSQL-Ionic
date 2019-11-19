import express, { json } from "express";
import morgan from "morgan";
const env = require("dotenv");
var bodyParser = require('body-parser');
env.config();

import userRoutes from "./routes/users";
import buyRoutes from "./routes/buy";
import providersRoutes from "./routes/providers";
import productsRoutes from "./routes/products";

const app = express();
app.use(morgan('dev'));
app.use(json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/buys", buyRoutes);
app.use("/providers", providersRoutes);



export default app;