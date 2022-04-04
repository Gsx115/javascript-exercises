const removeFromArray = function(array, input) {
    if(arguments.length < 3) return array.filter(item => item !== input);
    let args = [].slice.call(arguments);
    let newArray = args.shift();
    args.forEach((arg)=>{
        newArray = newArray.filter(item => item !== arg);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
