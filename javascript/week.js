let week=getWeek(3);
console.log(getWeek(3));
function getWeek(day){
    if(day==1){
        return "Sunday";
    }
    else if(day==2){
        return "Monday";
    }
    else if(day==3){
        return "Tuesday";
    }
    else if(day==4){
        return "Wednesday";
    }
    else if(day==5){
        return "Thursday";
    }
    else if(day==6){
        return "Friday";
    }
    else if(day==7){
        return "Saturday";
    }
    else{
        return "Invalid";
    }
}