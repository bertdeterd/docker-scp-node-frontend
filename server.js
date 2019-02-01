const express = require('express');
const path = require('path');
var uaaroutes = require('./server/routes/uaa');

const app = express();

app.use('/uaa',uaaroutes);

console.log( path.join(__dirname, 'dist') );
app.use('/', express.static( path.join(__dirname, 'dist') ));


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myxrontend-app listening on port ' + port);
});