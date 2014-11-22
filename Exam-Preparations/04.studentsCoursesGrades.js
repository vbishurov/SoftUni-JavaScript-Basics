function studentsCoursesGrades(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].split('|');
        var student = line[0].trim();
        var course = line[1].trim();
        var grade = line[2].trim();
        var visits = line[3].trim();
        if (!result[course]) {
            result[course] = {'avgGrade':[],'avgVisits':[],'students':[]};
        }
        result[course].avgGrade.push(grade);
        result[course].avgVisits.push(visits);
        if (result[course].students.indexOf(student)==-1) {
            result[course].students.push(student);
        }
    }
    for (var key in result) {
        result[key].avgGrade = findAverage(result[key].avgGrade);
        result[key].avgVisits = findAverage(result[key].avgVisits);
        result[key].students.sort();
    }

    result = sortObjectKeys(result);

    console.log(JSON.stringify(result));

    function sortObjectKeys(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }

    function findAverage(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum+=Number(arr[i]);
        }
        return Number((sum/arr.length).toFixed(2));
    }
}

studentsCoursesGrades(['Milen Georgiev|PHP|2.02|2',
        '  Ivan Petrov | C# Basics | 3.20 | 22',
        'Peter Nikolov | C# | 5.522 | 18',
        'Maria Kirova | C# Basics | 5.40 | 4.5',
        'Stanislav Peev | C# | 4.012 | 15',
        '   Ivan Petrov |    PHP Basics     |     5.120 |6',
        'Ivan Goranov | SQL | 5.926 | 12',
        'Todor Kirov | Databases | 5.50 |0.0000',
        'Maria Ivanova | Java | 5.83 | 37',
        'Milena Ivanova |    C# |   1.823 | 4.5',
        '     Stanislav Peev   |    C#|   4.122    |    15',
        'Kiril Petrov |PHP| 5.10 | 6',
        'Ivan Petrov|SQL|5.926|3',
        '      Peter Nikolov   |    Java  |   5.9996    |    9',
        'Stefan Nikolov | Java | 4.00 | 9.5',
        'Ivan Goranov | SQL | 5.926 | 12.5',
        'Todor Kirov | Databases | 5.150 |0.0000',
        'Kiril Ivanov | Java | 5.083 | 327',
        'Diana Ivanova |    C# |   1.823 | 4',
        '     Stanislav Peev   |    C#|   4.122    |    15',
        'Kiril Petrov |PHP| 5.10 | 6']
);