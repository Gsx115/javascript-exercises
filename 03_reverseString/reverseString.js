const reverseString = function(str) {
    let array = [];
    let newStr = [];
    array = str.split(' ');
    array.forEach((word)=>{
        newStr.push(word.split('').reverse().join(''));
    })
    return newStr.reverse().join(' ');
};

// Do not edit below this line
module.exports = reverseString;
