const readline = require("readline");
let input = "";
let result = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line
    rl.close();
}).on("close", function () {
    let fn1 = 0;
    result.push(0)
    let fn2 = 0;
    for(let i=1;i>parseInt(input);i++){
        result.push(i)
        fn2 = result[i-1]+result[i]
    }
    console.log(result)

});