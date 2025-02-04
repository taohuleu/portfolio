<script>
    let visible = false;
    function afficherImage() {
        let img = document.getElementById("logo");
        if (visible) {
            img.style.visibility = "hidden";
        } else {
            img.style.display = "block"; // Affiche l'image
            img.style.visibility = "visible";
        }
        visible = !visible;
    }
</script>