var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
console.log(hours+":"+zeroPad(minutes,2));

function zeroPad(num, numZeros) {
    var n = Math.abs(num);
    var zeros = Math.max(0, numZeros - Math.floor(n).toString().length );
    var zeroString = Math.pow(10,zeros).toString().substr(1);
    if( num < 0 ) {
        zeroString = '-' + zeroString;
    }

    return zeroString+n;
}