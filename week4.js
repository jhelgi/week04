//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
let array1 = ages[0];
let array2 = ages[ages.length -1];
console.log(array2 - array1);
//I took the first array element with array1 and subtracted it from array2.

//b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log(ages.push(31));
console.log(ages);
//I used the push array to add 31 as the new last element of the ages array.

let newArray1 = ages[0];
let newArray2 = ages[ages.length -1];
console.log(newArray2 - newArray1);
//I just copied the array up above and gave it new variables to make sure it outputs the correct answer.

//c. Use a loop to iterate through the array and calculate the average age.
function getTotal(ages) {
    let total = 0;
    for (let age of ages) {
        total += age;
    }
    return total;
}
console.log(getTotal(ages));
//Here I created a function to get the total sum of the ages array.

function getAverage(ages) {
    return getTotal(ages) / ages.length;
}
console.log(getAverage(ages));
//Then I used the total sum function to get the average of the ages array. 


//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//a. Use a loop to iterate through the array and calculate the average number of letters per name.
function lettersAverage(names) {
let total = 0;
for (let i = 0; i < names.length; i++) {
    total += names[i].length;
    }
    return total/names.length;
}
console.log(lettersAverage(names));
//Using a for loop, I took the total sum of letters in each name and divided it by the total amount of names.

//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let string = '';
for (let i = 0; i < names.length; i++) {
    string += `${names[i]}` + ' ';
}
console.log(string);
//I believe this is the answer they're looking for. I created a variable equaling single quotes, and then I concatenated them with the names array inside of a template literal.


//3. You can access the last element of an array by using array.length -1 or by using array.pop.
//let lastName = names[names.length -1];
//console.log('3. ' + lastName);

//let lastAge = ages.pop();
//console.log(lastAge);


//4. You could use the array.shift method for accessing the first element or by referring to it's index number.
//let firstName = names.shift();
//console.log('4. ' + firstName);

//let firstAge = ages[0];
//console.log(firstAge);



//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}
console.log(nameLengths);
//This problem took me quite a while to figure out. I had difficulty figuring out what to set the nameLengths array equal to. I took the new array with the index and set it equal to
//the names array with the index and the length of each name.


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log(sum);
//I set the sum equal to zero, used another for loop, and set the sum equal to the sum plus the namesLength array with the index. 


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
function concatNTimes(word, n) {
    let con = word;
    for (let i = 1; i < n; i++) {
        con = con.concat(word);
    }
    return con;
}
console.log(concatNTimes('Coding', 4));
//I created a function that kind of explains what I need to happen and then put in the parameters I need. I used the concat method to combine my words together.
//Then I created my arguments from parameters in the console.log.


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
    return firstName.concat(' ', lastName);
}
console.log(fullName('Jordan', 'Helgason'));
//I used the concat method again with the firstName param, and joined it with a space between the lastName param. I used my name as the argument.


//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isTotalGreaterThan100(ages) {
    sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum = sum + ages[i];
    }
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(isTotalGreaterThan100(ages));
//For this problem I used the ages array from question 1. I figured it was easier than trying to randomly think of numbers. I created my function, used the ages array as the param,
//set the sum equal to zero, used a for loop, and set the sum equal to the sum plus the ages array with index. Created a boolean to return true if above loop is greater than 100, or
//return false if it's less than 100.


//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function returnAverage(ages) {
    sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum = sum + ages[i];
    }
    return (sum/ages.length);
}
console.log(returnAverage(ages));
//Again, I used the ages array to do this problem. I pretty much set up the problem the same way as the previous problem, but instead of returning a boolean, I returned the sum of the 
//ages array and divided it by the length of the ages array.


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const Array1 = [1, 2, 3, 4, 5];
const Array2 = [7, 10];
let total1 = 0;
let total2 = 0;
//Here I created two arrays with the const keyword, as well as two total variables.

function isTrue(firstArray, secondArray) {
    for(let i = 0; i < firstArray.length; i++) {
        total1 += firstArray[i] / firstArray.length;
    }
    for(let i = 0; i < secondArray.length; i++) {
        total2 += secondArray[i] / secondArray.length;
    }
    if(total1 > total2) {
        return true;
    } else {
        return false;
    }
}
console.log(isTrue(Array1, Array2));
//I created my isTrue function and set the params to the arrays above. I then used for loops and an if loop for a boolean. I set my total variables equal to my params with index divided by
//the same params with the length methods. Then I ran an if loop to return true/false depending on which array had the greater average. I then used my const arrays as my arguments.


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 20;
function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.50)) {
        return true;
    } else {
        return false;
    }
}
console.log( willBuyDrink(isHotOutside, moneyInPocket));
//For this question, I created two variables, one boolean and one number. I created my function and used the variables as my params. I used an if loop with the && operator combining both params.


//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
const campus1 = [340, 170, 500];
const campus2 = [410, 290, 630, 850];
let students1 = 0;
let students2 = 0;
//I randomly created to two const arrays and declared two student variables.

function whichIsBigger(pop1, pop2) {
    for (let i = 0; i < pop1.length; i++) {
        students1 = sum + campus1[i];
    }
    for (let i = 0; i < pop2.length; i++) {
        students2 = sum + campus2[i];
    }
    if (campus1 > campus2) {
        return 'campus1';
    } else {
        return 'campus2';
    }
}
console.log(whichIsBigger(campus1, campus2));
//This function takes the sum of students at both campuses and returns a string
//to see which campus has a bigger population. It's similar to an earlier problem,
//but it was nice practice to help me understand how to create it.
//I chose this type of function, because I'm still unfamiliar with them.
//I struggle with loops and iterating them through functions and arrays.
//I have a tendency to overthink word problems.
//I'm just glad I was able to figure these promblems out with the help
//of my notes and the resources provided by Google.