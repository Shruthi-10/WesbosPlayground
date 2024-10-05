// 1. Favorite Book Program:
// Write a program that stores your favorite book's title, author, and year of publication in separate variables.
// Then, display a message like: 
// "My favorite book is [Title] by [Author], published in [Year]."



const favBook = function (title, author, year) {
    console.log(`My favorite book is ${title} by ${author}, published in ${year}.`);
};

favBook("Harry Potter", "Rowling", 1995);
favBook("nothing", "no-one", "never");

// 2. Basic Arithmetic Calculator:
// Create a simple calculator that takes two numbers as inputs (use variables), 
// performs addition, subtraction, multiplication, and division, 
// and displays the results for each operation

const calculator = function (a, b) {

    console.log(`Result: 
            Addition = ${a+b}
            Subtraction = ${a-b}
            Multiplication = ${a*b}
            Division = ${a/b}`
    );
};

calculator (4,2);