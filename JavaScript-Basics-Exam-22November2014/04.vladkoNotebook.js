function vladkoNotebook(arr) {
    var input = {};
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].split('|');
        if (!input[line[0]]) {
            input[line[0]] = []
        }
        input[line[0]].push(line);
    }
    for (var key in input) {
        var hasName = false;
        var hasAge = false;
        for (i = 0; i < input[key].length; i++) {
            if (input[key][i][1] == 'age') {
                hasAge = true;
            }
            if (input[key][i][1] == 'name') {
                hasName = true;
            }
        }
        var totalWins = 1;
        var totalLosses = 1;
        if (hasName && hasAge) {
            for (i = 0; i < input[key].length; i++) {
                line = input[key][i];
                if (!result[line[0]]) {
                    result[line[0]] = {'age': 0, 'name': '', 'opponents': [], 'rank': 0};
                }
                if (line[1] == 'name') {
                    result[line[0]].name = line[2];
                }
                if (line[1] == 'age') {
                    result[line[0]].age = line[2];
                }
                if (line[1] == 'win') {
                    result[line[0]].opponents.push(line[2]);
                    totalWins++;
                }
                if (line[1] == 'loss') {
                    result[line[0]].opponents.push(line[2]);
                    totalLosses++;
                }
            }
            result[line[0]].rank=(totalWins/totalLosses).toFixed(2);
        }
        hasName = false;
        hasAge = false;
    }

    result = sortObjectProperties(result);
    for (key in result) {
        result[key].opponents.sort();
    }

    console.log(JSON.stringify(result));

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}

vladkoNotebook(['purple|age|99',
        'red|age|44',
        'blue|win|pesho',
        'blue|win|mariya',
        'purple|loss|Kiko',
        'purple|loss|Kiko',
        'purple|loss|Kiko',
        'purple|loss|Yana',
        'purple|loss|Yana',
        'purple|loss|Manov',
        'purple|loss|Manov',
        'red|name|gosho',
        'blue|win|Vladko',
        'purple|loss|Yana',
        'purple|name|VladoKaramfilov',
        'blue|age|21',
        'blue|loss|Pesho']
);
