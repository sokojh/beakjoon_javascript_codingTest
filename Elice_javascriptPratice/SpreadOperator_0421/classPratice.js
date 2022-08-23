// function 기게(구멍){
//     this.q  = 구멍
//     this.w = 'snowball'
//
// }
//
// let nunu = new 기게('consume')
// let garen   = new 기게('strike')
// //앞에 숫자는 어디로부터 생성된건지 알려주는거야!
//
// console.log(nunu,garen)

// let 누누 ={
//     q:'consume',
//     w:'snowball'
// }
// let garen = {
//         q:'strike',
//         w:'courage'
//
// }
//
// console.log('class는 object 뽑는 기계일뿐')
//
//
// class Hero {
//     constructor(큐공격,떠블공격) {
//         this.q = 큐공격;
//         this.w = 떠블공격
//     }
// }
//
// let 누누 = new Hero('눈공격','떠블')
//
// console.log(누누)

class Person{
    name :string;
    constructor(name:string) {
        this.name= name;

    }
    say(){
        return "Hello, My name is"+this.name

    }

}

let person = new Person('june')

console.log(person)