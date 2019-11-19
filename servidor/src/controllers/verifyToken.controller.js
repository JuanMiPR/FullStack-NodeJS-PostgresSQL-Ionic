const jwt = require("jsonwebtoken");
import users from "../models/users";

module.exports = async function (req, res, next) {
    let token ;
    const user = await users.findOne({
        where: {
            user_email: req.params.user_email
        }
    });
    
    

    
    if (user == null) {
        res.status(401).send("usuario no autorizado");
    } else {
        
        try {
            token = user.auth_token;
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            
            if (token==null){
                res.status(401).send("usuario no autorizado");
            }else{
                next();
            }
                
            


        } catch (e) {
            res.status(400).send("No estas Conectado");

        }
    }
}