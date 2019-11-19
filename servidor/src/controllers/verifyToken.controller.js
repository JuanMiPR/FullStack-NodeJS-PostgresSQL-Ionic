const jwt = require("jsonwebtoken");
import users from "../models/users";

module.exports = async function (req, res, next) {
    
    const user = await users.findOne({
        where: {
            user_email: req.params.user_email
        }
    });
    const token = user.auth_token;
    if (!token || token == ""|| !user) {
        res.status(401).send("usuario no autorizado");
    } else {

        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            
            if (user) {
                next();
            } else {
                res.status(400).send("No estas Conectado");
            }


        } catch (e) {
            res.status(400).send("No estas Conectado");

        }
    }
}