"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class courseLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      courseLevel.belongsTo(models.course, {
        as: "course",
        foreignKey: {
          name: "courseId",
        },
      });
    }
  }
  courseLevel.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.STRING,
      courseId: DataTypes.INTEGER,
      isPublish: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "courseLevel",
    }
  );
  return courseLevel;
};
