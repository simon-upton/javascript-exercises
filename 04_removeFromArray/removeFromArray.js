const removeFromArray = function(arr, ...targets) {
    for (target of targets) {
        arr = arr.filter(function(item) {
            return !(item === target);
        })
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
