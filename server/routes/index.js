const main = require('express').Router();

//add routes here
main.use('/uaa', require('./uaa'));

module.exports = main;
