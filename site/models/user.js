'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Profile, {foreignKey: 'userId'})
      this.hasMany(models.Historical, {foreignKey: 'userId'})
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = function(models){
    User.hasOne(models.Profile, {
      foreignKey: 'userId', 
      as: 'Profile'}
  
  )}; 

  User.associate = function(models){
    User.hasMany(models.Historical, {
      foreignKey: 'userId', 
      as: 'Historical'}
  
  )}; 

  return User;
};