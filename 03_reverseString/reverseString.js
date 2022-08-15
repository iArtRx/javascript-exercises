const reverseString = function(string) {
    const split = string.split("").reverse();
    const newString = split.join("");
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
