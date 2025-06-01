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

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('busca');
    const searchButton = document.getElementById('botaoBusca');
    const productCards = document.querySelectorAll('.product-card');
    const mensagemBusca = document.getElementById('mensagemBusca');

    searchButton.addEventListener('click', (e) => {
        e.preventDefault(); // evita envio do form se tiver dentro de um form

        const filtro = searchInput.value.toLowerCase().trim();
        let encontrouAlgum = false;

        productCards.forEach(card => {
            const nomeProduto = card.querySelector('p').textContent.toLowerCase();
            if (nomeProduto.includes(filtro)) {
                card.style.display = ''; // mostra o card
                encontrouAlgum = true;
            } else {
                card.style.display = 'none'; // esconde o card
            }
        });

        if (!encontrouAlgum && filtro !== '') {
            mensagemBusca.textContent = 'Nenhum resultado encontrado.';
        } else {
            mensagemBusca.textContent = '';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const campoBusca = document.getElementById('busca');
    const botaoLimpar = document.getElementById('botaoLimpar');

    // Mostrar ou ocultar o botão "X" conforme o conteúdo do input
    campoBusca.addEventListener('input', function () {
        if (this.value.trim() !== "") {
            botaoLimpar.style.display = 'block';
        } else {
            botaoLimpar.style.display = 'none';
        }
    });

    // Limpa o input ao clicar no botão "X"
    botaoLimpar.addEventListener('click', function () {
        campoBusca.value = '';
        botaoLimpar.style.display = 'none';
        campoBusca.focus(); // opcional: mantém o cursor no campo
    });
});
