var cursorX;
var cursorY;

document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
};

setInterval("checkCursor()", 400);
function checkCursor(){
    document.getElementById('output').innerHTML+='\nX:'+cursorX+' Y:'+cursorY;
}

