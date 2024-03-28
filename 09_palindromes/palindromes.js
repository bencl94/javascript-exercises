const palindromes = function (str) {
    let whiteSpace = /\s/g;
    str = str.replace(whiteSpace, '');

    let punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    str = str.replace(punctuation, '');

    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (str[i].toLowerCase() != str[j].toLowerCase()) { return false; }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
