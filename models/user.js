const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Users=sequelize.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: Sequelize.STRING,
      mobileNumber: {
      type: Sequelize.DOUBLE,
      allowNull: false
      },
      emailId:{
        type:Sequelize.STRING,
        allowNull:false
      }
      })
      
      module.exports = Users;
      return Users;
      
