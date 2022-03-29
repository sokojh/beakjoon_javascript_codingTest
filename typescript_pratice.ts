let 이름 : string = 'kim';
let 숫자 : number = 1;
let 불린 : boolean = true;
let 이름배열 : string[] = ['kim','park']
let 나이 : { age : number } = { age: 3}

let 이름에숫자나문자 : string | number = 123; // 타입을 or로 받을 수 있음
type nameType = string | number; //타입을 만들어서 변수에 넣고 사용도 가능
let 요렇게 : nameType = 'kim'

type myNameType = 'kim' | 'park';
let 오이렇게 : myNameType = 'kim'  //나만의 타입으로 만들어서 kim아니면 park만 오게 가능. 이런걸 literal type 이라고 함.
console.log(이름에숫자나문자)
//------------------------함수
function 함수명(x:number) :number{  //함수에서도 파라미터값이 제대로 타입이 오고 있는지 확인 해줄수 있음.또한 void로 return이 없는지 체크 할 수 있음.

    return x * 2
}
//------------------------함수
function 함수(x:number|string){  //타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없습니다.
                                 // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락해줍니다.
    if(typeof x ==='number'){
        return x * 2
    }

}