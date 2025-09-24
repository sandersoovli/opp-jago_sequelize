'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // autoril võib olla mitu artiklit
      Author.hasMany(models.Article, {
        foreignKey: 'author_id',
        as: 'articles'
      });
    }
  }

  Author.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Author',
  });

  return Author;
};
