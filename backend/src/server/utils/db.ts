import Sequelize from "sequelize";
import {DataTypes} from "sequelize";
import createUser from "~/models/user";

export const useDB = (event) => {
    const {db: config} = useRuntimeConfig(event)
    const sequelize = new Sequelize(config.name, config.user, config.password, {
        port: config.port,
        host: config.host,
        dialect: config.dialect,
    });
    const modelUser = createUser(sequelize, DataTypes)

    return { modelUser }
}
