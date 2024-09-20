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
var num = prompt("Herfe daxil etmek istediyiniz reqemi daxil edin(1-99)");
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

function sayNum() {
    if (num.length === 1) {
        return saySecondDigit(num);
    } else if (num.length === 2) {
        return sayFirstDigit(num[0]) + " " + saySecondDigit(num[1]);
    } else {
        return "1-99 arasi reqem daxil etmelisen"
    }
}


console.log(sayNum());

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

console.log(calc(5,3,"+"));













/*



Task-07
Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
olduğunu yoxlayan isLucky funksiyasını yazın.
Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
Məsələn, isLucky(234801);  // true qaytaracaq


((((((((((((((((((Task-08
capitalizeWords funksiyasını yazın.
Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir. 
Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq.))))))))))))))))))

Task-09
Bir ədədi parametr kimi qəbul edən və cüt olduqda true, 
tək olduqda isə false qaytaran isEven () funksiyasını yazın.

Task-10
Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. 
Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
+71234567890

Task-11
Mətni parametr kimi qəbul edən və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın.
"15263538479359486()-="';:!@#$%^&*()"
REGEX()
*/