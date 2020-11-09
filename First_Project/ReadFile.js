var fs=require('fs');

fs.readFile(".//Demo1/Test1.txt","utf-8",function(err,msg){

    console.log("Reading The File Please Wait.....");
    
    if(msg)
        console.log(msg);
    else
        console.log(err);
});