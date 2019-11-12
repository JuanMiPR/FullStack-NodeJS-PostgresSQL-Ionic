import express, { json } from "express";
import morgan from "morgan";

import userRoutes from "./routes/users";
import buyRoutes from "./routes/buy";
import providersRoutes from "./routes/providers";
import productsRoutes from "./routes/products";

const app = express();
app.use(morgan('dev'));
app.use(json());



app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/buys", buyRoutes);
app.use("/providers", providersRoutes);



export default app;