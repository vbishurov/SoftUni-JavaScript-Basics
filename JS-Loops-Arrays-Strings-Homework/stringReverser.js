console.log(reverseString('sample'));
console.log();
console.log(reverseString('softUni'));
console.log();
console.log(reverseString('java script'));

function reverseString(str) {
    var chars = str.split('');
    chars = chars.reverse();
    str = chars.join('');
    return str;
}
