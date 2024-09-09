// Task-01
// Konsola mesaj verin: «My name is Murad».

// Task-02
// Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin. 
// Bu dəyişənin dəyərini konsolda göstərin.

// Task-03
// Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
// Birdən çox variant seçin.

// 2user
// c@rt
// person 
// title color
// console
// $add

// Task-04
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// =>let bookPrice = 750;
// =>let bookAmount = 14;

// Task-05
// Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
// kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə» 
// dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və 
// ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
// msSpeed dəyişəninin dəyərini konsola çıxarın.
// =>let kmhSpeed = 75;



// Task-07
// Ədədlər üzərində əməliyyatları yerinə yetirin.
// num dəyişənində iki rəqəmli ədəd saxlanılır. 
// Bele proqram yazın:
// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını.

// Task-08
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. 
// Tanışlığımıza çox şadam!”
// firstName dəyişənində istifadəçinin adı, 
// lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
// =>let firstName = 'Alan';
// =>let lastName = 'Turing';

// Task-09
// Şablon mətnlərdən istifadə edərək, 
// konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
// firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.

// Task-10
// Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
// Probel hərf olaraq sayılmır.
// let fullName = "Murad Orucov"

// Task-11
// İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
// İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın. 
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini 
// konsola çıxaran proqram yazın.

// Task-12
// İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. 
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// Task-13
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
// İstifadəçidən adını daxil etməsini istəyin.
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// Task-14
// İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.
// İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola 
// alt-alta 4 sətir olaraq çıxarın.

// Task-15
// 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın

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




