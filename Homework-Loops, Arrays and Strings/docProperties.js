//Only works in browser console
displayProperties();

function displayProperties() {
    for (var property in document) {
        console.log(property);
    }
}
