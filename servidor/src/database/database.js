
import sequalize from "sequelize";
export const sequelize = new sequalize(
    'fullstack',
    'postgres',
    '1212',
    {
        host:'localhost',
        dialect:'postgres',
        poll:{
            max:5,
            min:0,
            require:40000,
            idle:10000
        },
        logging:false
    }
);