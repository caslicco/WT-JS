const fs = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("Enter file name you want to read :",(fileName)=>{
    r1.close();
    fs.readFile(fileName,(err,data)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log(data.toString());
        }
    })

})