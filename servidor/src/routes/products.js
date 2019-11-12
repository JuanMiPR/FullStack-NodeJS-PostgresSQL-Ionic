import {Router} from "express";
const router = Router();
import {createProduct,getProducts,getProductById,deleteProductById,updateProductById} from "../controllers/products.controller";

router.post('/',createProduct);
router.get("/",getProducts);
router.get("/:id_product",getProductById);
router.delete("/:id_product",deleteProductById);
router.put("/:id_product",updateProductById);

export default router;