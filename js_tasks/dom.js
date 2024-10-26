// TASK 01
var firstLi = document.querySelector("ul li");
console.log(firstLi);
// TASK 02
var heading = document.querySelector("h1");
// heading.remove();
console.log(heading);
var lastLi = document.createElement("li");
lastLi.textContent = "TITAN RTX";

var list = document.querySelector("ul");
list.appendChild(lastLi);

// TASK 03
heading.textContent = "GeForce 20 Series";
var primaryLi = document.querySelectorAll(".primary");
primaryLi.forEach(item => item.style.color = "#ebebeb");
// TASK 04
primaryLi.forEach(item => {
    console.log(item);

});
// TASK 05
var ulList = document.querySelectorAll("li");
ulList.forEach(element => {
    element.classList.add("item");
});

ulList.forEach(element => {
    if (!element.classList.contains("primary")) {
        element.classList.add("secondary");
    }
});