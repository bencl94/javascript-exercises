const reverseString = function (str) {
    let result = [];
    let strArray = str.split('');

    for (let i = strArray.length - 1; i >= 0; i--) {
        result[strArray.length - 1 - i] = str[i];
    }

    return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
