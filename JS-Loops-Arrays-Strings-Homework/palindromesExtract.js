findPalindromes('There is a man, his name was Bob.');

function findPalindromes(str) {
    str=str.replace('.','');
    var words=str.split(' ');
    var output= [];
    for (var i = 0; i < words.length ; i++) {
        var reversed = words[i].toLowerCase().split('').reverse();
        if (words[i].toLowerCase()===reversed.join('')) {
            output.push(words[i].toLowerCase());
        }
    }
    console.log(output.join(', '));
}
