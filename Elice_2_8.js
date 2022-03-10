const readline = require("readline");
let input = "";
let regExp = /촉촉한 초코칩/gi;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line
    rl.close();
}).on("close", function () {
    if(input.includes("촉촉한 초코칩")){
        let tmp = input.match(regExp)
        console.log(tmp.length)

    }

});