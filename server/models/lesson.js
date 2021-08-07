'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      lesson.belongsTo(models.courseLevel, {
        as: 'lessonLevel',
        foreignKey: {
          name: 'levelId',
        },
      });
      lesson.hasMany(models.content, {
        as: 'lessonContent',
        foreignKey: {
          name: 'lessonId',
        },
      });
    }
  }
  lesson.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.STRING,
      levelId: DataTypes.INTEGER,
      isPublish: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'lesson',
    }
  );
  return lesson;
};
