const removeFromArray = (array, ...args) => {
    let newArray = array.filter(filtered => !args.includes(filtered));
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
