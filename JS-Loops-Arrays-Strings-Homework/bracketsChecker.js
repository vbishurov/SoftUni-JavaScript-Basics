console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));

function checkBrackets(str) {
    var openingBracket=str.match(/\(/g);
    var closingBracket=str.match(/\)/g);
    if (openingBracket.length!==closingBracket.length) {
        return 'incorrect';
    }
    else if (openingBracket.indexOf('(')>closingBracket.indexOf(')')) {
        return 'incorrect';
    }
    else {
        return 'correct';
    }
}
