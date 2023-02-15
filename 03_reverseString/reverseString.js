const reverseString = function(str) {
    finalString = "";

    for (character of str) {
        finalString = character + finalString;
    }

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
