console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
var a=20;
var b = 4;
var add = a+b;
var minus = a-b;
var multiply = a*b;
var divide = a/b;
console.log(add);




// Exercise 2
/*
a) 1111
b) 11eleven
c) 12
d) Frodo11
e) true11
f) "FrodoBaggins"
*/

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName="Frodo";
let lastName="Baggins";
let a1 = num + str;
let b1 = num + str2;
let c1 = num+isPresent;
let d1 = firstName+num;
let e1 = isPresent+str;
let f1 =firstName+lastName;
console.log(f1);



// Exercise 3
/*
a) true
b) false
c) true
d) false
e) true
f) true
g) false
h) false
i) true
*/
let val = 5;
let str3="5";
let str4="five";
let isPresent2=false;
let a2= val == str3;
let b2= val===str3;
let c2=!isPresent2;
let d2=("eleven"==str4 && val>=str3);
let e2=(!isPresent2 || isPresent2)
let f2=0==false;
let g2=0===false;
let h2=0!=false;
let i2= 0!== false;
console.log(i2);

