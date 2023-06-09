// -------------------Math Expressions-------------------
// Q1
document.write('<h1/>Result </h1>');
var a = 10;
document.write('The value of a is:' + a);
document.write('<br/>');
document.write('<br/>');
a = ++a;
document.write('The value of ++a is:' + a);
document.write('<br/>');
document.write('<br/>');
a = --a;
document.write('The value of --a is:' + a);
document.write('<br/>');
document.write('<br/>');
a = a--;
document.write('The value of a-- is:' + a);
document.write('<br/>');
document.write('<br/>');

// Q2
var a = 2;
var b = 1;
document.write('a is:' + a);
document.write('<br/>');
document.write('b is:' + b);
document.write('<br/>');
var result = --a - --b + ++b + b--;
document.write('Result is:' + result);
document.write('<br/>');
document.write('<br/>');

// Q3
var n = prompt('Enter name:');
document.write('Hello ' + n);
document.write('<br/>');
document.write('<br/>');

// Q5
var num = prompt('Enter any number');
document.write('Table of ' + num);
document.write('<br/>');

for(var i = 0; i<=10; i++){
    var prod =num * i;
    document.write(num + '*' + i + '=' + prod);
    document.write('<br/>');

}
document.write('<br/>');

// Q6 -------------check again---------