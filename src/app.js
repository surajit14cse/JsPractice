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
