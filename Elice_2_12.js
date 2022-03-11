var scores = {
    "kor": 55,
    "mat": 75,
    "eng": 50
}
kor = scores.kor
mat =  scores.mat
eng = scores.eng

if(kor,mat,eng<40||((kor+mat+eng)/3)<60){
    console.log("fail")
}else if(kor,mat,eng>=40 && ((kor+mat+eng)/3)>=60){
    console.log("pass")
}