let fruits = ["bann","dos","bso","dowo","bow"];
let count =0;
for(let i=0;i<fruits.length;i++){
    if(fruits[i].indexOf("b")==0){
        count++
    }
}
console.log("b로 시작하는 과일은 "+count+"개");