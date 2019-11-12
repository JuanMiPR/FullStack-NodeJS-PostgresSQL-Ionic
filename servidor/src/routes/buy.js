import {Router} from "express";
const router = Router();
import {createBuy,getBuys,getBuyById,deleteBuyById,updateBuyById} from "../controllers/buy.controller";

router.post('/',createBuy);
router.get("/",getBuys);
router.get("/:id_user",getBuyById);
router.delete("/:id_user",deleteBuyById);
router.put("/:id_user/:date",updateBuyById);

export default router;