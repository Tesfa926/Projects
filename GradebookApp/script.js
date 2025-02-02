function getAverage(scores){
    let sum = 0 ;
for(let score of scores){
    sum += score;
} 
let average = sum/ scores.length ;
return average;
}

function getGrade(score){
if(score === 100){
    return "A++";
}
else if(score >= 90){
    return "A";
}
else if(score >= 80){
    return "B";
}
else if(score >= 70){
    return "C";
}
else if(score >= 60){
    return "D";
}
else{
    return "F";
}
}

function hasPassingGrade(score){
if(score >= 60){
    return true;
}
else{
    return false;
}
}

function studentMsg(totalScores,studentScore){
    if(studentScore >= 60){
        return ("Class average: " + getAverage(totalScores) + "." + " Your grade: " + getGrade(studentScore) + "."+ " You passed the course.") ;
    }
    else{
        return ("Class average: " + getAverage(totalScores) + "." + " Your grade: " + getGrade(studentScore) + "." + " You failed the course.") ;
    }
}