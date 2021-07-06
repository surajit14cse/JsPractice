//Strict Equality Operator

function testString(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testString(12));

//Comparing different values
function compareEqual(a, b) {
    if (a == b) {
        return "Equal";
    }

    return "Not Equal";
}

console.log(compareEqual(10, "10"));
console.log(compareEqual(100, "10"));

//Inequality Operator
function testNonEqual(val) {
    if (val != 95) {
        return "Not Equal";
    }
return "Equal";
}
console.log(testNonEqual(85));
console.log(testNonEqual(95));


//Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 23) {
        return "Not Equal";
    }
return "Equal";
}
console.log(testStrictNotEqual(23));

//Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10 ) {
        return "Ober 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(50));

//Logical Order in If Else Statements

function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    }
    else if (val < 5) {
        return "Less than 5";
    }
    else {
        return "Greater than or equal to 10";

    }
}
console.log(orderMyLogic(11));

//Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return "tiny";
    }
    else if (num < 10) {
        return "small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Big";
    }
    else if (num < 25 ) {
        return "Hugi"
    }
}
console.log(testSize(21));
//Usaing Golf Score

var names = ["Hele-in-one", "Eagle", "Birdie", "par", "Bogey", "Double Bogey"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names [0]
    }
    else if (strokes <= par - 2) {
        return names [1]
    }
    else if (strokes == par -1) {
        return names [2]
    }
    else if (strokes == par) {
        return names [3]
    }
    else if (strokes == par + 1) {
        return names [4]
    }
    else if (strokes == par +2) {
        return names [5]
    }
    else if (strokes >= par +3) {
        return names [6]
    }
}
console.log(golfScore(4, 6));

//Switch Statements

function caseInSwitch(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
    
        case 2:
        answer = "beta";
        break;

        case 3:
        answer = "gamma";
        break;

        case 4:
        answer = "delta";
        break;
    }
    return answer;
}
console.log(caseInSwitch(3));

//Default Option in Switch Statements

function switchOfSutff(val) {
    var answer = "";
    switch(val){
        case "a":
            answer = "alpha";
            break;
    
        case "b":
        answer = "bird";
        break;

        case "c":
        answer = "cat";
        break;
    
        default:
            answer = "stuff";
            break;
       
    }
    return answer;
}
console.log(switchOfSutff("c"));

//Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;

        case 7:
        case 8:
        case 9:
            answer = "Hig";
            break;
    }
    return answer;
}
console.log(sequentialSizes(4));

//Replacing If Else Chains with Switch 

function chainToSwitch(val) {
    var answer = "";
    switch (val){
        case "bob":
            answer = "marly";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "The number #1";
            break;
        case 99:
            answer = "Missed me by this much";        
            break;
           case 7:
               answer = "Ate Nine";
               break;
    } 
    return answer;
}
console.log(chainToSwitch(99));

