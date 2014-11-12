console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));

function checkDigit(number) {
    var thirdDigit=Math.floor(number/100)%10;
    if (thirdDigit%3==0) {
        return true;
    }
    return false;
}
