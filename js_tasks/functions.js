// TASK 01
var user1 = "Amin";
var user2 = "Amil";
var user3 = "Ramin";

function sayHello(name) {
    return `${name} is active now!`;
}

console.log(sayHello(user1));
console.log(sayHello(user2));
console.log(sayHello(user3));


// TASK 02
var num1 = 45;
var num2 = 450;
var num3 = 1;

function getBigNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `En boyuk eded ${num1} dir`;
    } else if (num2 > num1 && num2 > num3) {
        return `En boyuk eded ${num2} dir`;
    } else if (num3 > num2 && num3 > num1) {
        return `En boyuk eded ${num3} dur`;
    }
}

console.log(getBigNum(num1, num2, num3));

// TASK 03

var dollar = 20;
var rubl = 1200;

function getRubl() {
    rubl += dollar * 75;
    return `Bütün depozitlər üzrə məbləğ: ${rubl} rubl.`
}

console.log(getRubl());



// TASK 04
function sayFirstDigit(firstDigit) {
    switch (firstDigit) {
        case "1":
            return "On";
        case "2":
            return "İyirmi";
        case "3":
            return "Otuz";
        case "4":
            return "Qırx";
        case "5":
            return "Əlli";
        case "6":
            return "Altmış";
        case "7":
            return "Yetmiş";
        case "8":
            return "Həşdat";
        case "9":
            return "Doxsan";
        default:
            return "";
    }
}

function saySecondDigit(secondDigit) {
    switch (secondDigit) {
        case "1":
            return "Bir";
        case "2":
            return "İki";
        case "3":
            return "Üç";
        case "4":
            return "Dört";
        case "5":
            return "Beş";
        case "6":
            return "Altı";
        case "7":
            return "Yeddi";
        case "8":
            return "Səkkiz";
        case "9":
            return "Doqquz";
        default:
            return "";
    }
}

function sayNum(num) {
    if (num.length === 1) {
        return saySecondDigit(num);
    } else if (num.length === 2) {
        return sayFirstDigit(num[0]) + " " + saySecondDigit(num[1]);
    } else {
        return "1-99 arasi reqem daxil etmelisen"
    }
}


console.log(sayNum("49"));

// TASK 05

function min(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else if (num1 < num2) {
        return num1;
    }
}

console.log(min(50, 49));

// TASK 06

function calc(a, b, c) {
    switch (c) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "*":
            return a * b;
    }
}

console.log(calc(5, 3, "+"));

// TASK 07

function isLucky(num) {

    var firstSum = +num[0] + +num[1] + +num[2];
    var secondSum = +num[3] + +num[4] + +num[5];

    if (firstSum === secondSum) {
        return true;
    } else if (firstSum !== secondSum) {
        return false;
    }
}

console.log(isLucky("123231"));
console.log(isLucky("456654"));

//  TASK 08
function capitalizeWords(txt) {
    var txtList = txt.split(" ");
    for (i = 0; i < txtList.length; i++) {
        txtList[i] = txtList[i][0].toUpperCase() + txtList[i].slice(1);
    }
    return txtList.join(" ");
}

console.log(capitalizeWords("Böyüyə hörmət elə, sən də böyüyəcəksən."));

// TASK 09
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else if (num % 2 !== 0) {
        return false;
    }
}

console.log(isEven(6));

// TASK 10
function isValidNumber(num) {
    if (num[0] === "+" && num[1] === "7" && num.length == 12) {
        return true;
    }else{
        return false;
    }
}

console.log(isValidNumber("+71234567890"));

// TASK 11

// Regex e hele baxmamisam








/*


Task-11
Mətni parametr kimi qəbul edən və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın.
"15263538479359486()-="';:!@#$%^&*()"
REGEX()
*/