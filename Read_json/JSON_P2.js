var http = require('http');
var server = http.createServer(function (res, res) {

    var myData =
        [
            {

                id: 1,
                name: 'sohail',
                city: 'Mumbai',
                country: 'India'
            },
            {
                id: 2,
                name: 'Irfan',
                city: 'Mumbra',
                country: 'India'
            },
            {
                id: 3,
                name: 'LALA',
                city: 'Jogshwari',
                country: 'India'
            }

        ]
    res.writeHead(200, { 'content-type': 'application/json' });
    res.write("Server Started At Port 8085");
    res.end(JSON.stringify(myData));

})
server.listen(8085);