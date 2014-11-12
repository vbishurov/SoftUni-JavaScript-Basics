findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');

function findMostFreqWord(str) {
    var words = str.toLowerCase().split(/\W+/g);
    var output = {};
    var maxCount = Number.MIN_VALUE;
    var currentCount;
    for (var i = 0; i < words.length ; i++) {
        currentCount=0;
        for (var j = i; j < words.length ; j++) {
            if (words[j]==words[i]) {
                currentCount++;
            }
        }
        if (currentCount==maxCount) {
            output[words[i]]=currentCount;
        }
        else if (currentCount>maxCount){
            maxCount=currentCount;
            output = {};
            output[words[i]]=currentCount;
        }
    }
    var sortedKeys=[];
    for (var key in output) {
        sortedKeys.push(key);
    }
    sortedKeys.sort();
    for (var word in sortedKeys) {
        console.log(sortedKeys[word]+' -> '+output[sortedKeys[word]]+' times');
    }

}
