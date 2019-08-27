//change font of body

const body = document.querySelector("body");
body.style.fontFamily = "Arial";

//change styling of h2 elements
const menuCategories = document.querySelectorAll(".category");
for (let i = 0; i < menuCategories.length; i++) {
    menuCategories[i].style.color = "red";
    menuCategories[i].style.fontStyle = "italic"
}
console.log(menuCategories);

//change font size of warning at bottom of page
let warning = document.getElementById("warning");
warning.style.fontSize = "2rem";

//color generator
function colorGenerator() {
    let letters = '0123456789ABCDEF';
    let randomColor = "#";

    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

//assigning a random color to each list item
const listItems = document.querySelectorAll("li");
console.log(listItems);
let number = listItems.length
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = colorGenerator();
}

