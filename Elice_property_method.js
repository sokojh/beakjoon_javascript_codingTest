// 문자열 프로퍼티와 메서드
var str1 = "Hello World";
str1.length;
str1.charAt(0);
var arr = str1.split(' ');
console.log(arr)
// 배열 프로퍼티와 메서드
var fruit = ["사과","배","포도"];
fruit.length; // 데이터 개수를 나타낸다.
fruit.push("딸기"); //배열 뒤에 데이터 삽입 stack
fruit.unshift("레몬") //배열 앞에 데이터 삽입 que
fruit.pop(); // 배열 뒤의 데이터 제거
fruit.shift(); // 배열 앞의 데이터 제거
// math으 ㅣ수학 연산 메서드

Math.abs(-3); //절대갑
Math.ceil(0.3); // 올림 1일됨
Math.floor(10.9); // 내림 10이됨
Math.random(); //임의의 숫자 출력함