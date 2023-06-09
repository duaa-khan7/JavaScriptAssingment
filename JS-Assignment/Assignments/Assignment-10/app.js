// ---------------------------ARRAYS AND LOOP---------------------

//Q1
var multi_Arr = [[],[],[]];
console.log(multi_Arr);

//Q2
document.write('<br/>');
var multi_Arr2 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(i=0;i<multi_Arr2.length;i++){
    document.write(multi_Arr2[i].join(' ') + '<br/>');
    
}
document.write('<br/>');
document.write('<br/>');

// Q3
for(i=1;i<=10; i++){
    document.write(i + '<br/>')
}
document.write('<br/>');
document.write('<br/>');

// Q4
var num = prompt('Enter a number to show its multiplication table:');
var useLength = prompt('Enter the length of the multiplication table:')
document.write('Table of ' + num);
document.write('<br/>');
document.write('Length: ' + useLength);
document.write('<br/>');

for(var i = 0; i<=useLength; i++){
    var prod =num * i;
    document.write(num + 'x' + i + '=' + prod);
    document.write('<br/>');

}
document.write('<br/>');
document.write('<br/>');

// Q5
var fruits= ['apple', 'banana', 'mango', 'orange','strawberry'];
for(i=0;i<fruits.length; i++){
    document.write(fruits[i] + '<br/>')
}
document.write('<br/>')
for(j=0;j<fruits.length; j++){
    document.write('Element at index ' + [j] + ' is ' + fruits[j] + '<br/>')
}
document.write('<br/>');
document.write('<br/>');

// Q6
//Counting
var count = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write('<h3/>Counting</h3>'+ count);

// Even 
document.write('<h3/>Even</h3>');
for (i = 0 ; i < count.length; i++) {
    if(i % 2 == 0){
   document.write(count[i] + ',');
    }
}
 
 // Odd
document.write('<h3/>Odd</h3>');
for (i = 0 ; i < count.length; i++) {
    if(i % 2 != 0){
   document.write(count[i] + ',');
    }
 }

// Series
document.write('<h3/>Series</h3>');
for (i = 0 ; i < count.length; i++) {
    if(i % 2 != 0){
     document.write(count[i] + "k, ");
   }
}

// Reverse Counting
count.reverse();
document.write('<h3/>Reverse Counting</h3>'+ count);
document.write('<br/>');
document.write('<br/>');

// Q7 ------------check again-----------------
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC bakery what do you want sir/ma'm ?");
for (var i = 0; i < bakeryItems.length; i++) {
    if (userSearch == bakeryItems[i]) {
        document.write(userSearch + " is available at index " + i + " in our bakery");
    }
}
document.write('<br/>');
document.write('<br/>');

// Q8
var l_num = [24,53,78,91,12];
document.write('Array items: ' + l_num);
document.write( "<br/>The largest number is : " + Math.max(...l_num));
document.write("<br>");
document.write('<br/>');

// Q9
var s_num = [24,53,78,91,12];
document.write('Array items: ' + s_num);
document.write( "<br/>The smallest  number is : " + Math.min(...s_num));
document.write("<br>");
document.write('<br/>');

// Q10
for ( i= 1; i <=20; i++){
    document.write(i *5 + ",");
}
document.write('<br/>');