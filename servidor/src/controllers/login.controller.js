const jwt = require("jsonwebtoken");
import users from "../models/users";
export async function singinUser(req, res) {
    
    let { user_email, password } = req.body;
    const user = await users.findOne({
        where: {
            user_email
        }
    });
    if (user) {

        if (password == cryptr.decrypt(user.password)) {
            
            const token = jwt.sign({
                user_email: user.user_email
            }, process.env.TOKEN_SECRET);
           
            user.update({
                auth_token:token
            });
            res.send(user);
        } else {
            res.status(511).json({
                message: "La contraseña  es incorrecta"
            })
        }

    } else {
        res.status(511).json({
            message: "El email  es incorrecto"
        })
    }
}