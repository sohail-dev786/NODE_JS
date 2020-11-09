var http=require('http');


var final_result='';
http.get('http://jsonplaceholder.typicode.com/comments',function(result){

    result.on('data',function(posts_comment)
    {

        final_result+=posts_comment;

    });

});


var server=http.createServer(function (res,res){


res.writeHead(200,{'content-type':'application/json'});
res.write('Server Started At 8081');
res.write(final_result);
res.end();

});

server.listen(8081);

