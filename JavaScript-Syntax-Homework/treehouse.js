treeHouseCompare([3, 2]);
treeHouseCompare([3, 3]);
treeHouseCompare([4, 5]);

function treeHouseCompare(arr) {
    var houseArea=(arr[0]*arr[0]+arr[0]*1/3*arr[0]).toFixed(2);
    var treeArea=(arr[1]*1/3*arr[1]+arr[1]*4/9*arr[1]*Math.PI).toFixed(2);
    if (Number(houseArea)>Number(treeArea)) {
        console.log("house/"+houseArea);
    }
    else {
        console.log("tree/"+treeArea);
    }
}
