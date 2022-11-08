function palinedrome(str){
    let median = 2
    // console.log()
    // console.log(Math.ceil(str.length/median ))
    // console.log(str[Math.ceil(str.length/median )-1])
    let b = ""
    for(let i =0;i<Math.ceil(str.length/median )-1;i++){
        b+=str[i]

    }
    let a = ""
    for(let j = str.length-1; j>Math.ceil(str.length/median )-1;j--){
        a+=str[j]
    }
    console.log(b,a,1)
    console.log(a,1,2)
    console.log(a===b)

}


const String =  'redivider'

console.log(palinedrome(String))
console.log(a)