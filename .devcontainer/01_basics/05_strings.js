const name = "Mridul"
const repocount = 50

//console.log(name + repocount + " Value")

//console.log(`Hello my name is ${name} and my repocount is ${repocount}.`) 

const nameGame = new String("Mridul-vm")

//console.log(nameGame[4]);
//console.log(nameGame.__proto__);

//console.log(nameGame.length);
//console.log(nameGame.toUpperCase());

//console.log(nameGame.charAt(2));
//console.log(nameGame.indexOf('d'));

const newString = nameGame.substring(0,4)
//console.log(newString)

const anotherString = nameGame.slice(-9,4)
//console.log(anotherString)

const newStringOne = "  Mridul  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://mridul.com/Mridul%20verma"

console.log(url.replace('%20', '$'))

console.log(url.includes('sundar'));

console.log(nameGame.split('-'))