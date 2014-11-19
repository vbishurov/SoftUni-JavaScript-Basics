lastDigitAsText(0);
console.log();
lastDigitAsText(-55);
console.log();
lastDigitAsText(133);
console.log();
lastDigitAsText(14567);

function lastDigitAsText(number) {
    switch (Math.abs(number) % 10) {
        case 0:
            console.log('Zero');
            break;
        case 1:
            console.log('One');
            break;
        case 2:
            console.log('Two');
            break;
        case 3:
            console.log('Three');
            break;
        case 4:
            console.log('Four');
            break;
        case 5:
            console.log('Five');
            break;
        case 6:
            console.log('Six');
            break;
        case 7:
            console.log('Seven');
            break;
        case 8:
            console.log('Eight');
            break;
        case 9:
            console.log('Nine');
            break;
    }
}
