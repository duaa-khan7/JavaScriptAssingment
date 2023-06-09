//-----------------MATH EXPRESSIONS---------------

// Q1 + Q2
var num_1 = parseInt(prompt('Enter first number:'));
var num_2 = parseInt(prompt('Enter second number:'));

var sum = num_1 + num_2;
document.write('Sum of ' + num_1 + ' and ' + num_2 + ' is ' + sum);
document.write('<br/>');

var dif = num_1 - num_2;
document.write('Difference between ' + num_1 + ' and ' + num_2 + ' is ' + dif);
document.write('<br/>');

var mul_prod = num_1 * num_2;
document.write('Product of ' + num_1 + ' and ' + num_2 + ' is ' + mul_prod);
document.write('<br/>');

var divident = num_1 / num_2;
document.write('Divident of ' + num_1 + ' and ' + num_2 + ' is ' + divident);
document.write('<br/>');

// Q3 
var a;
document.write('Value after variable declaration is ' + a);
document.write('<br/>');

a = 5;
document.write('Initial Value:' + a);
document.write('<br/>');

a = a + 1;
document.write('Value after increment:' + a);
document.write('<br/>');

a = a + 7;
document.write(' Value after addition is:' + a);
document.write('<br/>');

a = a - 1;
document.write('Value after decrement:' + a);
document.write('<br/>');

a = a % 3;
document.write('The remainder is:'+ a);
document.write('<br/>');

// Q4
var ticket = 600;
ticket = ticket * 5;
document.write('Total cost to buy 5 tickets is ' + ticket + 'PKR');

// Q5
var num = prompt('Enter any number');
document.write('Table of 4');
document.write('<br/>');

for(var i = 0; i<=10; i++){
    var prod =num * i;
    document.write(num + '*' + i + '=' + prod);
    document.write('<br/>');

}
document.write('<br/>');

// Q6
var temp_c = prompt('Enter temperature in Celcius:');
var temp_f = prompt('Enter temperature in Fahrenheit:');

var con_c = (temp_c * 9 / 5)+32;
var con_f = (temp_f - 32) * 5 / 9;

document.write(temp_c + '°C is ' + con_c + '°F' );
document.write('<br/>');
document.write(temp_f + '°F is ' + con_f + '°C' );
document.write('<br/>');

// Q7
document.write('<h1/>Shopping Cart </h1>');
var item_1 = 650;
var item_2 = 100;
var ship_chrgs = 100;
var q_1 = prompt('Enter quantity if first item:');
var q_2 = prompt('Enter quantity of second item:');
var c_1 = item_1 * q_1;
var c_2 = item_2 * q_2;
var tcost = c_1 + c_2;
document.write('Price of first item is ' + item_1);
document.write('<br/>');
document.write('Price of second item is ' + item_2);
document.write('<br/>');
document.write('Quantity of first item is ' + q_1);
document.write('<br/>');
document.write('Quantity of second item is ' + q_1);
document.write('<br/>');
document.write('Shipping charges ' + ship_chrgs);
document.write('<br/>');
document.write('<br/>');
document.write('Total Cost ' + tcost);
document.write('<br/>');

// Q7
document.write('<h1/>Marksheet </h1>');
var tmarks = 980;
var omarks = prompt('Enter obtained marks:');
var percentage = (omarks/tmarks) * 100
document.write('Total Marks:' + tmarks);
document.write('<br/>');
document.write('Obtained Marks:' + omarks);
document.write('<br/>');
document.write('Percentage:' + percentage + '%');
document.write('<br/>');

// Q8
document.write('<h1/>Currency in PKR </h1>');
var dollar = 104.80;
var riyal = 28;
var pkr = (10 * 104.80) + (25 * 28);
document.write('Total Currency in PKR: ' + pkr);
document.write('<br/>');

// Q9
var num = prompt('Enter number:');
var num2 = ((num+5)*10)/2;
document.write(num2);

// Q10
document.write('<h1/>Age Calculator </h1>');
var c_year = 2023;
var b_year = prompt('Enter birth year:');
var age = c_year - b_year;
document.write('Current year: ' + c_year);
document.write('<br/>');
document.write('Birth year: ' + b_year);
document.write('<br/>');
document.write('Age: ' + age);
document.write('<br/>');

// Q11
document.write('<h1/>The Geometrizer </h1>');
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write('Radius:' + radius);
document.write('<br/>');
document.write('Circumference:' + circumference);
document.write('<br/>');
document.write('Area:' + area);
document.write('<br/>');

// Q12
document.write('<h1/>Lifetime Supply Calculator </h1>');
var snack = prompt('Enter your fav snack');
var currentAge= prompt('Enter your current age:');
var maxAge = prompt('Enter maximum age:');
var spd = prompt('Enter amount snacks per day');
var tAge = (maxAge - currentAge) * spd;
document.write('Fav snack:' + snack);
document.write('<br/>');
document.write('Current age:' + currentAge);
document.write('<br/>');
document.write('Estimated Age:' + maxAge);
document.write('<br/>');
document.write('Amount os snacks per day:' + spd);
document.write('<br/>');
document.write('You will need ' + tAge + ' '+ snack + ' to last you until the ripe age of ' + maxAge);
document.write('<br/>');