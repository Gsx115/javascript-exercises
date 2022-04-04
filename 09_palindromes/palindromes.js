const palindromes = function (str) {
    let regex = /[\s\W0-9]/gi;
    let newStr = str.toLowerCase().replace(regex,'');
    let pal = newStr.split('');
    if (newStr === pal.reverse().join('')) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
