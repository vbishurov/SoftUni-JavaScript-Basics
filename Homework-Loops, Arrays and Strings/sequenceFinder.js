findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log();
findMaxSequence(['happy']);
console.log();
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);

function findMaxSequence(arr) {
    var longestSequence=[];
    var currentSequence=[];
   for (var i = 0; i < arr.length ; i++) {
       currentSequence=[];
       if (arr[i]===arr[i+1]) {
           currentSequence.push(arr[i]);
           while(arr[i]===arr[i+1]) {
               currentSequence.push(arr[i+1]);
               i++;
           }
       }
       else {
           currentSequence.push(arr[i]);
       }
       if (currentSequence.length>=longestSequence.length) {
           longestSequence=currentSequence.slice();

       }
   }
    console.log(longestSequence);
}
