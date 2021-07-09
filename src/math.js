//Using gcd or lcm

function gcd(val1, val2) {
    if (val1 > val2) {
        val1 = val1 + val2;
        val2 = val1 - val2;
        val1 = val1 - val2;
    }
    
    var gcd = val2;
    while (gcd % val1 != 0) {
        gcd = gcd + val2;
    }
    return gcd;
}

console.log(gcd( 100, 7));

function lcm(val1, val2) {
    var div1 = [];
    for (let i = 1; i * i <= val1; i++){
        if (val1 % i == 0) {
            div1.push(i, val1 / i);
        }       
    }
    var div2 = [];
    for (let i = 1; i * i <= val2; i++){
        if (val2 % i == 0) {
            div2.push(i, val2 / i);
        }       
    }
    div1.sort((a, b) => b - a);
    div2.sort((a, b) => b - a);

    for (let i = 0; i < div1.length; i++) {
        for (let j = 0; j < div2.length; j++) {
            if(div1[i] == div2[j]){
                return div1[i];
            }
        }
        
    }
}

console.log(lcm(15, 48));
