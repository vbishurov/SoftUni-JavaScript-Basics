printNumbers(20);
console.log();
printNumbers(-5);
console.log();
printNumbers(13);

function printNumbers(number) {
    var numbers = [];
    var counter=0;
    for (var i = 1; i < number ; i++) {
        if (i%4==0||i%5==0){
            continue;
        }
        else {
            numbers.push(i);
            counter++;
        }
    }
    if (counter==0){
        numbers[0]='no';
    }
    console.log(numbers.join());
}
