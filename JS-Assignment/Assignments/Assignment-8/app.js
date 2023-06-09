// ---------------------IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION----------------------------

// Q1 ----------------check again----------------

// Q2
var int1 = parseInt(prompt('Enter first number'));
var int2 = parseInt(prompt('Enter second number'));

if(int1>int2){
    document.write(int1 + ' is greater than ' + int2);
}
else{
    if (int2>int1) {
        document.write(int2 + ' is greater than ' + int1);
    } else {
        document.write(int1 + ' is equal to ' + int2);
    }
}

document.write('<br/>');
document.write('<br/>');

// Q3
var numsign = parseInt(prompt('Enter number:'));

if(numsign<0){
    document.write(numsign + ' is Negative');
}
else{
    if (numsign>0) {
        document.write(numsign + ' is Positive'); 
    } else {
        document.write(numsign + ' is equal to 0');
    }
}
document.write('<br/>');
document.write('<br/>');

// Q4
var vowel = prompt('Enter a letter:').substring(0,1);

if(vowel == 'a' || vowel == 'e' || vowel == 'o' || vowel == 'i' || vowel == 'u'){
    document.write(vowel + ' is a vowel');
}
else{
    document.write(vowel + ' is a consonant');
}
document.write('<br/>');
document.write('<br/>');

// Q5
var pswrd = prompt('Enter password');
if(pswrd == ""){
    alert('Please enter your password');
}
else{
    if (pswrd == "123ab") {
        alert('Correct! The password you entered matches the original password');
    } else {
        alert('Incorrect password');
    }
}
document.write('<br/>');
document.write('<br/>');

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = alert("Good day");
}
else {
    greeting = alert("Good evening");
}

// Q7
var t = prompt('Enter time in 24 hour format:');

if(t >= '0000' && t< '1200'){
    alert('Good Morning');
}
else{
    if (t >= '1200' && t< '1700') {
        alert('Good Afternoon');  
    } else {
        if (t >= '1700' && t< '2100') {
            alert('Good Evening');
        } else {
            if (t >= '2100' && t<= '2359') {
                alert('Good Night');
            } else {
                alert('Incorrect time');
            }
        }
    }
}
document.write('<br/>');
document.write('<br/>');