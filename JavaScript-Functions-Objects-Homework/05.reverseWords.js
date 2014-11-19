reverseWordsInString('Hello, how are you.');
console.log();
reverseWordsInString('Life is pretty good, isn’t it?');


function reverseWordsInString(str) {
    var words = str.split(/\s+/g);
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }
    console.log(words.join(' '));
}
