// ---------------------------STRING METHOD------------------------------------

//Q1
var my_name = prompt('Enter your name:');
var l_name = prompt("Enter your last name:");
var fullName = my_name + ' ' + l_name;
alert('Hello ' + fullName );

// Q2
document.write('<br/>');
var mobModel = prompt('Enter your favorite mobile model:');
document.write('My favorite phone is ' + mobModel);
document.write('<br/>Length of string:' + mobModel.length);
document.write('<br/>');

// Q3
var pak = 'Pakistani';
document.write('String:' + pak);
document.write("<br/>Index of 'n':" + pak.indexOf('n'));
document.write('<br/>');
document.write('<br/>');

// Q4
var hw = 'Hello World';
document.write('String:' + hw);
document.write("<br/>Last index of 'l':" + hw.lastIndexOf('l'));
document.write('<br/>');
document.write('<br/>');

// Q5
var pak = 'Pakistani';
document.write('String:' + pak);
document.write("<br/>Character at 3rd index:" + pak.charAt(3));
document.write('<br/>');
document.write('<br/>');

// Q7
var cityName = 'Hyderabad';
document.write('City:' + cityName);
cityName = cityName.replace('Hyder','Islam');
document.write('<br/>After replacement:' + cityName);
document.write('<br/>');
document.write('<br/>');

// Q8
var sentence = 'Ali and Sami are bestfriends. They play cricket and football together.';
document.write(sentence + '<br/>');
sentence = sentence.replace(/and/g,'&');
document.write(sentence);
document.write('<br/>');
document.write('<br/>');

// Q9
var strNum = '472';
document.write('String: ' + strNum);
document.write('<br/>Type: ' + typeof(strNum));
strNum =  parseInt(strNum);
document.write('<br/>String: ' + strNum);
document.write('<br/>Type: ' + typeof(strNum));
document.write('<br/>');
document.write('<br/>');

// Q10
var userInput = prompt('Enter anything:');
document.write('User input: ' + userInput);
userInput = userInput.toUpperCase();
document.write('<br/>Upper Case: ' + userInput);
document.write('<br/>');
document.write('<br/>');

// Q11
var userName = prompt('Enter anything:');
document.write('User Input:' + userName);
var lcuserName = userName.toLowerCase();
lcuserName = lcuserName.slice(1,userName.length);
var firstLetter = userName[0].toUpperCase();
userName = firstLetter + lcuserName;
document.write('<br/>Title case:' + userName);
document.write('<br/>');
document.write('<br/>');

// Q12
var num3 = 35.36;
document.write('Number:' + num3);
document.write('<br/>');
num3 = num3.toString().replace('.','');
document.write('Result:' + num3);
document.write('<br/>');
document.write('<br/>');

// Q13
var user_name = prompt('Enter user name:');
var check_name = [];
var check_sc = [];
var message

for(i=0;i<user_name.length; i++){
    check_name[i] = user_name.split('');
    check_sc[i] = user_name.charCodeAt(i);

    if(check_sc[i] == 33|| check_sc[i] == 44 || check_sc[i] == 46 || check_sc[i] == 64 ){
        message = 'Username Invalid';
    }
    else{
        message = 'Username valid';
        }
       
    }
alert(message);
document.write("<br>");
document.write("<br>");


// Q14
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC bakery what do you want sir/ma'm ?");
userSearch = userSearch.toLowerCase();
for (var i = 0; i < bakeryItems.length; i++) {
    if (userSearch == bakeryItems[i]) {
        document.write(userSearch + " is available at index " + i + " in our bakery");
    }
}
document.write("<br>");
document.write("<br>");

// Q15
var userPassword = prompt('Enter password:');
var check_pswrd=  /^[A-Za-z]\w{7,14}$/;
if(userPassword == check_pswrd) {
    alert('Correct, try another...');
}
else {
    alert('Wrong...!');
}


    

