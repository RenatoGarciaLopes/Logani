document.addEventListener("DOMContentLoaded", function () {
    
    // --- FUNCIONALIDADE 1: GALERIA DE IMAGENS DA PÁGINA DE PRODUTO ---
    // Este código só vai funcionar na página que tiver os elementos .main-image e .thumbnails
    const mainImage = document.querySelector(".main-image");
    const thumbnails = document.querySelectorAll(".thumbnails img");

    // Verifica se os elementos da galeria existem na página atual antes de rodar o código
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener("click", function () {
                // Trocar a imagem principal pela imagem da miniatura clicada
                mainImage.src = this.src;
                mainImage.alt = this.alt;

                // Remove a classe 'selected' de todas as miniaturas
                thumbnails.forEach(t => t.classList.remove("selected"));

                // Adiciona a classe 'selected' apenas na miniatura clicada
                this.classList.add("selected");
            });
        });

        // Marca a primeira miniatura como selecionada ao carregar a página
        thumbnails[0].classList.add("selected");
    }


    const mobileMenuButton = document.getElementById('mobile-menu');
    const sideNav = document.querySelector('.nav-main');
    const overlay = document.getElementById('overlay');

    if (mobileMenuButton && sideNav && overlay) {
        // Função para abrir o menu
        const openMenu = () => {
            sideNav.classList.add('active');
            overlay.classList.add('active');
            mobileMenuButton.classList.add('active');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        };

        // Função para fechar o menu
        const closeMenu = () => {
            sideNav.classList.remove('active');
            overlay.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        };

        // Evento de clique no botão do menu
        mobileMenuButton.addEventListener('click', () => {
            // Se o menu já estiver ativo, fecha; senão, abre.
            if (sideNav.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Evento de clique no overlay para fechar o menu
        overlay.addEventListener('click', closeMenu);
    }


});