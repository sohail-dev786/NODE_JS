var fs= require("fs")
fs.mkdir("Demo", function () {
    fs.writeFile(".//Demo/Test.txt", "Hello !!Welcome To Node.js World", function () {

        fs.readFile(".//Demo//Test.txt", "utf-8", function (err, message) {

            console.log(message)
            console.log("------")
            //Ternary Operator(checking Whether File Exis or Not)

            message ? console.log(message) : console.log(err)
 
        })

    })
})