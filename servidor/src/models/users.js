import Sequelize from "sequelize";
import { sequelize } from "../database/database";
const users = sequelize.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
user_name:{
    type:Sequelize.TEXT
},image_profile:{
    type:Sequelize.TEXT
},
user_email:{
    type:Sequelize.TEXT
},
user_type:{
    type:Sequelize.TEXT
},
password:{
    type:Sequelize.TEXT
},
user_rol:{
    type:Sequelize.TEXT
},auth_token:{
    type:Sequelize.TEXT
}
},{
    timestamps:false
});

export default users;