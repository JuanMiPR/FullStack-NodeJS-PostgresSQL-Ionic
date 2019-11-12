import {Router} from "express";
const router = Router();
import {createUser,getUsers,getUserById,deleteUserById,updateUserById} from "../controllers/users.controller";

router.post('/',createUser);
router.get("/",getUsers);
router.get("/:id_user",getUserById);
router.delete("/:id_user",deleteUserById);
router.put("/:id_user",updateUserById);

export default router;