findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);

function findMinAndMax(arr) {
    arr.sort(sortNumber);
    console.log('Min -> ' + arr[0]);
    console.log('Max -> ' + arr[arr.length - 1]);
}

function sortNumber(a,b) {
    return a - b;
}