import { Router } from "express";
const router = Router();
const passport = require("passport");
import { singinUser } from "../controllers/login.controller";

router.post('/singin', singinUser);
router.get('/google',
    passport.authenticate('google', { scope: ['profile', "email"] }));
router.get('/facebook', passport.authenticate('facebook', { scope: ["email"] }));

router.get('/google/callback',
    passport.authenticate('google'),
    function (req, res) {
        res.json({
            auth_token:req.user.token
        })
    });

router.get('/facebook/callback',
    passport.authenticate('facebook'),
    function (req, res) {

        res.json({
            auth_token:req.user.token
        })
    });
export default router;