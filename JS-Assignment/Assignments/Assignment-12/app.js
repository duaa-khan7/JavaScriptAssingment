// ---------------------MATH METHODS-----------------------

// Q1
document.write('<br/>');
document.write('<br/>');
var UserInput = prompt('Enter a positive integer:');
document.write('Number:' + UserInput + '<br/>');
document.write('Round off value:' + Math.round(UserInput) + '<br/>');
document.write('Floor:' + Math.floor(UserInput) + '<br/>');
document.write('Ceil:' + Math.ceil(UserInput) + '<br/>');
document.write('<br/>');
document.write('<br/>');

// Q2
document.write('<br/>');
document.write('<br/>');
var UserInput = prompt('Enter a negative integer:');
document.write('Number:' + UserInput + '<br/>');
document.write('Round off value:' + Math.round(UserInput) + '<br/>');
document.write('Floor:' + Math.floor(UserInput) + '<br/>');
document.write('Ceil:' + Math.ceil(UserInput) + '<br/>');
document.write('<br/>');
document.write('<br/>');

// Q3
document.write('<br/>');
document.write('<br/>');
var UserInput = prompt('Enter a number:');
document.write('The absolute value of ' + UserInput + ' is ' + Math.abs(UserInput)+'<br/>');
document.write('<br/>');
document.write('<br/>');

// Q4
document.write('<br/>');
document.write('<br/>');
document.write('Random dice value:' + Math.floor(Math.random() * 10) + '<br/>');
document.write('<br/>');

// Q5
document.write('<br/>');
document.write('<br/>');
rand_val = Math.floor(Math.random() * 2)
if (rand_val == 1) {
    document.write('Random coin value: Heads<br/>');
} else {
    document.write('Random coin value: Tails<br/>');
}
document.write('<br/>');

//Q6
document.write('<br/>');
document.write('<br/>');
document.write('Random number between 1 and 100: ' + Math.floor(Math.random() * 101) + '<br/>');
document.write('<br/>');

// Q7
document.write('<br/>');
document.write('<br/>');
var userWeight = prompt('Enter your weight:');
document.write('The weight of the user is: ' + userWeight);
document.write('<br/>');
document.write('<br/>');

// Q8
var userSecret = Math.floor(Math.random() * 11);
var userGuess = prompt('Enter your guess between 1 to 10');
if (userGuess == userSecret) {
    alert('Right Guess');
} else {
    alert('Wrong guess');
}


