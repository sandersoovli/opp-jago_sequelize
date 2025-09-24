'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      // iga artikli juurde üks autor
      Article.belongsTo(models.Author, {
        foreignKey: 'author_id', // seos väljal author_id
        as: 'author'             // alias, mida kasutame include-s
      });
    }
  }
  Article.init({
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: { 
     type: DataTypes.STRING,
     allowNull: false
    },
    slug: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    body: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};
