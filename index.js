const grab = document.querySelector

const body = document.querySelector("body").style.fontFamily = "Arial";

const h1 = document.querySelector("h1").style.textAlign = "center";

const category = document.querySelectorAll(".category").forEach(
    function (category) {
        category.style.fontFamily = "Cambria";
        category.style.color = "red";
    }
)

