var regex = /ell/g;
var str1 = "Welcome to our Youtube channel.Say Hello if you Here hello";
/*
var output = regex.exec(str1);

console.log(output); */

//test()
/* var output = regex.test(str1);
console.log(output);
 */

//match()

/* var output = str1.match(regex);
console.log(output); */

//replace()

var output = str1.replace(regex, 'Hi');
console.log(output);

