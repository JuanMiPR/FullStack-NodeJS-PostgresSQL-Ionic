import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const products = sequelize.define('products', {
    id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_warehouse: {
        type: Sequelize.INTEGER,

    },product_image:{
        type:Sequelize.TEXT
    },
    product_name: {
        type: Sequelize.TEXT
    },
    product_stock: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default products;