import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const warehouses = sequelize.define('warehouses', {
    id_warehouse: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    warehouse_address: {
        type: Sequelize.TEXT
    },
    phone_number: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
}
);

export default warehouses;