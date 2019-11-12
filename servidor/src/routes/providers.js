import {Router} from "express";
const router = Router();
import {createProvider,getProviders,getProviderById,deleteProviderById,updateProviderById} from "../controllers/providers.controller";

router.post('/',createProvider);
router.get("/",getProviders);
router.get("/:id_provider",getProviderById);
router.delete("/:id_provider",deleteProviderById);
router.put("/:id_provider",updateProviderById);

export default router;