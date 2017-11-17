/*
Kelvin to Fahrenheit project
*/
const kelvin = prompt('What is the Kelvin temperature today?'); // prompt user for input
const celsius = kelvin - 273; // celsius formula
let Fahrenheit = celsius * (9/5) + 32; // fahrenheit formula

Fahrenheit = Math.floor(Fahrenheit); // rounding value

console.log(`The temperature is ${Fahrenheit} degrees fahrenheit.`); // print the out value to console
