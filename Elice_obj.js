
var student = {
    name: "hoho",
    age : 20,
    skills : ["Javascript","HTML","CSS"],
    sum : function(num1,num2) { return num1+num2;}


}
console.log(student.name); // 객체에서 데이터를 꺼내고 싶으면 객체명.프로퍼티명
console.log(student['name']); //객체명['프로퍼티명'] 이런식으로도 가능

student.name = "아아"
console.log(student.name);