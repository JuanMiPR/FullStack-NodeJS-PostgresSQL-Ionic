import users from "../models/users";
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
export async function createUser(req, res) {
    let { user_name, user_dni, password, user_rol } = req.body;
    password = cryptr.encrypt(password);
    try {
        let newUser = await users.create({
            user_name,
            user_dni,
            password,
            user_rol
            
        }, {
            fields: ['user_name', "user_dni", "password", "user_rol"]
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
export async function getUserById(req, res) {
    const { id_user } = req.params;
    try {
        const user = await users.findOne({
            where: {
                id_user
            }
        })
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
    const { id_user } = req.params;
    try {
        const deleteRowCount = await users.destroy({
            where: {
                id_user
            }
        })
        res.json({
            message: "user deleted"
        })
    } catch (e) {

    }
}
export async function updateUserById(req, res) {
    const { id_user } = req.params;
    let { user_name, user_dni, password, user_rol } = req.body;
    const user = await users.findOne({
        where: {
            id_user
        }
    })

    if (user != null){
        user.update({
            user_name, user_dni, password, user_rol
        })
    }

    res.json({
        data:user
    })

}