var http=require('http')
var server=http.createServer(function(req,res){

    var Student={

        id:1,
        name:'Sohail Shaikh',
        course:'Full Stack Developer'
    }

    res.writeHead(200,{'content-type':'application/json'})
    res.write(JSON.stringify(Student))
    //res.write("Server Started...AT 8085")
    res.end()
})
server.listen(8085)
