input = [["100","<","300"]]

let num1 = parseInt(input[0][0]);
let num2 = parseInt(input[0][2]);
let n = input[0][1];

if(n=="<"){
    if(num1<num2){
        console.log(true);
    }else{console.log(false);
}}else if(n==">"){
    if(num1>num2){
        console.log(true);

    }else {
        console.log(false);
    }}else if(n=="=="){
        if(num1===num2){
            console.log(true);
        }else {
            console.log(false);
        }
}
