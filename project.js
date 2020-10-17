var fn = prompt("Hello and Welcome. Please enter your First Name:");
var ln = prompt("Please enter your Last Name:");
var age = prompt("How old are you?");
var ht = prompt("How tall are you (in centimeters)?");
var pn = prompt("What is your pet name?");
alert("Thank you so much for the information. Please check the console ASAP.");

if ((fn[0]===ln[0]) && (age>20 && age<30) && (ht >= 170) && (pn[pn.length-1]==="y"))
    console.log("Welcome Comrade! You've passed the Spy Test.");
else
    console.log("Sorry, nothing to see here.");