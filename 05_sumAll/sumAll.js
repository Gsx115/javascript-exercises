const sumAll = function(start, end) {
 if (start < 0 || end < 0 || typeof(start) != "number" || typeof(end) != "number") return "ERROR";
 let sum = 0;
 let digit = start;
 do {
    sum += digit;
    (start < end) ? digit++ : digit--;
 } while (digit != end);
 return sum + end;
};

// Do not edit below this line
module.exports = sumAll;
