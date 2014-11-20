function printDivs() {
    var divs = document.getElementsByTagName('div');
    var list = document.getElementById('result');
    for (var i = 0; i < divs.length ; i++) {
        if (divs[i].innerHTML!='') {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(divs[i].innerText));
            list.appendChild(li)
        }
    }
}
