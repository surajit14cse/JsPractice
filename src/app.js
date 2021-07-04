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
