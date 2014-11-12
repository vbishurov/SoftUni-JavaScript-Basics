console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));

function bitChecker(number) {
    var mask=1<<3;
    if ((number&mask)>0) {
        return true;
    }
    return false;
}
