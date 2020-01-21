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
}, 50);

