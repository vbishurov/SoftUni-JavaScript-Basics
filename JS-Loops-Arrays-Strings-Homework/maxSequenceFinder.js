findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);

function findMaxSequence(arr) {
    var longestSequence=[];
    var currentSequence=[];
    for (var i = 1; i < arr.length ; i++) {
        currentSequence=[];
        if (arr[i]>arr[i-1]) {
            currentSequence.push(arr[i-1]);
            while (arr[i]>arr[i-1]) {
                currentSequence.push(arr[i]);
                i++;
            }
        }
        else {
            currentSequence.push('no');
        }
        if (currentSequence.length>longestSequence.length) {
            longestSequence=currentSequence.slice();
        }
    }
    if (longestSequence.length==1) {
        console.log('no');
    }
    else {
        console.log(longestSequence);
    }
}
