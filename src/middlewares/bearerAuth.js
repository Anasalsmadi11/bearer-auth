'use strict';
const base64 = require('base-64');
const Users = require('../models/user.model');

function bearer(req, res, next) {
    if (req.headers.authorization) {
       
        const bearerHeadersToken = req.headers.authorization.split(' ')[1];
        Users.authBearer(bearerHeadersToken).then((data) => {
            req.user = data;
            next();
        }).catch(() => {
            next('invalid token');
        })
    }
}



module.exports = bearer;