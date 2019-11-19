import {Router} from "express";
const router = Router();
const passport = require("passport");
import {singinUser} from "../controllers/loging.controller";

router.post('/singin', singinUser);
router.get('/google',
    passport.authenticate('google', { scope: ['profile',"email"] }));
router.get('/google/callback',
    passport.authenticate('google'),
    function (req, res) {

       
    res.redirect("/index");
    });
export default router;