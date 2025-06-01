document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.querySelector(".main-image");
    const thumbnails = document.querySelectorAll(".thumbnails img");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", function () {
            // Trocar imagem principal
            mainImage.src = this.src;
            mainImage.alt = this.alt;

            // Remover classe 'selected' de todas
            thumbnails.forEach(t => t.classList.remove("selected"));

            // Adicionar classe 'selected' na clicada
            this.classList.add("selected");
        });
    });

    // Opcional: marcar a primeira como selecionada ao carregar
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add("selected");
    }
});
