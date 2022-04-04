const fibonacci = function(num) {
    if(typeof(num) === "string") num = parseInt(num);
    if(num < 0) return "OOPS";
    let curMember = 1;
    let prevMember = 0;
    for(let i=1;i<num;i++){
        let newFib = curMember + prevMember;
        prevMember = curMember;
        curMember = newFib;
    }
    return curMember;
};

// Do not edit below this line
module.exports = fibonacci;
