// ----------------------ARRAYS---------------------

// Q1
var firstArr = [];
console.log(firstArr);

// Q2
var secArr = [{}];
console.log(secArr);

// Q3
var str_Arr = ['a','b','c'];
console.log(str_Arr);

// Q4
var num_Arr = [1,2,3];
console.log(num_Arr);

// Q5
var bol_Arr = [true,false,true,true];
console.log(bol_Arr);

// Q6
var mix_Arr = ['a',1,true];
console.log(mix_Arr);

// Q7
document.write('<h1/>Qualifications</h1>');

var q = ['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
for(i=0; i<q.length; i++){
    document.write(q[i] + '<br/>');
}
document.write('<br/>');
document.write('<br/>');

// Q8
var std_n = ['John','Michael','Tony'];
var std_sc = [320,230,480];

for (i = 0; i < std_n.length; i++) {
    var p = (std_sc[i]/500)*100;
    document.write('Score of '+std_n[i] + ' is ' + std_sc[i] + '. Percentage:' + p + '% <br/>');
}
document.write('<br/>');
document.write('<br/>');

// Q9
var col_Arr = ['Green','Blue','Purple','Yellow'];
for(i=0;i<col_Arr.length;i++){
    document.write(col_Arr[i] + '<br/>');
}
document.write('<br/>');

// add in the beginning
var b_col = prompt('Enter the color you want to add in the beginning:');
col_Arr.unshift(b_col);
for(i=0;i<col_Arr.length;i++){
    document.write(col_Arr[i] + '<br/>');
}
document.write('<br/>');

// add in the end
var e_col = prompt('Enter the color you want to add in the end:');
col_Arr.splice(col_Arr.length,0,e_col);
for(i=0;i<col_Arr.length;i++){
    document.write(col_Arr[i] + '<br/>');
}
document.write('<br/>');

// add two colors in beginning
col_Arr.splice(0,0,'Pink','Maroon');
for(i=0;i<col_Arr.length;i++){
    document.write(col_Arr[i] + '<br/>');
}
document.write('<br/>');

// remove first value
col_Arr.shift([0]);
for(i=0;i<col_Arr.length;i++){
    document.write(col_Arr[i] + '<br/>');
}
document.write('<br/>');

// add color on user index
var i_col = prompt('Enter the color you want to add:');
var userIndex = parseInt(prompt('Enter your choice of place:'));

col_Arr.splice(userIndex,0,i_col);
for(i=0;i<col_Arr.length;i++){
    document.write(col_Arr[i] + '<br/>');
}
document.write('<br/>');

// delete color on user index
var d_col = parseInt(prompt('How many colors do you want to delete:'));
var userIndex2 = parseInt(prompt('Enter your choice of place:'));

col_Arr.splice(userIndex2,d_col,'');
for(i=0;i<col_Arr.length;i++){
    document.write(col_Arr[i] + '<br/>');
}
document.write('<br/>');
document.write('<br/>');

// Q10
var sc_Arr = [320,230,480,120];
document.write('Scores of students:' + sc_Arr + '<br/>')
sc_Arr.sort();
document.write('Ordered score of students:' + sc_Arr);
document.write('<br/>');
document.write('<br/>');

// Q11
var cityList = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
document.write('Cities List: <br/>' + cityList);
cityList.slice(2,3);
document.write('<br/>Selected Cities List: <br/>' + cityList);
document.write('<br/>');
document.write('<br/>');

// Q12
var str_Arr2 = ['This', 'is', 'my', 'cat'];
document.write('Array: <br/>' + str_Arr2);
document.write('<br/>String:<br/>' + str_Arr2.join(' '));
document.write('<br/>');
document.write('<br/>');

// Q13 -----------check again-------------
var devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write('Devices:<br/>' + devices + '<br/>')
for(i = -1 ;i<devices.length;i++){
    devices.shift([i]);
    for(j = -1;j<devices.length;j++){
        document.write('Out:<br/>' + devices[j] + '<br/>');
    }
}
document.write('<br/>');
document.write('<br/>');

// Q14 -------------------check again--------------------

// Q15
var manufacturer = ['Apple', 'Samsung', 'Nokia', 'Sony', 'Haier']
for(i=0;i<col_Arr.length;i++){
        document.write(manufacturer[i] + '<br/>');
    }
document.write('<br/>');