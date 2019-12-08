import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const buy = sequelize.define('buy', {
    id_buy: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }, id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATEONLY

    },
    quantity: {
        type: Sequelize.INTEGER
    }, payment_type: {
        type: Sequelize.TEXT
    }, user_address: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
}
);

export default buy;