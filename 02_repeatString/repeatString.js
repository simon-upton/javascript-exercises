const repeatString = function(str, numCopies) {
    if (numCopies < 0) return "ERROR";

    let finalString = "";

    for (let i = 0; i < numCopies; i++) {
        finalString += str;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
