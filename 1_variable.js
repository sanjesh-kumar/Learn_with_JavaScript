/*
variables
let - 
 ,const ,var
*/
//let message; declaration
//message = "hey how are you.."; assignment
//declaration + assignment

let message = "hey how are you";
console.log(message);


// main property of variable

message = "hey i am fine";
console.log(message);

// creating const
const user ="codewithsanjesh";
console.log(user);
user ="programmingwithsanjesh";
//console.log(user);

//Scopping
if(5>4){
    console.log("inside block");
    let address ="mumbai";
    console.log(address);
    var city = "dehli";
    console.log(city);
}
console.log(city);
console.log(address); // out of Scopping

//var : globle of fuction scope
var myvar =43;

// naming rules for variable
/*
1:- Alphabet , but it can not start from digit
2:- name must contain only letters ,digit ,or symbols $ and _only
3:- keyword can not be used as variable name.
4:- case senstive.
*/
let ABC = 23;
console.log(ABC);