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

    result.push(0,1)

    for(let i=1;i<parseInt(input);i++){

        result.push(result[i-1]+result[i]);
    }
    if(result[result.length-1]+result[result.length-2]>parseInt(input)) {
        result.pop();
    }else if(parseInt(input)===1){
        result.pop();
    }
    console.log(result)

});