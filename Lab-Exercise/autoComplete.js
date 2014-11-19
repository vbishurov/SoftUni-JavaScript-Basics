function solve(arr) {
    var words = arr[0].split(/\s+/g);
    var tests = arr.splice(1);
    var completes = {};
    for (var i = 0; i < tests.length; i++) {
        var re = new RegExp(tests[i],"i");
        for (var j = 0; j < words.length; j++) {
            if (re.test(words[j])) {
                if (!completes[tests[i]]) {
                    completes[tests[i]]=words[j];
                }
                else{
                    if (completes[tests[i]]=='-') {
                        completes[tests[i]]=words[j];
                    }
                    else if (completes[tests[i]]>words[j]||completes[tests[i]].length>words[j].length) {
                        completes[tests[i]]=words[j];
                    }
                }
            }
            else if (!completes[tests[i]]) {
                completes[tests[i]]='-';
            }
        }
    }

    for (var key in completes) {
        console.log(completes[key]);
    }
}