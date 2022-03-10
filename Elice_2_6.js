const readline = require("readline");
let input = [];
let str = "";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line
    rl.close();
}).on("close", function () {
    for(let i=1;i<=parseInt(input);i++){
        if(i===parseInt(input)) {
            str += i
        }else{
            str += i+", "
        }
    }
    console.log(str);
});