function lowerCase(code, shift){
    let tempCode = code;
    if(shift < 0){
        do {
            tempCode = code + shift;
            if(tempCode < 97) {
                shift = tempCode - 97;
                code = 123;
            }
        } while (tempCode < 97);
        return tempCode;
    }
    do {
        tempCode = code + shift;
        if(tempCode > 122) {
            shift = tempCode - 122;
            code = 96;
        }
    } while (tempCode > 122);
    return tempCode;
}

function upperCase(code, shift){
    let tempCode = code;
    if(shift < 0){
        do {
            tempCode = code + shift;
            if(tempCode < 65) {
                shift = tempCode - 65;
                code = 91;
            }
        } while (tempCode < 65);
        return tempCode;
    }
    do {
        tempCode = code + shift;
        if(tempCode > 90) {
            shift = tempCode - 90;
            code = 64;
        }
    } while (tempCode > 90);
    return tempCode;
}

const caesar = function(str, shift) {
    let array = str.split('');
    array.forEach((char, index) => {
        let code = char.charCodeAt(0);
        let newCode = code;
        if(code>=65 && code<=90) newCode = upperCase(code, shift);
        else if (code>=97 && code<=122) newCode = lowerCase(code, shift);

        array[index] = String.fromCharCode(newCode);
    })
    return array.join('');
};

// Do not edit below this line
module.exports = caesar;
