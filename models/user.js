'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    githubId: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
  };
  return user;
};