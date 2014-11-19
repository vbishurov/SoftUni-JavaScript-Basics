findLargestBySumOfDigits([5, 10, 15, 111]);
console.log();
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
console.log();
findLargestBySumOfDigits(['hello']);
console.log();
findLargestBySumOfDigits([5, 3.3]);

function findLargestBySumOfDigits(arr) {
    if (arr.length == 0) {
        console.log('undefined');
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== parseInt(arr[i], 10)) {
                console.log('undefined');
                return;
            }
        }
        var maxSumNumber = 0;
        var maxSum = Number.MIN_VALUE;
        var currentSum = 0;
        for (i = 0; i < arr.length; i++) {
            currentSum = 0;
            var number = Math.abs(arr[i]);
            while (number > 0) {
                currentSum += number % 10;
                number = Math.floor(number / 10);
            }
            if (currentSum > maxSum) {
                maxSum = currentSum;
                maxSumNumber = arr[i];
            }
        }
        console.log(maxSumNumber);
    }
}

function isNumber(n) {
    return /\D/.test(n);
}
