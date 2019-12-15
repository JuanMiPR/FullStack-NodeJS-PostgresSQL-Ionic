import {Router} from "express";
const router = Router();
import {createProduct,getProducts,getProductByIdWarehouse,getProductById,deleteProductById,updateProductById} from "../controllers/products.controller";
const verify = require("../controllers/verifyToken.controller");
router.post('/',verify,createProduct);
router.get("/",verify,getProducts);
router.get("/prod/:id_warehouse",verify,getProductByIdWarehouse);
router.get("/:id_product",verify,getProductById);
router.delete("/:id_product",verify,deleteProductById);
router.put("/:id_product",verify,updateProductById);

export default router;