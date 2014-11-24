function queryMess (arr) {
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].split(/&|=/g);
        var lineResult = {};
        for (var j = 0; j < line.length; j++) {
            line[j]=line[j].replace(/\+/g,' ');
            line[j]=line[j].replace(/%20/g,' ');
            line[j] = line[j].trim();
            line[j] = line[j].replace(/ +/g,' ');
            if (line[j].match(/\?/g)) {
                line[j] = line[j].split('').splice(line[j].indexOf('?')+1,line[j].length).join('');
            }
        }
        for (j = 0; j < line.length-1; j++) {
            if (j%2==0) {
                if (!lineResult[line[j]]) {
                    lineResult[line[j]] = [];
                    lineResult[line[j]].push(line[j+1]);
                }
                else if (lineResult[line[j]].indexOf(line[j+1]==-1)) {
                    lineResult[line[j]].push(' ' +line[j+1]);
                }
            }
        }
        for (var key in lineResult) {
            process.stdout.write(key +'=[' +lineResult[key]+']');
        }
        console.log();
    }
}

queryMess(['login=student&password=student']);
console.log();
queryMess(['field=value1&field=value2&field=value3',
    'http://example.com/over/there?name=ferret']);
console.log();
queryMess(['foo=%20%20%20%20%20++++%20%20++foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php']);
