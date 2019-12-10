import {Router} from "express";
const router = Router();
import {createProduct,getProducts,getProductByIdWarehouse,getProductById,deleteProductById,updateProductById} from "../controllers/products.controller";

router.post('/',createProduct);
router.get("/",getProducts);
router.get("/prod/:id_warehouse",getProductByIdWarehouse);
router.get("/:id_product",getProductById);
router.delete("/:id_product",deleteProductById);
router.put("/:id_product",updateProductById);

export default router;