//Console print
console.log("hello word");

// Comment in js [Ctrl+C] & Uncomment [Ctrl+U]
console.log("from 1");
// console.log("from 2"); 
console.log("from 3");

//Declare Variable
var a = 4; //Number
console.log(a);

var b = "school"; //String
console.log(b);
var c = true; //Boolean
console.log(c);

//Uninitialize Variable
var d ;
console.log(d);

//Case Sensitivity
var StudeNt = 10;
var Student = 15;
console.log(StudeNt, Student);

//Arithmatic Operation
var f = 19; //Assign
var g = 12; //Assign
//Addition
console.log(f+g);
//Substruction
console.log(f*g);
//Multiplition
console.log(f/g);
//Division
console.log(f-g);
//Findig a reminder
console.log(f%g);

//increment
console.log(f++) //First print, then increase

console.log(++g) //First increase, then print

//Decrement
console.log(f--) //First print, then decrease

console.log(--g) //First decrease, then print

//Augmented Operation
g = g+2;
f += 2;


//with decimal point
var v = 2.7 * 4.6;
console.log(v);

//String Declaration
var p = "Marry Doe"; //Double qoute
var q = 'Smith'; //Double qoute
var r = `Marry Doe`; //pitch


//String Concatination
console.log(p+q);

//String Interpolation
console.log(`${p} ${q}`);


//Escape
console.log("A\tB\nC\\D\`E\'F\"G\r");

//Equals
console.log(p === q); //False
console.log(p === r); //True

//Length of srting
console.log(r.length);

//Find n'th char of string
console.log(r[4]);
console.log(r.charAt(4));

//Immutability
r[4] = 'w';

console.log(r);

//Last Char
console.log(r[r.length -1]);

//Slicing
var x = r.slice(3, 8);
console.log(x);

//Splitting
x = r.split('y');
console.log(x);

//Array

var arr = [1, 10, 13, 8, 3];
console.log(arr);

arr = [true, false, true];
console.log(arr);


arr = ['ABC', 'DEF', 'SAD', 'GG BJB'];
console.log(arr);

arr = [1, 3 , 'abc', true];
console.log(arr);

//Array length
console.log(arr.length);

//find with index
console.log(arr[2]);


//replace 
arr[2] = 45;
console.log(arr);


//push - Add at last
arr.push("QWE");
console.log(arr);

//pop - Remove from Last
arr.pop();
console.log(arr);

//shift - Remove from First
var shifted = arr.shift();
console.log(shifted);
console.log(arr);

//unshift - Add at First
arr.unshift(17);
console.log(arr);

//Nested Array
arr.push([29, 55, 72]);
console.log(arr);

//Data of arry
var myArry=[12,30,50];
console.log(myArry[0], myArry[1]);

//modify arry data with index
var mysecondArry=[18,64,99];
console.log(mysecondArry)
mysecondArry[0]=45;
console.log(mysecondArry[0]);
mysecondArry[1]=65;
console.log(mysecondArry[1]);

//Push or pop

var a = ["a", "b", "c",];
a.pop();
console.log(a);

a.push("d");
console.log(a);
 //Shift Unshift

 var a = [ "cat", "dog", "fox"];
 a.shift();
 console.log(a);

 a.unshift("max");
 console.log(a);

 //Concat
 var a = [ "sanjoy", "Sumon", "Rahul"];
 var b = a.concat("Joy", "Rani");
 console.log(b);

 //Join

 console.log(a.join(" "));

//Shooping List
var myList = [
    ["chocolate Bar",15],

];

console.log(myList);
console.log(myList.length);

myList.push(["Steak",3],["rice",1], ["Ice Cream",2]);

console.log(myList);

for (let i = 0; i < 100; i++) {
    
    PrintEvenOrOdd(i);

    
}

//Write Reusable with Functions
function PrintEvenOrOdd(myNumber) {
    if(myNumber%2==0){
        console.log(myNumber+ " even");
    }
    else{
        console.log(myNumber+" odd");
    }
}


//Parameterarized Function
function add(a, b, c) {
    return a + b + c;
}
console.log(add(2, 4, 6));
 
//Arguments
   
function add(){
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
        
    }
    return result;
}
 console.log( add( 4,5,10,12 , 10));

//global Scope

 var globalVar = "I am Local";

 function any (){
     var localVar = "I am global";
     console.log(localVar);
     console.log(globalVar);


     if (true) {
        var insideIf = "I am inside If";
        console.log(insideIf);
        

        
    }
 }

    
 any();

 //Return a Value from a Function
 
 function host(){
     console.log('I am host function...');
     return function(){
         console.log('I am chiled' ) ;
           }
 }
 var a = host();
 console.log(a);

 //Undefined Value returned

 var sum = 0;
 function addThree(){
     sum = sum + 3;
 }


 function addFive(){
     sum += 5;
 }
addFive();
console.log(addThree());
console.log(sum);

//Assignment with a Returned Value

 sum = add(10,12,14);
 console.log(sum);
//Assignment with a Returned Value
 function mul (a , b) {
     return a*b;

 }
sum = mul(18, 20);
console.log(sum);

  // Stand in Line
   var fire = [1, 2, 3, 4, 5];
  function NextLine(arr, item) {
      arr.push(item);
      return arr.shift();
  }
console.log(fire);
console.log(NextLine(fire,6));
console.log(fire);

//Boolean Values

function IsEven(item) {
    return item % 2 == 0;    
}

var boolitem = IsEven(23);
console.log(boolitem);
