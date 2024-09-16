// TASK 01
var num = +prompt("Reqem daxil edin");

while(num <= 99 ) {
    num += 7;
    console.log(num);
}

// TASK 02
var cycleNum = 0;
var n = +prompt("N deyerini daxil edin");
while(cycleNum < n) { 
    cycleNum++;
    console.log(`I know how to use cycles ${cycleNum}`);
}

// TASK 03
var num = 100;
while (num < 1000) {
    console.log(num);
    num += 10;
}

// TASK 04
var num = 9;
var sum = 0;

while (num < 98) {
    num += 2;
    sum += num;
}
console.log(sum);

// TASK 05
var num = prompt("Reqem daxil edin")
var bolunen = 99;
var sum = 0;
while (bolunen < 1000 ) {
    bolunen++;
    if(num % bolunen == 0) { // yanliz while istifade ederek yaza bilmedim
        sum += bolunen
    }
}
console.log(sum);

// TASK 06

// TASK 07
var num = 0;
var hasil = 1;

while (num < 10) {
    num++;
    hasil *= num;
}

console.log(hasil);

// TASK 08

var text = prompt("Metn daxil edin");

var textList = text.split(" ");

var reverseText = textList.reverse();

console.log(reverseText.join(" "));

// TASK 09

var sentence = "Noqteni tapana hediyye."

var dotIndex = sentence.indexOf(".");

console.log(dotIndex);

// TASK 10

var text = prompt("Metn daxil et");
var textList = text.split("");
var isNum = false;


for (i = 0; i < textList.length; i++) {
    if (!isNaN(textList[i])) {
        isNum = true;       
    }
}

if(isNum) {
    console.log("Reqem daxil etmisen");
}else {
    console.log("Reqem daxil etmemisen");
    
}

