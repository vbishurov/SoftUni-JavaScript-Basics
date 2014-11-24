function daggersAndSwords(arr) {
    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');
    for (var i = 0; i < arr.length; i++) {
        var currentLength = Math.floor(arr[i]);
        var currentType, currentApplication;
        if (currentLength <= 10) {
            continue;
        }
        else {
            currentType = currentLength > 40 ? 'sword' : 'dagger';
            switch (currentLength%5) {
                case 0: currentApplication='*rap-poker';
                    break;
                case 1: currentApplication ='blade';
                    break;
                case 2: currentApplication = 'quite a blade';
                    break;
                case 3: currentApplication = 'pants-scraper';
                    break;
                case 4: currentApplication = 'frog-butcher';
                    break;
            }
        }
        console.log('<tr><td>' + currentLength + '</td><td>' + currentType + '</td><td>' + currentApplication + '</td></tr>');
    }
    console.log('</tbody>');
    console.log('</table>');
}

daggersAndSwords(['17.8',
        '19.56',
        '13',
        '55.8',
        '126.96541651',
        '3']
);







