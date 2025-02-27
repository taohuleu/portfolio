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

//Scroll Cards
function scrollCards(direction) {
    const container = document.querySelector('.tt');
    const cardWidth = document.querySelector('.card').offsetWidth; // Largeur d'une carte
    const scrollAmount = cardWidth * 2; // Défilement de 2 cartes à la fois (ajustez si nécessaire)

    if (direction === -1) {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // Défilement vers la gauche
    } else if (direction === 1) {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Défilement vers la droite
    }
}