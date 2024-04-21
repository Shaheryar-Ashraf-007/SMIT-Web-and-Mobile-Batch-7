// write a program which calculates the number from 1 to 10 

let sum = 0;
for (let i = 1; i <=10; i++) {
    console.log(i);
    
}

// write a js program that print even numbers that is given in a integers 

const Arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (let i = 0; i < Arr.length; i++) {
    if (Arr[i]%2 ==0){
        console.log(Arr[i]);
    }
}

// write a js program to delete the all occurance in the given array 

function deleteOccurrences(arr, elementToDelete) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === elementToDelete) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// Example usage:
let array = [1, 2, 3, 4, 3, 5, 3];
let element = 3;
console.log("Original Array:", array);
deleteOccurrences(array, element);
console.log("Array after deleting all occurrences of", element + ":", array);

// write a js code to find the power of a number using for loop 

let base = 2;
let exponent = 5;
let result = 1;
function power(base, exponent){
for (let i = 0; i< exponent; i++) {

    result *=base;
}

return result;  
}
console.log("Result:", power(base, exponent));

// write a js program to print the pattern of numbers from 1 to 10 using for loop 

for (let i = 1; i <=10; i++) {
    pattern = "";

    for (let j = 1; j <=i; j++) {
        pattern += j+"";
    }
    console.log(pattern);
}

// write a js program to find the numbet of digits in a number 

let number = 12345;
function countDigit(number){
    let numberString = String(number)
    return numberString.length;
}
console.log("no of digit is :", countDigit(number));

// write a js program to calculate the sum of digits in a number 

let number2 = 12345;
function sumofDigits(number2){
    let numberString = String(number2);
    let sum = 0
    for (let i = 0; i < numberString.length; i++) {
        sum +=parseInt(numberString[i]);
    }
    return sum;
}
console.log("the sum of digits is:", sumofDigits(number2))

// write a jd program to calculate the largest number in a array 

let arr = [1,2,3,4,5,6,7,8,9];
function maxNumber(arr){
  if(arr.length === 0){
  return "array is empty";
}
let max = 0;
for (let index = 1; index < arr.length; index++) {
    if (max < arr[index]){
        max = arr[index]
    }

}
return max;
}

console.log("the largest number is :", maxNumber(arr));

// write a js code to print the fibonacci series for a given value of N 

let N = 10;

function fibonacciSeries(N){
    let fibArray = [];

    let a = 0;
    let b = 1;
    if (N <= 0){

        return fibArray;

    }

    fibArray.push(a);
    if (N >= 2){
        fibArray.push(b);
    }

    for (let index = 2; index < N; index++) {

        let c = a+b
        fibArray.push(c);
    }

    a = b;
    b = c;
    return fibArray;
}
console.log("the fabbiconi series is :",N, ":",fibonacciSeries(N));


// write a js code to print the fibonacci series for a given value of N 

function findDuplicates(arr) {
    let duplicates = {};
    let result = [];

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        // If the element is already in the duplicates object, it's a duplicate
        if (duplicates[element] !== undefined) {
            // If the duplicate is not already in the result array, add it
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        } else {
            // Add the element to the duplicates object
            duplicates[element] = 1;
        }
    }

    return result;
}

// Example usage:
let array2 = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];
console.log("Duplicates:", findDuplicates(array2));

// write a js code to find the linear search algorithm 

function linearSearch(arr, target) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element equals the target, return its index
        if (arr[i] === target) {
            return i;
        }
    }
    // If the target is not found, return -1
    return -1;
}

// Example usage:
let array3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let target = 9;
console.log("Index of", target, ":", linearSearch(array3, target));

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);

        // If the target is found at the middle index, return it
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            // If the target is greater than the value at the middle index, search the right half
            left = mid + 1;
        } else {
            // If the target is smaller than the value at the middle index, search the left half
            right = mid - 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Example usage:
let array4 = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let target1= 11;
console.log("Index of", target, ":", binarySearch(array4, target1)); 











