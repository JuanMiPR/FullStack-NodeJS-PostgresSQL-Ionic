import users from "../models/users";
const jwt = require("jsonwebtoken");
let cryptr = require("cryptr");
cryptr = new cryptr("devnami");

export async function getUsers(req, res) {
    try {
        const Users = await users.findAll();

        res.json({
            data: Users
        })
    } catch (e) {
        res.status(500).json({
            message: "usuario no creado",
            data: {}
        })
    }
}

export async function singoutUser(req, res) {

    const verified = jwt.verify(req.header("auth_token"), process.env.TOKEN_SECRET);
    let email = verified['user_email'];





    try {
        const user = await users.findOne({
            where: {
                user_email: email
            }
        });
        user.update({
            auth_token: null
        })
        res.send("user desconected");
    }
    catch (e) {
        res.status(500).json({
            message: "usuario no encontrado",
            data: {}
        })
    }
}
export async function createUser(req, res) {
    let { user_name, user_email, password, user_rol,user_type, image_profile } = req.body;
    console.log(req);
    const user = await users.findOne({
        where: {
            user_email
        }
    });
     user_type = "Normal";
     user_rol = "Normal";
    const auth_token = null;
    if (user) {
        res.json({
            message: "existe un usuario con ese email"
        });

    } else {

        password = cryptr.encrypt(password);
        try {
            let newUser = await users.create({
                user_name,
                image_profile,
                password,
                user_rol,
                user_email,
                user_type,
                auth_token

            }, {
                fields: ['user_name', "auth_token", "image_profile", "user_type", "user_email", "password", "user_rol"]
            });
            if (newUser) {
                res.json({
                    message: "usuario creado",
                    data: newUser
                })

            }
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "usuario no creado",
                data: {}
            })
        }
    }
}
export async function getUserById(req, res) {
    const { user_email } = req.params;
    try {
        const user = await users.findOne({
            where: {
                user_email
            }
        });
        console.log(user);
        res.json({
            data: user
        });
    }
    catch (e) {
        res.status(500).json({
            message: "usuario no encontrado",
            data: {}
        })
    }
}
export async function deleteUserById(req, res) {
    const { user_email } = req.params;
    try {
        const deleteRowCount = await users.destroy({
            where: {
                user_email
            }
        })
        res.json({
            message: "user deleted"
        })
    } catch (e) {

    }
}
export async function updateUserById(req, res) {
    const { user_email } = req.params;
    let { user_name, user_dni, password, user_rol } = req.body;
    const user = await users.findOne({
        where: {
            user_email
        }
    })


    if (user != null) {
        user.update({
            user_name, user_dni, password, user_rol
        })
    }

    res.json({
        data: user
    })

}