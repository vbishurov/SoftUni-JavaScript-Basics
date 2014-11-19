console.log(sortArray([5, 4, 3, 2, 1]));
console.log();
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));

function sortArray(arr) {
    var index, secondIndex, min, temp;
    for (index = 0; index < arr.length - 1; index++) {
        min = index;
        for (secondIndex = index + 1; secondIndex < arr.length; secondIndex++) {
            if (arr[secondIndex] < arr[min]) {
                min = secondIndex;
            }
        }
        if (min != index) {
            temp = arr[min];
            arr[min] = arr[index];
            arr[index] = temp;
        }
    }
    return arr;
}
