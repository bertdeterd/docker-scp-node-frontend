const express = require('express');
const path = require('path');
var uaaroutes = require('./server/routes/uaa');

const app = express();

app.use('/uaa',uaaroutes);

app.use('/', express.static( path.join(__dirname, 'dist') ));


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});