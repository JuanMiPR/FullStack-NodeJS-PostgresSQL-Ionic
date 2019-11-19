import {Router} from "express";
const router = Router();
const verify = require("../controllers/verifyToken.controller");
import {createUser,singinUser,singoutUser,getUsers,getUserById,deleteUserById,updateUserById} from "../controllers/users.controller";

router.post('/singup',createUser);
router.post('/singin',singinUser);
router.post('/singout/:user_email',singoutUser);
router.get("/:user_email",verify,getUsers);
router.get("/:user_email",verify,getUserById);
router.delete("/:user_email",verify,deleteUserById);
router.put("/:user_email",verify,updateUserById);

export default router;