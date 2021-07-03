function bmi(weight, hight) {
    return weight / (hight * hight);
    
    
}
function fitNess(bmi) {
    if (bmi < 18.5) {
        console.log("under weight");

    }
    else if (bmi > 25) {
        console.log("over weight");

    }
    else {
        console.log("normal weight");

    }
}

 var myWeight = 90;
 var myHeight = 69/39.37;
 var myBmi = bmi(myWeight,myHeight);
 console.log(myBmi);
fitNess(myBmi);
