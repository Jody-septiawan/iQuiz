'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  lesson.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    levelId: DataTypes.INTEGER,
    isPublish: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'lesson',
  });
  return lesson;
};