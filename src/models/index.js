'use strict'
require('dotenv').config()
const {Sequelize, DataTypes}= require('sequelize')
const DATABASE_URI= process.env.DATABASE_URL

const sequelize= new Sequelize(DATABASE_URI,{})

module.exports= {sequelize,DataTypes};