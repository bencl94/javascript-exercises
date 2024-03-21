const sumAll = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }

    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    let sum = a;

    for (i = a + 1; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
