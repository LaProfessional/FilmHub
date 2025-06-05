import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.User, { targetKey: 'id', foreignKey: 'userId' })
      Category.belongsToMany(models.Movie, { through: 'CategoryMovie' })
    }
  }

  Category.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      icon: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      colorHex: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Category',
    },
  )

  return Category
}
