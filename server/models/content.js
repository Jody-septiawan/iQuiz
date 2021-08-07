'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      content.belongsTo(models.lesson, {
        as: 'contentLesson',
        foreignKey: {
          name: 'lessonId',
        },
      });
    }
  }
  content.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      desc: DataTypes.TEXT,
      correction: DataTypes.TEXT,
      code: DataTypes.TEXT,
      option: DataTypes.TEXT,
      correctAnswer: DataTypes.TEXT,
      timer: DataTypes.STRING,
      score: DataTypes.INTEGER,
      status: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      lessonId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'content',
    }
  );
  return content;
};
