// write a js programe to find the maximum between two numbers 
let num1 = 23
let num2 =  54

if (num1>num2){
    console.log("num1 is greater than num2")
}
else{
    console.log("num2 is greater than num1")
}

// write a programe to find the maximum between three numbers

let a = 56
let b = 34
let c = 21

if (a>b){
    console.log("a  is greater than b snd c ")
}
else if (b>a){
    console.log("b is greater than a and c")
}
else{
    console.log ("c is greater than a and b")
}

// write the programe to check the number is positive negetive or zero 

let num3 = prompt("Ënter a number")
if (num3 > 0 ){
    console.log("num3 is positive ")
}
else if (num3 < 0 ){
    console.log("num3 is negetive")
}
else{
    console.log("num3 is zero")
}

// write a programe to check the given year is a leap year or not 

var year = prompt("Enter a Year ")

if ((year % 4 == 0 || year %100 != 0) && (year %400 ==0)){
    console.log("your given number is a leap year")
}

// write a program to check that the given number is divisible by 5 or 11 or not 

var  n = prompt("Enter a number ")

if (n % 5 == 0  && n % 11 == 0 ){
    console.log ("your give number is divisible by 5 or 11 ")
}
else{
    console.log("the number is not divisible by 5 or 11")
}

// write a program to check that the number is even or odd 

let no = prompt("Ënter a number")
if (n%2 == 0){
    console.log("your given number is even")
}
else{
    console.log("your given number is odd")
}

// write a programe to check that number is vovel or consonent 

let alp = prompt("Enter a Alphabet")
if (a == {a,e,i,o,u}){
    console.log ("your given number is vovel")
}
else{
    console.log("your given number is consonent")
}


// write a progam to check that your given number is uppercase or lowercase

let up = prompt("Enter a character")
if (up == up.toUpperCase()){
    return "your given number is uppercase"
}
else if (up == up.toLowerCase()){
    return"your given number id lowercase"
}

// write a program to check the week number and week day 

let day = prompt("Enter a week number")

if (day == 1){
    console.log("Monday")
}

else if (day == 2){
    console.log("Tuesday")
}

else if (day == 3){
    console.log("Wednesday")
}

else if (day == 4){
    console.log("Thursday")
}

else if (day == 5){
    console.log("Friday")
}

else if (day == 6){
    console.log("Saturday")
}

else{
    console.log("Sunday")
}

if (day >7 ){
    console.log("invalid input days can not exceed than 7")
}

// write a program that input month number and calculate days in month 

var month = int(prompt("Enter a month number"))

    switch(month){case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return 31;
    case 4: case 6: case 9: case 11:
        return 30;
    case 2:
        return 28; // Assuming non-leap year by default
    default:
        return -1; // Invalid month
}

// write a program to calculate the minimum number of notes in the given amount 

function calculateMinimumNotes(amount) {
    // Array representing different types of currency notes
    const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    
    let remainingAmount = amount;
    let noteCounts = {};

    // Loop through each note denomination
    for (let i = 0; i < notes.length; i++) {
        const noteValue = notes[i];
        
        // Calculate number of notes of current denomination
        const noteCount = Math.floor(remainingAmount / noteValue);
        
        // Update the remaining amount
        remainingAmount -= noteCount * noteValue;

        // Store the note count in the result object
        noteCounts[noteValue] = noteCount;
    }

    return noteCounts;
}

// Example usage
const amount = 2563;
const result = calculateMinimumNotes(amount);
console.log("Minimum number of notes for", amount, ":", result);

// write a program that calculates the percentage and tell that the grade 

let sub1 = prompt("inter your subject")
let sub2 = prompt("inter your subject")
let sub3 = prompt("inter your subject")
let sub4 = prompt("inter your subject")
let sub5 = prompt("inter your subject")

result = sub1 + sub2 + sub3 + sub4 +sub5;
percentage = (result/5) * 100
if (percentage >= 90){
    console.log("your Grade is A+")
}
else if (percentage >=80){
    console.log("your grade is B")
}
else if (percentage >=70){
    console.log("your grade is C")
}
else if (percentage >=60){
    console.log("your grade is D")
}
else if (percentage >=40){
    console.log("your grade is E")
}
else{
    if (percentage< 40){
        console.log("your Grade is F")
    }
}

// write a program to input the basic salery and calculate the gross salery 

let salery = prompt("Enter your salery")
let salery2 = prompt("Enter your salery")
let salery3 = prompt("Enter your salery")

result = ((salery / 100) *20) + ((salery /100*80))
console.log("your gross slaery is", (salery + result))

result2 = ((salery2 / 100) *25) + ((salery2 /100*90))
console.log("your gross slaery is", (salery2 + result2))

result3 = ((salery3 / 100) *30) + ((salery3 /100*95))
console.log("your gross slaery is", (salery3 + result3))

// write a program that calculates the electricity bill 

let bill = int(prompt("Enter your units"))

if (bill = 50){
    let amount = bill*0.50;
    console.log("your bill is:", amount)
}

else if (bill = 100){
    let amount2 = bill * 0.75;
    console.log("your bill is",amount2)
}

else if (bill = 200){
    let amount3 = bill * 1.20;
    console.log("your bill is",amount3)
}
else if (bill = 250){
    let amount4 = bill * 1.50;
    console.log("your bill is", amount4)
}
else{
    let (bill > 250);
    console.log("invalid number of units i can calculate the bill till 250 units")
}



