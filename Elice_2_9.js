const readline = require("readline");
let input = "";
let str ="";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line
    rl.close();
}).on("close", function () {
    for(let i=0;i<input.length;i++){
        if(input[i]==" "){
            str +="링디기디기\n"
        }else if(input[i]=="."){
            str += "딩딩딩\n"
        }else {
            str += "링딩동 "
        }
    }
    console.log(str)

});