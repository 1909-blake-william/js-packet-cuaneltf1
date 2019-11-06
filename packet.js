// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n) {
        if(n == 0||n == 1){
            console.log('n = ' + n);
        }else{
            let fib = new Array(n+1);
            fib[0] = 0;
            fib[1] = 1;
            for (let i = 2; i <= fib.length-1; i++) {
            fib[i] = fib[i-1] + fib[i-2];
            console.log(fib[n]);
            }
        }
}

fib(42);

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.



// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr){
    let rev = someStr.split("");
    console.log(rev);
    console.log(rev[0])
    let order = new Array(rev.length);
    console.log(order.length);
    for(let i = rev.length-1, j = 0; i>=0;i--,j++){
        order[j] = rev[i];
        console.log(order.join(""));
    }
}

reverseStr("stilleto");

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.



// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset) {
    console.log(someStr);
    console.log(someStr.length);
    if (isNaN(someStr) == false) {
        console.log('This is a number and not a string, please put in a string');
    } else if (length > someStr.length) {
        console.log('The length is longer than the string, please put a length within your string scope');
    } else if (offset > someStr.length || offset < 0) {
        console.log(`Your offset value isn't within your string range, please put in a valid input`)
    } else {
        let z = someStr.substring(length, offset);
        console.log(z);
    }
}

substring('times', 1, 2);

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum){
    let abs = Math.abs(someNum);
    let breakEven = [];
    let z;
    for(let  i = 0; i<=abs;i++){
        if(abs == 2){
            z = 'Two is even';
        }else{
            y = abs/i;
            if(Number.isInteger(y)===true){
                breakEven.unshift(y);
            }
        }
        if(breakEven.length>2 || someNum == -2){
            z = someNum + ' is even';
        }else{
            z = someNum + ' is odd';
        }
    }
    console.log(z);
}

isEven(-3);
isEven(0);
isEven(16384);

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr) {
    let split = someStr.split("");
    if (split.length % 2 != 0) {
        let equalizer = split.splice(Math.floor(someStr.length / 2), 1);
        let left1 = new Array(split.length / 2);
        let right1 = new Array(split.length / 2);
        let tOrF1 = false;
        for (let i = 0, j = 0, k = split.length - 1; i < split.length / 2, k > split.length / 2 - 1; i++ , j++ , k--) {
            left1[j] = split[i];
            right1[j] = split[k];
            if (left1[j] != right1[j]) {
                tOrF1 = someStr + ' is not palindrome';
            } else {
                tOrF1 = someStr + ' is a palindrom';
            }
        }
        console.log(tOrF1);
    } else {
        let left2 = new Array(split.length / 2);
        let right2 = new Array(split.length / 2);
        let tOrF2 = false;
        for (let i = 0, j = 0, k = split.length - 1; i < split.length / 2, k > split.length / 2 - 1; i++ , j++ , k--) {
            left2[j] = split[i];
            right2[j] = split[k];
            if (left2[j] != right2[j]) {
                tOrF2 = someStr + ' is not palindrome';
            } else {
                tOrF2 = someStr + ' is a palindrom';
            }
        }
        console.log(tOrF2);
    }
}

isPalindrome('aabbcbbaa');

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(someArr){
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}

deleteElement([3,6,1,4,6,4]);

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr){
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
}

spliceElement([3,6,6,3,7,3]);

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

