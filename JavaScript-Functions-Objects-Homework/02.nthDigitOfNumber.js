findNthDigit([1, 6]);
console.log();
findNthDigit([2, -55]);
console.log();
findNthDigit([6, 923456]);
console.log();
findNthDigit([3, 1451.78]);
console.log();
findNthDigit([6, 888.88]);

function findNthDigit(arr) {
    var num = Math.abs(arr[1]).toString().replace('.', '').split('');
    num = num.reverse();
    var position = arr[0] - 1;
    if (num[position] == undefined) {
        console.log("The number doesn't have " + (position + 1) + " digits");
    }
    else {
        console.log(num[position]);
    }
}
