const readline = require("readline");
let input = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ')
    rl.close();
}).on("close", function () {
    let a=input[0]
    let b=input[1]
    let c=input[2]
    let d=input[3]
    if(a<=b && a===d && b>c && c<6 || a===b && a===c && a===d){
        console.log(true);
    }else{console.log(false);}

});