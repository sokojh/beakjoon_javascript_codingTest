// <script src='index.js'></script> // body 태그안에서 이렇게 사용 가능
// document.write(변수명) // 변수의 데이터를 웹 화면에 출력 할 때 사용하는 명령어는 이것
var a = 0;
var fruit;
fruit = "apple"
console.log(fruit[1]);
function func1(width, height) {
    return width * height;
    console.log("dd")

}
console.log(func1(2,3));

var student = {
    name: "hoho",
    age : 20,
    skills : ["Javascript","HTML","CSS"],
    sum : function(num1,num2) { return num1+num2;}


}
console.log(student)