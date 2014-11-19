var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];
findYoungestPerson(persons);


function findYoungestPerson(persons) {
    var minAge=Number.MAX_VALUE;
    var minAgeIndex = 0;
    for (var i = 0; i < persons.length; i++) {
        if (persons[i]['age']<minAge) {
            minAge=persons[i]['age'];
            minAgeIndex=i;
        }
    }
    console.log('The youngest person is '+persons[minAgeIndex]['firstname']+' '+persons[minAgeIndex]['lastname'])
}
