function xRemove(arr) {
    var lines = [];
    var linesCopy = [];
    for (var i = 0; i < arr.length; i++) {
        lines[i] = arr[i].split('');
        linesCopy[i] = arr[i].toLowerCase().split('');
    }

    for (var row = 0; row < lines.length-2; row++) {
        for (var column = 0; column < lines[row].length; column++) {
            if (linesCopy[row][column]==linesCopy[row][column+2] &&
            linesCopy[row][column]==linesCopy[row+1][column+1] &&
            linesCopy[row][column]==linesCopy[row+2][column] &&
            linesCopy[row][column]==linesCopy[row+2][column+2]) {
                lines[row][column] = '';
                lines[row][column+2]='';
                lines[row+1][column+1]='';
                lines[row+2][column]='';
                lines[row+2][column+2]='';
            }
            if (linesCopy[row][column]==linesCopy[row][column-2] &&
                linesCopy[row][column]==linesCopy[row+1][column-1] &&
                linesCopy[row][column]==linesCopy[row+2][column] &&
                linesCopy[row][column]==linesCopy[row+2][column-2]) {
                    lines[row][column] = '';
                    lines[row][column-2]='';
                    lines[row+1][column-1]='';
                    lines[row+2][column]='';
                    lines[row+2][column-2]='';
            }
        }
    }
    for (i = 0; i < lines.length; i++) {
        console.log(lines[i].join(''));
    }
}

xRemove(['abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv']);
