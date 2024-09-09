// TASK 01
console.log("-------------- TASK 01 --------------");

console.log("My name is Amin");

// TASK 02
console.log("-------------- TASK 02 --------------");

const userName = "Amin";
console.log(userName);

// TASK 03
console.log("-------------- TASK 03 --------------");

console.log("person, $add");

// TASK 04
console.log("-------------- TASK 04 --------------");

let bookPrice = 750;
let bookAmount = 14;
console.log(`Depodakı kitabların ümumi dəyəri: ${bookAmount * bookPrice}`);



// TASK 05
console.log("-------------- TASK 05 --------------");

let kmh = 75;
let msSpeed = kmh * 1000 / 60;
console.log(msSpeed);

// TASK 06
console.log("-------------- TASK 06 --------------");

let userBirth = prompt("Doğum tarixiniz: (misal: 2001-09-11)");
const today = Date.now();
const birth = new Date(userBirth);
const gap = today - birth;
const dayGap = Math.floor(gap / 86400000);
console.log(`Bu fani dünyada ${dayGap} gün yaşayıbsan, ey fani!`);

// TASK 07
console.log("-------------- TASK 07 --------------");

let num = prompt("İkirəqəmli ədəd daxil edin: ")
const power = num**5
const relict = num%3
console.log(`${num} ^ 5 = ${power}\n${num} 3-ə bölünmədən alınan qalıq: ${relict}`);


// TASK 08
console.log("-------------- TASK 08 --------------");
let firstName = "Amin";
let lastName = "Əliyev";
console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam.`);

// TASK 09
console.log("-------------- TASK 09 --------------");
console.log(`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}`);

// TASK 10'
console.log("-------------- TASK 10 --------------");

let fullName = "Murad Orucov"
console.log(fullName.length - 1);

// TASK 11
console.log("-------------- TASK 11 --------------");

// let firstName = "Amin";
// let lastName = "Əliyev";
fullName = firstName + " " + lastName;
let firstIndexName = fullName.charAt(0);
let firstIndexLastName = fullName.charAt(5);
console.log(firstIndexName + " " +firstIndexLastName);
 
// TASK 12
console.log("-------------- TASK 12 --------------");

fullName = prompt("Tam adınızı daxil edin: (AD SOYAD)");
let spaceIndex = fullName.indexOf(" ");
firstName = fullName.slice(0, spaceIndex);
lastName = fullName.slice(spaceIndex);
console.log(lastName + " " + firstName);

// TASK 13
console.log("-------------- TASK 13 --------------");
firstName = prompt("Adınızı daxil edin");
console.log(`Salam, ${firstName}`);

// TASK 14
console.log("-------------- TASK 14 --------------");


let firstPrompt = prompt("Birinci rəqəmi daxil edin");
let secondPrompt = prompt("İkinci rəqəmi daxil edin");

let firstNumber = Number(firstPrompt);
let secondNumber = Number(secondPrompt);

let sum = firstNumber + secondNumber;
let subs = firstNumber - secondNumber;
let sec = firstNumber * secondNumber;
let mult = firstNumber / secondNumber;

console.log(`Toplama: ${sum}\nÇıxma: ${subs}\nVurma: ${sec}\nBölmə: ${mult}`);

// TASK 15
console.log("-------------- TASK 15 --------------");

firstNumber = 12345
secondNumber = 98765
num = firstNumber + secondNumber;
lastIndexNum = num.toString().charAt(5);
console.log(lastIndexNum);




