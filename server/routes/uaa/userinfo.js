const request = require('request');

module.exports =  (req, res) => {

    request.get('http://userservice/uaa/userinfo', 
    function (error, response, body) {
        console.log(response);
        console.log(body);
        let resp = JSON.parse(body);
        res.send(resp);
    })

};
