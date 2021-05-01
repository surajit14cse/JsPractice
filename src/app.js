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

//Immutability
r[4] = 'w';

console.log(r);