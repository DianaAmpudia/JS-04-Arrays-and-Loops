/* === 1. Sum of Resistors in Series ===
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values
are positive. */

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

// Test cases

console.log(sumResitance([-1,5,6,3])); // "15 ohms"
console.log(sumResitance([14,3.5,6])); // "23.5 ohms"
console.log(sumResitance([8,15,100])); // "123 ohms"

/* === 2. Number divided into halves === 
Given a number, return the number divided into its halves in an array.

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`. */

const numDiv = (num) => {
    const halfNum = num / 2;
    return [halfNum, halfNum];
}

// Test cases
console.log(numDiv(4)); // [2, 2]
console.log(numDiv(10)); // [5, 5]

/* === 3. Secret Society ===

Find the name of a secret society based on the first letter of each member's name.
 
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`. */

function secretName(names) {
    let secretName = '';
    for (const element of names) {
        secretName += element[0];
    }
    return secretName;
}

/* This is another approach using map method. When we use map, it creates a new array. Map
goes through each element of the array and applies the function to it. As map proceesses
 each element, it adds the result to a new array. The original array remains unchanged.

function secretName(names) {
    return names.map(name => name[0]).join('');
}
*/

// Test cases
console.log(secretName(["Esperanza", "Franco", "Nia"])); // "EFN"
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); // "PRCJMR"
console.log(secretName(['Harry', 'Ron', 'Hermione'])); // "HRH"

/* === 4. Online Status ===
Display online status for a list of users.
 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

// Each case automatically breaks after the return statement, that's why we don't need explicit break statements.
function onlineStatus(users) {
    switch (users.length) {
        case 0:
            return "No one is online";
        case 1:
            return `${users[0]} is online`;
        case 2:
            return `${users[0]} and ${users[1]} are online`;
        default:
            return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
    }
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])); // mockIng99, J0eyPunch and 1 more online
console.log(onlineStatus(['mockIng99'])); // mockIng99 is online

/* === Array of Multiples ===
Create a function that takes two parameters (number, length) and returns
 an array of length containing multiples of the number.
 
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`. */

function arrayMultiplos(num, length) {
    let multiples = [];
    for (let i = 1; i <= length; i++) {
        multiples.push(num * i);
    }
    return multiples;
}

// Test cases
console.log(arrayMultiplos(2, 10)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6)); // [17, 34, 51, 68, 85, 102]
console.log(arrayMultiplos(3, 4)); // [3, 6, 9, 12]

/* === Positive dominance in Array ===
 
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

function positiveDom(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count > arr.length / 2;
}

//* Test cases
console.log(positiveDom([-1, -3, -5, 4, 6767])) // false
console.log(positiveDom([-1, 82, 38, 44, -57])) // true

/* === Antipodal Average ===
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/
function antipodalAverage(arr) {
   
    const half = Math.floor(arr.length / 2);
    const firstPart = arr.slice(0, half); //This returns an array containing elements from index 0 up to the half
    const secondPart = arr.slice(half); // This returns an array containing elements from index half to the end of the array
  
    if (arr.length % 2 !== 0) {
      secondPart.pop();
    }
  
    let result = [];
    for (let i = 0; i < half; i++) {
      result.push((firstPart[i] + secondPart[secondPart.length - 1 - i]) / 2);
    }
  
    return result;
  }
  console.log(antipodalAverage([1, 2, 3, 5, 22, 6])); // [3.5, 12, 4]
  console.log(antipodalAverage([1, 2, 3, 94])); // [47.5, 2.5]
  