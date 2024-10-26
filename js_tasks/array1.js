// TASK 01

var children = ["Nebi", "Nihad", "Nemet"]
children.push("Murad")
children.shift()
console.log(children);

console.log("------------------------------------------------------------");


// TASK 02
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var [first, second, ...others] = nums
console.log(nums);
console.log(first);
console.log(second);


console.log(others);
console.log("------------------------------------------------------------");


// TASK 03
var nums = [0, 1, 2, 3, 14, 5, 6, 7, 8, 9]
var bigNum = Math.max(...nums)

console.log(bigNum);
console.log("------------------------------------------------------------");

// TASK 04
var nums = [0, 1, 2, 3, 14]
var increaseNum = nums.map(item => item * 2)
console.log(nums);
console.log(increaseNum);
console.log("------------------------------------------------------------");

// TASK 05
let employees = [
    ['Jaylee Macy', 'marketing'],
    ['John Smith', 'management'],
    ['Blossom Hartley', 'design'],
    ['Austin Carpenter', 'marketing'],
    ['Joan Knowles', 'development'],
    ['Sally Nunez', 'management'],
    ['Laurel Ward', 'development'],
    ['Lark Simon', 'marketing'],
    ['Jane Stone', 'management'],
    ['Courtney Olson', 'development'],
];

let development = employees.filter(item => item[1] === 'development')
console.log(development);
console.log("------------------------------------------------------------");

// TASK 06 ---
console.log("------------------------------------------------------------");

// TASK 07
var array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
var newArray = [];

function sortArray() {
    while (array.length > 0) {
        // Ən kiçik elementi tapmaq üçün ilkin olaraq birinci elementi seçirik
        var smallNum = array[0];
        var smallNumIndex = 0;

        // Ən kiçik elementi tapmaq üçün dövrə başlayırıq
        for (var i = 1; i < array.length; i++) {
            if (array[i] < smallNum) {
                smallNum = array[i];
                smallNumIndex = i;                
            }
        }

        // Ən kiçik elementi tapıb yeni massivə əlavə edirik və onu köhnə massivdən çıxarırıq
        newArray.push(smallNum);
        array.splice(smallNumIndex, 1); // Ən kiçik elementi silirik
    }
    return newArray;
}

console.log(sortArray());


// TASK 0
// TASK 0
// TASK 0
// TASK 0































