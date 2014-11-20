var rows = document.querySelectorAll('body table tr'), i;
var button = document.getElementById('btnHideOddRows');
function hideOddRows() {
    if (button.innerHTML=='Hide Odd Rows') {
        for (i = 0; i < rows.length; i += 2) {
            rows[i].style.display = 'none';
        }
        button.innerHTML='Show Odd Rows'
    }
    else {
        for (i = 0; i < rows.length; i += 2) {
            rows[i].style.display = 'table-row';
        }
        button.innerHTML='Hide Odd Rows'
    }
}


button.addEventListener('click',hideOddRows,false);

