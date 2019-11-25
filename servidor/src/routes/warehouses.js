import {Router} from "express";
const router = Router();
import {createWareHouse,getWareHouses,getWareHouseById,deleteWareHouseById,updateWareHouseById} from "../controllers/wareHouse.controller";

router.post('/',createWareHouse);
router.get("/",getWareHouses);
router.get("/:id_warehouse",getWareHouseById);
router.delete("/:id_warehouse",deleteWareHouseById);
router.put("/:id_warehouse",updateWareHouseById);

export default router;