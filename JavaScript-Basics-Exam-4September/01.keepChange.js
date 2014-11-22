function keepTheChange(arr) {
    var bill = Number(arr[0]);
    var mood = arr[1];
    var tip = 0;
    if (mood == 'happy') {
        tip=bill*0.1;
    }
    else if (mood == 'married') {
        tip=bill*0.0005;
    }
    else if (mood == 'drunk') {
        tip = bill*0.15;
        var num = tip.toString().split('');
        var power  = Number(num[0]);
        tip = Math.pow(tip,power);
    }
    else {
        tip=bill*0.05;
    }
    console.log(tip.toFixed(2));
}

keepTheChange([1230.83,'drunk']);
