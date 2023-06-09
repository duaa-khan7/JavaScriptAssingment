// ------------------USER INPUT AND CONDITIONAL STATEMENT----------------------

// Q1
var city = prompt('Enter city:');

if (city == "Karachi") {
    document.write('Welcome to the city of lights');
} 
else {
    document.write('Welcome');
}
document.write('<br/>');
document.write('<br/>');

// Q2
var gender = prompt('Enter gender');

if (gender == "Male") {
    document.write('Good Morning Sir');
} 
else {
    document.write("Good Morning Ma'am");
}
document.write('<br/>');
document.write('<br/>');

// Q3
var light = prompt('Enter the color of road traffic signal:');

if (light == "Red") {
    document.write("MUST STOP");
}
else {
    if (light == "Yellow") {
        document.write("Ready to move");
    }
    else{
        light == "Green"
        document.write("MOVE NOW");
    }
} 
document.write('<br/>');
document.write('<br/>');

// Q4
var fuel = prompt('Enter fuel in your car:');
 
if (fuel <= 0.25) {
    document.write("Please refill the fuel in your car"); 
} else {
    document.write('Go');
}
document.write('<br/>');
document.write('<br/>');

// Q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} //alert

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} //no alert

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} //alert

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}  //no alert

if (true) {
    alert("True");
}
if (false) {
    alert("False");
} //alert

if ("car" < "cat") {
    alert("car is smaller than cat");
} //alert
document.write('<br/>');
document.write('<br/>');

// Q6 ---------check again---------
var eng = prompt('Marks obtained in English:');
var sci = prompt('Marks obtained in Science:');
var math = prompt('Marks obtained in Maths:');

var percentage = ((eng + sci + math)/300)*100;

if (percentage >= 80) {
    document.write('Grade: A One' + '<br/>' + 'Remarks: Excellent');
} 
if (percentage >= 70 && percentage < 80) {
    document.write('Grade: A' + '<br/>' + 'Remarks: Good');
} 
if (percentage >= 60 && percentage < 70) {
    document.write('Grade: B' + '<br/>' + 'Remarks: You need to improve');
}
if (percentage < 60) {
    document.write('Grade: F' + '<br/>' + 'Remarks: Sorry');
}
document.write('<br/>');
document.write('<br/>');

// Q7
document.write('<h1/>Guess Game</h1>');

var secret_num = 7;
var guess_num = prompt('Enter your guess:');

if (guess_num == secret_num) {
    document.write('Bingo! Correct answer');
}
if (guess_num == secret_num + 1) {
    document.write('Close enough to the Correct answer');
} 
document.write('<br/>');
document.write('<br/>');

// Q8
var div_3 = prompt('Enter number:');

if (div_3 % 3 == 0) {
    document.write('Number is divisible by 3');
}
if (div_3 % 3 != 0) {
    document.write('Number is not divisible by 3');
} 

// Q9
var eo = prompt('Enter number:');

if (eo % 2 == 0) {
    document.write('Number is even');
} 
if (eo % 2 != 0) {
    document.write('Number is odd');
}
document.write('<br/>');
document.write('<br/>');

// Q10
var temp = prompt('Enter temperature:');

if(temp >=40){
    document.write('It is too hot outside');
}
if (temp>=30 && temp<40) {
    document.write('The weather is normal'); 
}
if (temp>=20 && temp<30) {
    document.write('The weather is cool'); 
}
if (temp>=10 && temp<20) {
    document.write('OMG! The weather is cool'); 
}
document.write('<br/>');
document.write('<br/>');

// Q11
var num1 = parseInt(prompt('Enter number:'));
var num2 = parseInt(prompt('Enter number:'));
var opr = prompt('Enter operator:');
var res;

if (opr == "+") {
    res = num1+num2;
    document.write(num1 + "+" + num2 + '=' + res);
}
if (opr == "-") {
    res = num1-num2;
    document.write(num1 + "-" + num2 + '=' + res);
}
if (opr == "*") {
    res = num1*num2;
    document.write(num1 + "*" + num2 + '=' + res);
}
if (opr == "/") {
    res = num1/num2;
    document.write(num1 + "/" + num2 + '=' + res);
}
if (opr == "%") {
    res = num1%num2;
    document.write(num1 + "%" + num2 + '=' + res);
}