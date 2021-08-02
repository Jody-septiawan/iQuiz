"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      course.hasMany(models.courseLevel, {
        as: "courseLevel",
        foreignKey: {
          name: "courseId",
        },
      });
    }
  }
  course.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      status: DataTypes.STRING,
      isPublish: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "course",
    }
  );
  return course;
};
