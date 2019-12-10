import { Router } from "express";
require("../controllers/passport.controller");
const router = Router();
const passport = require("passport");
const verify = require("../controllers/verifyToken.controller");
import { createUser,  singoutUser, getUsers, getUserById, deleteUserById, updateUserById } from "../controllers/users.controller";

router.post('/singup', createUser);
router.post('/singout',verify ,singoutUser);
router.get("/all", verify, getUsers);
router.get("/:id_user", verify, getUserById);
router.delete("/:id_user", verify, deleteUserById);
router.put("/:id_user", verify, updateUserById);


export default router;