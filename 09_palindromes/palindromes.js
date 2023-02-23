const palindromes = function (str) {
    let cleanStr = str.toLowerCase().replace(/[ .,!]/g, '');
    let reverseStr = cleanStr.split('').reverse().join('');

    return cleanStr == reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
