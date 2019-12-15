import {Router} from "express";
const router = Router();
const verify = require("../controllers/verifyToken.controller");
import {createWareHouse,getWareHouses,getWareHouseById,deleteWareHouseById,updateWareHouseById} from "../controllers/wareHouse.controller";

router.post('/',verify,createWareHouse);
router.get("/",verify,getWareHouses);
router.get("/:id_warehouse",verify,getWareHouseById);
router.delete("/:id_warehouse",verify,deleteWareHouseById);
router.put("/:id_warehouse",verify,updateWareHouseById);

export default router;