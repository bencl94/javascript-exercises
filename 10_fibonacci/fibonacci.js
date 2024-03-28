const fibonacci = function (f) {
    if (f < 0) { return 'OOPS' };
    if (f == 0) { return 0 };
    if (f == 1) { return 1 };

    return fibonacci(f - 1) + fibonacci(f - 2);
};

// Do not edit below this line
module.exports = fibonacci;
