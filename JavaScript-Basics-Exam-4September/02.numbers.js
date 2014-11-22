function theNumbers (arr) {
    var numbers = arr[0].split(/\D+/g);
    for (var number in numbers) {
        if (numbers[number]==''||numbers[number]==undefined) {
            numbers.splice(numbers.indexOf(numbers[number]),1);
        }
        else {
            numbers[number]=Number(numbers[number]).toString(16).toUpperCase();
            if (numbers[number].length<4) {
                for (var i = numbers[number].length; i < 4; i++) {
                    numbers[number]='0'+numbers[number];
                }
                numbers[number]='0x'+numbers[number];
            }
            else {
                numbers[number]='0x'+numbers[number];
            }
        }
    }
    console.log(numbers.join('-'));
}

theNumbers(['5tffwj(//*7837xzc2---34rlxXP%$”.']);
