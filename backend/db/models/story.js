'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    authorId: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING(50), allowNull: false },
    body: { type: DataTypes.TEXT, allowNull: false },
    genreId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
    Story.belongsTo(models.User, { foreignKey: 'authorId' });
    Story.hasMany(models.Comment, { foreignKey: 'storyId', onDelete: 'CASCADE', hooks: true });
    Story.belongsTo(models.Genre, { foreignKey: 'genreId' })
  };
  return Story;
};
