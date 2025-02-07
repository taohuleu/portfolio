//NyanCat script
let visible = false;

function afficherImage() {
    let img = document.getElementById("logo");
    if (visible) {
        img.style.visibility = "hidden";
    } else {
        img.style.display = "block";
        img.style.visibility = "visible";
    }
    visible = !visible;
}