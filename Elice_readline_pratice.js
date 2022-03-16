const readline = require("readline");
let result = []
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
let count = 0;
rl.on("line",function(x){


        result.push(parseInt(x));
        count++;
    if(count ===2 ){
        rl.close();
    }

}).on("close",function (){
    console.log(Math.max(result[0],result[1]))
})