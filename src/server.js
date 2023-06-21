'use strict'

require('dotenv').config()
const express= require('express')
const app= express()
app.use(express.json())
const base64= require('base-64')
const bcrypt= require('bcrypt')
const users = require('./models/user.model')
const basic= require("./middlewares/basicAuth")
const bearer= require('./middlewares/bearerAuth')

app.get('/',(req,res)=>{
    res.send(`welcome home`)
})

app.post('/signup',async(req,res)=>{
    const username= req.body.username
    const hashedPassword = await bcrypt.hash(req.body.password, 5)
    const record= await users.create({
        username: username,
        password: hashedPassword
    }) 
    res.status(201).send(record)
})

app.post('/signin', basic, loginHandler)

function loginHandler(req,res){
    res.send(req.user)
}

app.get('/order', bearer, orderHandler)
function orderHandler(req,res){
    res.json({
        'message':"you can view the order",
        'user':req.user
    })
}

module.exports=app