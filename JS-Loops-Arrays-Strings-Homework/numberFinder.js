findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

function findMostFreqNum(arr) {
    var mostFrequent;
    var maxCount=Number.MIN_VALUE;
    var currentCount;
    var currentMostFrequent;
    for (var i = 0; i < arr.length ; i++) {
        currentCount=0;
        currentMostFrequent=arr[i];
        for (var j = i; j < arr.length ; j++) {
            if(arr[j]==arr[i]){
                currentCount++;
            }
        }
        if(currentCount>maxCount) {
            maxCount=currentCount;
            mostFrequent=currentMostFrequent;
        }
    }
    console.log(mostFrequent+' ('+maxCount+' times)');
}
