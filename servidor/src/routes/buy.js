import {Router} from "express";
const router = Router();
import {createBuy,getBuys,getBuyByIdBuy,getBuyById,deleteBuyById} from "../controllers/buy.controller";

router.post('/',createBuy);
router.get("/",getBuys);
router.get("/:id_user",getBuyById);
router.get("/buy/:id_buy",getBuyByIdBuy);
router.delete("/:id_buy",deleteBuyById);


export default router;