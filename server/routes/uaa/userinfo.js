const request = require('request');

module.exports = (req, res) => {

    request.get('http://userservice/uaa/userinfo',
        function (error, response, body) {

            if (error) {
                res.send(JSON.parse(error));
            } else {
                console.log(response);
                console.log(body);
                let resp = JSON.parse(body);
                res.send(resp);
            }

        })

};
