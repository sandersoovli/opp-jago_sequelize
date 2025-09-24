'use strict';
const {
  Model
} = require('sequelize');
const article = require('./article');
module.exports = (sequelize, DataTypes) => {
  class ArticleTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Tag,{
        foreignKey: 'tagId',
      })
     this.belongsTo(models.Article,{
        foreignKey: 'articleId',
      })
    }
  }
  ArticleTags.init({
    articleId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticleTags',
  });
  return ArticleTags;
};