console.log(evenNumber(3));
console.log(evenNumber(127));
console.log(evenNumber(588));

function evenNumber(number) {
    if (number%2==0) {
        return true;
    }
    return false;
}
