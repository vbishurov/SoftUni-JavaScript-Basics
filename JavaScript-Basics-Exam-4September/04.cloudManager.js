function cloudManager(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].split(/\s+/g);
        var name  = line[0]
        var extension = line[1];
        var size = parseFloat(line[2]).toFixed(2);
        if (!result[extension]) {
            result[extension] = {'files':[], 'memory':[]};
        }
        result[extension].files.push(name);
        result[extension].memory.push(size)
    }
    for (var key in result) {
        result[key].memory = sumSizes(result[key].memory);
        result[key].files.sort();
    }
    var keys = Object.keys(result);
    keys.sort();
    var output = {};
    for (i = 0; i < keys.length; i++) {
        output[keys[i]]=result[keys[i]];
    }
    console.log(JSON.stringify(output));

    function sumSizes(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum+=parseFloat(arr[i]);
        }
        return sum.toFixed(2);
    }
}

cloudManager(['sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB']);