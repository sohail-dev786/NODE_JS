var fs = require('fs');

fs.mkdir("Demo1", function () {

    fs.writeFile(".//Demo1/Test1.txt", "NODE.JS PART 2", function () {

        fs.readFile(".//Demo1/Test1.txt", "utf-8", function (err, msg) {


            console.log("Successfully ......")

            msg?console.log("DONE"):console.log("Failed"+err)


        });
    });
});