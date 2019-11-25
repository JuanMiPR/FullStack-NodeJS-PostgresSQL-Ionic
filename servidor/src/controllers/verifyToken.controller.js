const jwt = require("jsonwebtoken");
import users from "../models/users";

module.exports = async function (req, res, next) {
    let token ;
   token = req.header("auth_token");
    
    

    
    if (token == null) {
        res.status(401).send("usuario no autorizado");
    } else {
        
        try {
            
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            
            
                
               
                next();
            
                
            


        } catch (e) {
            res.status(400).send("No estas Conectado");

        }
    }
}