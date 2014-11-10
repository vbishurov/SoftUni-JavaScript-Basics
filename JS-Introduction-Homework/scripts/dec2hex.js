alert("The page will prompt you 3 times so you can easily check more numbers")
for (var i = 0; i < 3 ; i++) {
    var input = prompt("Enter a number");
    alert(dec2hex(input));
}

function dec2hex(d) {
    return (+d).toString(16).toUpperCase();
}