/*
* === 1. Sum of Resistors in Series ===
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values
are positive.
*/

function sumResitance(resistors){
    let resistanceSum = 0;
    for (let i = 0; i < resistors.length; i++) {
        resistanceSum += Math.abs(resistors[i]);
    }
    return `${resistanceSum} ohms`;
}

/* This is another approach using reduce method. This method “reduce” an array's values
 into one value.The 0 at the end of reduce is the initial value of the sum.

function sumResitance(resistors){
    const total = resistors.reduce((acc,resistance) => acc + Math.abs(resistance), 0);
    return console.log(total + " ohms");
}
*/

//* Test cases

console.log(sumResitance([-1,5,6,3])); // should return "15 ohms"
console.log(sumResitance([14,3.5,6])); // should return "23.5 ohms"
console.log(sumResitance([8,15,100])); // should return "123 ohms"

/*
* === 2. Number divided into halves === 
Given a number, return the number divided into its halves in an array.

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

-tomar el numero que se ingreso
-dividirlo en dos partes iguales 
-Se crea un array con las dos partes

*/

const numDiv = (num) => {
    const halfNum = num / 2;
    return [halfNum, halfNum];
}

//* Test cases
console.log(numDiv(4)); // should return [2, 2]
console.log(numDiv(10)); // should return [5, 5]


/*
* === 3. Secret Society ===

Find the name of a secret society based on the first letter of each member's name.
 
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

function secretName(names) {
    let secretName = '';
    for (const element of names) {
        secretName += element[0];
    }
    return secretName;
}

/*
This is another approach using map method. When we use map, it creates a new array. Map goes through each element of the array and applies the function to it.
As map proceesses each element, it adds the result to a new array. The original array remains unchanged.

function secretName(names) {
    return names.map(name => name[0]).join('');
}
*/

//* Test cases
console.log(secretName(["Esperanza", "Franco", "Nia"])); // should return "EFN"
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); // should return "CJMPRR"
console.log(secretName(['Harry', 'Ron', 'Hermione'])); // should return "HHR"