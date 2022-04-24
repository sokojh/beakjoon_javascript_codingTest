function isIsogram(str){
    let result = [];
    for(let i=0;i<str.length;i++){

        for(let j=i+1;j<str.length;j++){
          if(str[i]===str[j]){
              result.push(false)
          }else {
              result.push(true)
          }
        }
    }
    console.log()
    if(result.filter(element => element===false ).length >0){
        return false
    }else {
        return true
    }
}

const String = "subdermatoglyphic"

console.log(isIsogram(String))