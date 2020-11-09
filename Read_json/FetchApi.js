var http = require('http')
var str = ''

http.get('http://jsonplaceholder.typicode.com/posts', function (result) {

    result.on('data', function (posts) {
        str += posts
    })
})

var server = http.createServer(function (req, res) {

    res.writeHead(200,{'content-type':'application/json'})
    res.write("Server Started")
    res.write("---------")
    res.write(str)
    res.end()
})
server.listen(8085)