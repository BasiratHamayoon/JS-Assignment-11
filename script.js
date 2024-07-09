//Problem 01

// var mainArray = []
// for (var i = 0; i < 5; i++) {
//     var userInput = +prompt("Please enter elements to the Array");
//     mainArray.push(userInput);
//     console.log(mainArray[i]);
// }
// let smallerNum = mainArray[0];
// for (let i = 0; i < mainArray.length; i++) {
//     if (mainArray[i] < smallerNum) {
//         smallerNum = mainArray[i];
//     }
// }
// console.log(`The Smallest Number in this Array is: ${smallerNum}`)

//Problem no 02

// var celcius = prompt("Enter Temperature in Celcius?")
// var fahrenHeit = (celcius * 9 / 5) + 32;
// console.log(`${celcius}C is equal to ${fahrenHeit}F` )

//Problem no 03

//  var fahrenHeit = prompt("Enter Temperature in fahrenHeit?")
//  var celcius = (fahrenHeit - 32) * 9 / 5;
//  console.log(`${fahrenHeit}F is equal to ${celcius}C` )

//Problem no 04

// var mainArray = [];
// for (var i = 0; i < 5; i++) {
//     var userInput = prompt("Please enter Array elements?")
//     mainArray.push(userInput);
// }
// let reversed = [];
// for (var i = mainArray.length - 1; i >= 0; i--) {
//     reversed.push(mainArray[i])
// }
// console.log(`The Array before reversing elements are: ${mainArray}`)
// console.log(`The Array after reversing elements are: ${reversed}`)

//Problem no 05

var mainArray = [];
var sum = 0;
for (var i = 0; i < 5; i++){
    var userInput = +prompt("Please enter Elements to the Array")
    mainArray.push(userInput)
}
for (var i = 0; i < mainArray.length; i++) {
    sum += mainArray[i];
}
var average = sum / mainArray.length;
console.log(`The Average of the Array you Enter is: ${average}`)


