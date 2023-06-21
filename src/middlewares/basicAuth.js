'use strict'
const base64= require('base-64')
const Users= require("../models/user.model")

async function basic(req,res,next){
    console.log(req.headers.authorization)
    if(req.headers.authorization){
        let headerParts= req.headers.authorization.split(" ")[1]
        let decodedValue= await base64.decode(headerParts)
        // console.log(decodedValue)
        let [username,password]=decodedValue.split(":")
        Users.authBasic(username, password).then((data)=>{
            // console.log(data)
            req.user=data
            next()
        }).catch((error)=>{
            next("invalid  login")
        })

    }
}

module.exports= basic