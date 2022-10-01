let sentence = "  abab,ab "
function regExp(str){
    let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
    //특수문자 검증
    if(reg.test(str)){
        //특수문자 제거후 리턴
        return str.replace(reg, "");
    } else {
        //특수문자가 없으므로 본래 문자 리턴
        return str;
    }
}
const map = sentence
    .trim()
    .toLowerCase()
    .split("")
    .filter(word => regExp(word))
    .reduce((acc,cur)=>{
        if(cur in acc) {
            acc[cur]++
        }else{
            acc[cur]=1
        }
        return acc
    },{})
let resultString = "";
for(const[key,value]of Object.entries(map)){
    resultString+=`[${key}:${value}]`
}

console.log(map,resultString);
console.log(map,resultString);