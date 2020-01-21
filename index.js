const body = document.querySelector("body").style.fontFamily = "Arial";

const h1 = document.querySelector("h1").style.textAlign = "center";

const category = document.querySelectorAll(".category").forEach(
    function (category) {
        category.style.fontFamily = "Cambria";
        category.style.color = "red";
    }
)

const colorInterval = setInterval(function () {
    const colorGenerator = (() => {
        //Traversing list of .foot-category
        document.querySelectorAll(".food-category").forEach(
            function (foodCategory) {
                //create random opacity-number
                const randomOpacity = Math.random().toFixed(3);
                const rgba = [];

                for (i = 0; i < 3; i++) {
                    const randomRGB = Math.ceil(Math.random() * 255)
                    rgba.push(randomRGB)
                }

                rgba.push(randomOpacity);
                //convert rgba[] to a string to make it usable for css-style syntax
                foodCategory.style.backgroundColor = `rgba( ${rgba.toString()})`;
            }
        );
    })();
}, 5000);

const foodCategory = document.querySelectorAll(".food-category").forEach(function (el) {
    el.style.width = 20 + "%"
});
const main = document.querySelector(".main");
main.style.display = "flex";
main.style.justifyContent = "space-evenly";
main.style.flexFlow = "wrap";

const warning = document.getElementById("warning");
warning.style.fontFamily = "Gothic";
warning.style.fontSize = 2 + "rem";

const evenBGColor = (() => {
    const allergyInfo = document.querySelectorAll(".allergy-info");
    for (i = 0; i < allergyInfo.length; i++) {
        if ((i % 2) !== 0) {
            allergyInfo[i].style.backgroundColor = "rgb(200,150,150)"
        }
    }
})();


allergyInfo.style.backgroundColor 