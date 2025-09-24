'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // many-to-many seos artiklitega läbi ArticleTags liidetabeli
      Tag.belongsToMany(models.Article, {
        through: models.ArticleTags,  // liidetabel
        as: 'articles',               // alias, mida kasutad include-s
        foreignKey: 'tagId'           // välisvõti ArticleTags tabelis
      });
    }
  }

  Tag.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag;
};
