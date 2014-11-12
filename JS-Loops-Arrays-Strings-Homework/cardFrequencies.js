findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log('\n');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log('\n');
findCardFrequency('10♣ 10♥');

function findCardFrequency(str) {
    str=str.replace(/\u2660|\u2665|\u2666|\u2663/g,'');
    var faces = str.split(/\s+/g);
    var uniqueCards=[];
    var frequencies=[];
    for (var i = 0; i < faces.length ; i++) {
        if(contains(uniqueCards,faces[i])) {
            frequencies[uniqueCards.indexOf(faces[i])]++;
        }
        else {
            uniqueCards.push(faces[i]);
            frequencies.push(1);
        }
    }

    for (var card in uniqueCards) {
        var percent=(frequencies[card]/faces.length*100).toFixed(2);
        console.log(uniqueCards[card]+' -> '+percent+'%');
    }
}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}



