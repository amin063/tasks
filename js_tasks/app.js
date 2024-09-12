// // TASK 01
// console.log("-------------- TASK 01 --------------");

// console.log("My name is Amin");

// // TASK 02
// console.log("-------------- TASK 02 --------------");

// const userName = "Amin";
// console.log(userName);

// // TASK 03
// console.log("-------------- TASK 03 --------------");

// console.log("person, $add");

// // TASK 04
// console.log("-------------- TASK 04 --------------");

// let bookPrice = 750;
// let bookAmount = 14;
// console.log(`Depodakı kitabların ümumi dəyəri: ${bookAmount * bookPrice}`);



// // TASK 05
// console.log("-------------- TASK 05 --------------");

// let kmh = 75;
// let msSpeed = kmh * 1000 / 60;
// console.log(msSpeed);

// // TASK 06
// console.log("-------------- TASK 06 --------------");

// let userBirth = prompt("Doğum tarixiniz: (misal: 2001-09-11)");
// const today = Date.now();
// const birth = new Date(userBirth);
// const gap = today - birth;
// const dayGap = Math.floor(gap / 86400000);
// console.log(`Bu fani dünyada ${dayGap} gün yaşayıbsan, ey fani!`);

// // TASK 07
// console.log("-------------- TASK 07 --------------");

// let num = prompt("İkirəqəmli ədəd daxil edin: ")
// const power = num**5
// const relict = num%3
// console.log(`${num} ^ 5 = ${power}\n${num} 3-ə bölünmədən alınan qalıq: ${relict}`);


// // TASK 08
// console.log("-------------- TASK 08 --------------");
// var firstName = "Amin";
// var lastName = "Əliyev";
// console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam.`);

// // TASK 09
// console.log("-------------- TASK 09 --------------");
// console.log(`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}`);

// // TASK 10'
// console.log("-------------- TASK 10 --------------");

// let fullName = "Murad Orucov"
// console.log(fullName.length - 1);

// // TASK 11
// console.log("-------------- TASK 11 --------------");

// // let firstName = "Amin";
// // let lastName = "Əliyev";
// fullName = firstName + " " + lastName;
// let firstIndexName = fullName.charAt(0);
// let firstIndexLastName = fullName.charAt(5);
// console.log(firstIndexName + " " +firstIndexLastName);
 
// // TASK 12
// console.log("-------------- TASK 12 --------------");

// fullName = prompt("Tam adınızı daxil edin: (AD SOYAD)");
// let spaceIndex = fullName.indexOf(" ");
// firstName = fullName.slice(0, spaceIndex);
// lastName = fullName.slice(spaceIndex);
// console.log(lastName + " " + firstName);

// // TASK 13
// console.log("-------------- TASK 13 --------------");
// firstName = prompt("Adınızı daxil edin");
// console.log(`Salam, ${firstName}`);

// // TASK 14
// console.log("-------------- TASK 14 --------------");


// let firstPrompt = prompt("Birinci rəqəmi daxil edin");
// let secondPrompt = prompt("İkinci rəqəmi daxil edin");

// let firstNumber = Number(firstPrompt);
// let secondNumber = Number(secondPrompt);

// let sum = firstNumber + secondNumber;
// let subs = firstNumber - secondNumber;
// let sec = firstNumber * secondNumber;
// let mult = firstNumber / secondNumber;

// console.log(`Toplama: ${sum}\nÇıxma: ${subs}\nVurma: ${sec}\nBölmə: ${mult}`);

// // TASK 15
// console.log("-------------- TASK 15 --------------");

// firstNumber = 12345
// secondNumber = 98765
// num = firstNumber + secondNumber;
// lastIndexNum = num.toString().charAt(5);
// console.log(lastIndexNum);




// TASK 17
console.log("-------------- TASK 17 --------------");
var userNum = prompt("4 rəqəmli ədəd daxil edin");
var digitNum = +userNum[0] + +userNum[1] + +userNum[2] + +userNum[3];
console.log(digitNum);

// TASK 18
console.log("-------------- TASK 18 --------------");

var firstName = prompt("Adınızı daxil edin");
console.log(`Salam, ${firstName}`);

// TASK 19
console.log("-------------- TASK 19 --------------");

var userPrice = prompt("«530.90» formatında qiymət daxil edin");
var dotIndex = userPrice.indexOf(".") 
var manat = userPrice.slice(0, dotIndex);
var qep = userPrice.slice(dotIndex + 1);
console.log(`${manat} manat ${qep} qəpik`);
 
// TASK 20
console.log("-------------- TASK 20 --------------");

var userSalary = prompt("Əmək haqqınızı daxil edin");
var taxSalary = +userSalary * (100 - 13) / 100;
console.log(taxSalary);
 
// TASK 21
console.log("-------------- TASK 21 --------------");

var firstName = prompt("Zəhmət olmasa adınız daxil edin");
var lastName = prompt("Zəhmət olmasa soyadınız daxil edin");
var fatherName = prompt("Zəhmət olmasa ata adınız daxil edin");
console.log(`${firstName} ${lastName} ${fatherName}`);

// TASK 22
console.log("-------------- TASK 22 --------------");

var amount = prompt("Zəhmət olmasa əmanətin məbləğini daxil edin");
var time = prompt("Zəhmət olmasa əmanətin müddətini daxil edin");
var rate = prompt("Zəhmət olmasa əmanətin faiz dərəcəsini adınız daxil edin");

var profit = amount * time * rate;

console.log(Number(profit) / 100);

// TASK 23
console.log("-------------- TASK 23 --------------");
var value = 10;

console.log(value == 10);
console.log(value == 20);
console.log(value != 10);
console.log(value!=20);
console.log(value < 15);






