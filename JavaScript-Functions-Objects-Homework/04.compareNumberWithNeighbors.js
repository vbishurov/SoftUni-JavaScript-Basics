biggerThanNeighbors(2, [1, 2, 3, 3, 5]);
console.log();
biggerThanNeighbors(2, [1, 2, 5, 3, 4]);
console.log();
biggerThanNeighbors(5, [1, 2, 5, 3, 4]);
console.log();
biggerThanNeighbors(0, [1, 2, 5, 3, 4]);
console.log();

function biggerThanNeighbors(index, arr) {
    if (index == 0 || index == arr.length - 1) {
        console.log('only one neighbor');
    }
    else if (index >= arr.length) {
        console.log('invalid index');
    }
    else {
        if (arr[index] <= arr[index - 1] || arr[index] <= arr[index + 1]) {
            console.log('not bigger');
        }
        else if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
            console.log('bigger');
        }
    }
}
