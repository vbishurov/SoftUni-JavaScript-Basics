function soccerResults(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].split(/[\s+]?\/[\s+]?|[\s+]?:[\s+]?|[\s+]?-[\s+]?/g);
        var homeTeam = line[0];
        var awayTeam = line[1];
        var goalsScored = line[2];
        var goalsConceded = line[3];
        if (!result[homeTeam]) {
            result[homeTeam]={'goalsScored':Number(goalsScored),
                'goalsConceded':Number(goalsConceded), 'matchesPlayedWith':[]};
            result[homeTeam].matchesPlayedWith.push(awayTeam);
        }
        else {
            result[homeTeam].goalsScored+=Number(goalsScored);
            result[homeTeam].goalsConceded+=Number(goalsConceded);
            if (result[homeTeam].matchesPlayedWith.indexOf(awayTeam)==-1) {
                result[homeTeam].matchesPlayedWith.push(awayTeam);
            }
        }
        if (!result[awayTeam]) {
            result[awayTeam]={'goalsScored':Number(goalsConceded),
                'goalsConceded':Number(goalsScored), 'matchesPlayedWith':[]};
            result[awayTeam].matchesPlayedWith.push(homeTeam);
        }
        else {
            result[awayTeam].goalsScored+=Number(goalsConceded);
            result[awayTeam].goalsConceded+=Number(goalsScored);
            if (result[awayTeam].matchesPlayedWith.indexOf(homeTeam)==-1) {
                result[awayTeam].matchesPlayedWith.push(homeTeam);
            }
        }
    }

    result = sortObjectProperties(result);
    for (var team in result) {
        result[team].matchesPlayedWith.sort();
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

soccerResults(['Germany / Argentina: 1-0',
        'Brazil / Netherlands: 0-3',
        'Netherlands / Argentina: 0-0',
        'Brazil / Germany: 1-7',
        'Argentina / Belgium: 1-0',
        'Netherlands / Costa Rica: 0-0',
        'France / Germany: 0-1',
        'Brazil / Colombia: 2-1'
    ]
);
