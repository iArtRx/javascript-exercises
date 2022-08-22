const palindromes = function (string) {
    const regex = /[\W_]/g;
    let newString = string.toLowerCase().replace(regex, "");
    let reversed = newString.split("").reverse().join("");

    return newString === reversed;

};

// Do not edit below this line
module.exports = palindromes;
