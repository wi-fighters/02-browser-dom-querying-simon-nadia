const grab = document.querySelector

const body = document.querySelector("body").style.fontFamily = "Arial";

const h1 = document.querySelector("h1").style.textAlign = "center";

const category = document.querySelectorAll(".category").forEach(
    function (category) {
        category.style.fontFamily = "Cambria";
        category.style.color = "red";
    }
)

const colorGenerator = (() => {
    // loop 3x randomRGB
    // push to array
    //push opacity
    // color = ([randomRGBx3, randomOpacity])
    const randomOpacity = Math.random().toFixed(3);
    const rgba = [];
    for (i = 0; i < 3; i++) {
        const randomRGB = Math.ceil(Math.random() * 255)
        rgba.push(randomRGB)
    }
    rgba.push(randomOpacity);
    const foodCategory = document.querySelectorAll(".food-category").forEach(
        function (foodCategory) {
            foodCategory.style.backgroundColor = `rgba( ${rgba.toString()})`;
        }
    )
    console.log("rgba: " + rgba.toString())

})();
