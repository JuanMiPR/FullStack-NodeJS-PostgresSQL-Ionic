import { Router } from "express";
require("../controllers/passport.controller");
const router = Router();
const passport = require("passport");
const verify = require("../controllers/verifyToken.controller");
import { createUser, singinUser, singoutUser, getUsers, getUserById, deleteUserById, updateUserById } from "../controllers/users.controller";

router.post('/singup', createUser);
router.post('/singout', singoutUser);
router.get("/all", verify, getUsers);
router.get("/user/:user_email", verify, getUserById);
router.delete("/:user_email", verify, deleteUserById);
router.put("/:user_email", verify, updateUserById);


export default router;