/* let regex = /We.come/;
let str1 = 'Welcome to my github reposetory.';
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op); */


/* 
let regex = /W*e/;
let str1 = 'Wedsfsdfdsfdsflcome to my github reposetory.';
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op);
 */



/* let regex = /W*e/;
let str1 = 'Wedsfsdfdsfdsflcome to my github reposetory.';
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op);
 */
/* 
let regex = /back$/;
let str1 = 'Wedsfsdfdsfdsflcome to my github reposetory back.';
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op);
 */

/* 
let regex = /Welc?ome?/;
let str1 = 'Welbome to my github reposetory.';
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op);
 */

var regex = /[^def]def/
var str1 = "This string contains Krishndef";

var output = regex.test(str1);
console.log(output);

//BASIC FORM VALIDATION
var empid = document.getElementById('eid').value();
var check = /[DE]253[10-99]/

if ((check.test(empid))) {
    alert("Valid employee ID");


} else {
    alert("Invalid employee ID");
}
