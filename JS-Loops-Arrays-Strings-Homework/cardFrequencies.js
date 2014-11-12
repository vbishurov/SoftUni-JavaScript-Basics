findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log();
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log();
findCardFrequency('10♣ 10♥');

function findCardFrequency(str) {
    str=str.replace(/\u2660|\u2665|\u2666|\u2663/g,'');
    var faces = str.split(/\s+/g);
    var frequencies={};
    for (var i = 0; i < faces.length ; i++) {
        if(frequencies[faces[i]]) {
            frequencies[faces[i]]++;
        }
        else {
            frequencies[faces[i]]=1;
        }
    }

    for (var card in frequencies) {
        var percent=(frequencies[card]/faces.length*100).toFixed(2);
        console.log(frequencies[card]+' -> '+percent+'%');
    }
}





