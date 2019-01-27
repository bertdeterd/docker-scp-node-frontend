const uaa = require('express').Router();

//add saproutes /sap/xxx/ here
uaa.use('/userinfo', require('./userinfo'));

module.exports = uaa;
