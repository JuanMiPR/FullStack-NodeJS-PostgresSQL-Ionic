import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const providers = sequelize.define('providers', {
    id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_provider: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    provider_name: {
        type: Sequelize.TEXT
    },
    dni_provider: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
}
);

export default providers;