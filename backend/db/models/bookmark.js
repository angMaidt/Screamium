'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Bookmark.associate = function(models) {
    // associations can be defined here
    Bookmark.belongsTo(models.User, { foreignKey: 'userId' })
    Bookmark.belongsTo(models.Story, { foreignKey: 'storyId' })
  };
  return Bookmark;
};
