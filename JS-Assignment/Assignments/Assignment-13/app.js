// ------------------------DATE METHOD------------------------------------

//Q1
document.write('<br/>')
var date = new Date;
var date_today = date.toDateString();
var time = date.toLocaleString();
document.write(date_today + " " + time);
document.write('<br/>')
document.write('<br/>')

// Q2
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var m = new Date();
var m_name = month[m.getMonth()];
document.write('Current Month: ' + m_name);
document.write('<br/>')
document.write('<br/>')

// Q3
var day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var d = new Date();
var d_name = day[d.getDay()];
document.write('The day today is ' + d_name);
document.write('<br/>')
document.write('<br/>')

/ Q4
var d = new Date();
var d_name = d.getDay();
if(d_name == 7 || d_name == 6){
    document.write("It's a fun day.")
}
else{
    document.write("It's not a fun day.") 
}
document.write('<br/>')
document.write('<br/>')

// Q5
var d = new Date();
var d_name = d.getDate();
if(d_name < 15){
    document.write("First fifteen days of the month")
}
else{
    document.write("Last fifteen days of the month") 
}
document.write('<br/>');
document.write('<br/>');
