const person = [
    { fullName: 'connie_gulgowski', age: 26, salary: 37613 },
    { fullName: 'alana_beatty', age: 47, salary: 12427 },
    { fullName: 'marlon_hagenes', age: 55, salary: 47476 },
    { fullName: 'gregorio_bechtelar', age: 49, salary: 28977 },
    { fullName: 'greyson_wolf', age: 23, salary: 5971 },
    { fullName: 'elinor_bergnaum', age: 56, salary: 12683 },
    { fullName: 'kaitlin_wuckert', age: 38, salary: 14170 },
    { fullName: 'zachary_casper', age: 32, salary: 47909 },
    { fullName: 'serena_schuppe', age: 46, salary: 15311 },
    { fullName: 'emmitt_towne', age: 50, salary: 39088 },
    { fullName: 'jamal_schowalter', age: 17, salary: 47427 },
    { fullName: 'adrienne_carter', age: 55, salary: 13149 },
    { fullName: 'khalid_shields', age: 51, salary: 29181 },
    { fullName: 'charlotte_bechtelar', age: 15, salary: 40683 },
    { fullName: 'mozelle_corwin', age: 41, salary: 39444 },
    { fullName: 'blaze_renner', age: 28, salary: 32130 },
    { fullName: 'lilian_rogahn', age: 58, salary: 13129 },
    { fullName: 'cara_emard', age: 41, salary: 46718 },
    { fullName: 'kyler_maggio', age: 19, salary: 6268 },
    { fullName: 'bernita_christiansen', age: 45, salary: 27047 },
    { fullName: 'elody_grant', age: 34, salary: 6948 },
    { fullName: 'skylar_steuber', age: 19, salary: 5568 },
    { fullName: 'dannie_ruecker', age: 46, salary: 7217 },
    { fullName: 'ramiro_dooley', age: 45, salary: 38104 },
    { fullName: 'destiny_bruen', age: 42, salary: 47054 },
    { fullName: 'albina_hansen', age: 27, salary: 47550 },
    { fullName: 'albina_smith', age: 17, salary: 24912 },
    { fullName: 'kellie_kunde', age: 38, salary: 32896 },
    { fullName: 'lisandro_denesik', age: 62, salary: 18840 },
    { fullName: 'nels_goyette', age: 55, salary: 6875 },
    { fullName: 'luciano_blick', age: 19, salary: 14904 },
    { fullName: 'leora_west', age: 57, salary: 49004 },
    { fullName: 'baylee_flatley', age: 24, salary: 5373 },
    { fullName: 'tamara_ortiz', age: 41, salary: 25922 },
    { fullName: 'ursula_mills', age: 35, salary: 14234 },
    { fullName: 'alycia_nader', age: 34, salary: 23347 },
    { fullName: 'stefan_powlowski', age: 47, salary: 46853 },
    { fullName: 'holly_dickinson', age: 39, salary: 38663 },
    { fullName: 'antonetta_turcotte', age: 37, salary: 43430 },
    { fullName: 'pierce_cruickshank', age: 32, salary: 28591 },
    { fullName: 'marlee_reichel', age: 40, salary: 8889 },
    { fullName: 'allene_schimmel', age: 64, salary: 17746 },
    { fullName: 'carleton_franey', age: 17, salary: 23369 },
    { fullName: 'enoch_goyette', age: 19, salary: 29910 },
    { fullName: 'summer_deckow', age: 17, salary: 2939 },
    { fullName: 'damian_kulas', age: 25, salary: 34857 },
    { fullName: 'lew_kerluke', age: 18, salary: 39196 },
    { fullName: 'kathleen_klocko', age: 47, salary: 17795 },
    { fullName: 'jacky_armstrong', age: 17, salary: 24689 },
    { fullName: 'aidan_fadel', age: 28, salary: 6565 }
];

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function caps(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// sort by age, 
// filter out minors, 
// make the names of the users from “john_smith” to “John Smith”
const promise1 = new Promise((resolve, reject) => {
    const sortedByName = [...person].sort((a, b) => b.age - a.age)
    const filterMinors = sortedByName.filter(person => {
        return person.age >= 18;
    })
    const fixedName = filterMinors.map(person => {
        const [firstName, lastName] = person.fullName.split('_');
        const editedPerson = {
            ...person,
            fullName: caps(firstName) + ' ' + caps(lastName)
        }
        return editedPerson
    })

    resolve(fixedName)
}).then(persons => {
    // create a new asynchronous promise
    console.log(persons); // you can save the result of promise 1 somewhere
    return new Promise((resolve, reject) => {
        // return the total salary of all users
        const sum = persons.reduce((total, person) => {
            return total + person.salary
        }, 0)
        resolve({
            theArray: persons,
            totalSalary: sum
        })
    })
}).then((res) => {
    // ang res, eto na yung result ng previous na then
    // since naka-chain sila
    console.log(res); 
    return res;
})


/*
Some notes
1. How to use filter, map, etc
const newArrayName = oldArrayName.funcName(entry => {
    // do something
    return // kung ano man
})

2. Creating edited objects
const newObject = {
    ...oldObject,
    newProperty1: newValue1,
    newProperty2: newValue2
}

3. Easy array deconstruction
long code:
const var1 = array[0];
const var2 = array[1];
const var3 = array[2];
shortcut:
const [var1, var2, var3] = array;

4. Easy object deconstruction
long code:
const property1 = obj.property1;
const property2 = obj.property2;
const property3 = obj.property3;
shortcut:
const {property1, property2, property3} = obj;
*/