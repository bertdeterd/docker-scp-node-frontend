const request = require('request');

module.exports = (req, res) => {

    request.get('http://localhost:8080/uaa/userinfo', { timeout: 1500 },
        function (error, response, body) {

            if (error) {
                let ui = {};
                ui.username = 'niet bekend';
                console.log(error);
                res.send(ui);
            } else {
                console.log(response);
                console.log(body);
                let resp = JSON.parse(body);
                res.send(resp);
            }

        })

};
