'use strict';

require ('dotenv').config()
const port= process.env.PORT
const { sequelize } = require('./src/models/index');
const server= require('./src/server')

sequelize.sync()
    .then(()=>{
    server.listen(port, ()=>{
        console.log(`server is ready and listen on port ${port}`)
    })
})
