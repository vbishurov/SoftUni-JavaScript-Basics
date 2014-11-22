function toTheStars(arr) {
    var system1 = arr[0].split(' ');
    var system2 = arr[1].split(' ');
    var system3 = arr[2].split(' ');
    var normandi = arr[3].split(' ');
    var turns = Number(arr[4]);
    for (var i = 0; i <= turns; i++) {
        if (checkSystem(normandi,system1,i)) {
            console.log(system1[0].toLowerCase());
            continue;
        }
        else if (checkSystem(normandi,system2,i)) {
            console.log(system2[0].toLowerCase());
            continue;
        }
        else if (checkSystem(normandi,system3,i)) {
            console.log(system3[0].toLowerCase());
            continue;
        }
        else {
            console.log('space');
        }
    }

    function checkSystem(normandi,system, i) {
        var matchX = Number(normandi[0])>=Number(system[1])-1 &&
            Number(normandi[0])<=Number(system[1])+1;
        var matchY = Number(normandi[1])+i>=Number(system[2])-1 &&
            Number(normandi[1])+i<=Number(system[2])+1;
        if (matchX&&matchY) {
            return true;
        }
        return false;
    }
}

toTheStars(['Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
    '4'
]);