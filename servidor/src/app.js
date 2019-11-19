import express, { json } from "express";
import morgan from "morgan";
const env = require("dotenv");
var bodyParser = require('body-parser');
env.config();
const passport = require("passport");

import userRoutes from "./routes/users";
import buyRoutes from "./routes/buy";
import providersRoutes from "./routes/providers";
import productsRoutes from "./routes/products";
import logingRoutes from "./routes/login";

const app = express();
app.use(morgan('dev'));
app.use(json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());



app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/buys", buyRoutes);
app.use("/providers", providersRoutes);
app.use("/login", logingRoutes);
app.get("/index",function(req,res){
    
    res.send("estas en el index");
    
});





export default app;