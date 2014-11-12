//In the example there are 21 numbers
//This makes 20 as the task requires

var arr = createArray();
console.log(arr.join());

function createArray() {
    var arr =[];
    for (var i = 0; i < 20 ; i++) {
        arr[i]=i*5;
    }
    return arr;
}
