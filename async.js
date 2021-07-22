const fs = require("fs")

fs.readFile("mytext.txt")
//difference b/w readfile and readfileSync is that in readfileSync the execution takes place in upto down order
//in readfile the execution keeps on taking place while the other statements also executes 

function cb(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log("data" + data)
    }
}

