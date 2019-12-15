import { Router } from "express";
const router = Router();
import { createBuy, getBuys, getBuyByIdBuy, getBuyById, deleteBuyById } from "../controllers/buy.controller";
const verify = require("../controllers/verifyToken.controller");
router.post('/', verify, createBuy);
router.get("/", verify, getBuys);
router.get("/:id_user", verify, getBuyById);
router.get("/buy/:id_buy", verify, getBuyByIdBuy);
router.delete("/:id_buy", verify, deleteBuyById);


export default router;