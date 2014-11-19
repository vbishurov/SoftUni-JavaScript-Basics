function solve() {
    var words = ['word screammm screech speech wolf'].split(/\s+/ig);
    console.log(words);
    var completes = {};
        var re = new RegExp(test,"i");
        for (var j = 0; j < words.length; j++) {
            if (re.test(words[j])) {
                if (!completes[test]) {
                    completes[test]=words[j];
                }
                else{
                    if (completes[test]=='-') {
                        completes[test]=words[j];
                    }
                    else if (completes[test[i]]>words[j]||completes[tests[i]].length>words[j].length) {
                        completes[test[i]]=words[j];
                    }
                }
            }
            else if (!completes[test[i]]) {
                completes[test[i]]='-';
            }
        }
}
