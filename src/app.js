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

//Day In Month

function dayInMonth(month, year) {
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                return 29;

            }
            else 
                return 28;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;

        default: 

          return "Invalid";
    }

}
console.log(dayInMonth(9, 2020));

//Returning Boolean Values from Functions

function isLess (a, b) {
    return a < b;
}
console.log(isLess(50, 15));

//Return Early Pattern for Functions
function abTest(a, b) {
    if (a < 0 || b <0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}
console.log(abTest(7,4));

//Counting Cards
var count = 0;
function cc(card) {
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count ++;
          break;
          
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }
    var holdbet ='Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(6));

//Build Java Script Objects
var ourDog  = {
    "name": "bull",
    "color": "Clack",
    "lage": 4,
    "tails": 1,
    "friends":[]
};

console.log("name");

//Accessing Object properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",

};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var shoesValue = testObj.shoes;

console.log("hat", "shirt", "shoes");
