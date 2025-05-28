import Sequelize from "sequelize";
import {DataTypes} from "sequelize";
import createUser from "~/models/user";
import createMovie from "~/models/movie";
import createCategory from "~/models/category";

export const useDB = (event) => {
    const {db: config} = useRuntimeConfig(event)
    const sequelize = new Sequelize(config.name, config.user, config.password, {
        port: config.port,
        host: config.host,
        dialect: config.dialect,
    });
    const modelUser = createUser(sequelize, DataTypes)
    const modelMovie = createMovie(sequelize, DataTypes)
    const modelCategory = createCategory(sequelize, DataTypes)

    modelUser.associate(sequelize.models)
    modelMovie.associate(sequelize.models)
    modelCategory.associate(sequelize.models)

    return { modelUser, modelMovie, modelCategory }
}
