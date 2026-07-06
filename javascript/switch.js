let value=getGrade(90);
console.log(getGrade(90));
function getGrade(marks){
    if(marks>=90 && marks<=100){
        return "A+";
    }
    else if(marks>=80 && marks<90){
        return "A";
    }
    else if(marks>=70 && marks<80){
        return "B+";
    }
    else if(marks>=60 && marks<70){
        return "B";
    }
    else 
        return "Fail";
}