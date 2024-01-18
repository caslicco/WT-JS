const fs = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("Enter file name:",(fileName)=>{
    r1.question("Enter the contents of the file: ",(content)=>{
        fs.appendFileSync(fileName,content.toString()+'\n');
        r1.close();
    })
})