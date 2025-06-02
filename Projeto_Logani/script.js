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
});

document.getElementById("botaoBusca").addEventListener("click", function () {
    const termo = document.getElementById("busca").value.toLowerCase();
    const produtos = document.querySelectorAll(".product-card");
    let encontrados = 0;

    produtos.forEach(produto => {
        const textoProduto = produto.innerText.toLowerCase();
        if (textoProduto.includes(termo)) {
            produto.style.display = "block";
            encontrados++;
        } else {
            produto.style.display = "none";
        }
    });

    const mensagemErro = document.getElementById("mensagemErro");
    mensagemErro.style.display = encontrados === 0 ? "block" : "none";
});

// Também pode limpar a mensagem ao limpar o campo de busca
document.getElementById("botaoLimpar").addEventListener("click", function () {
    document.getElementById("busca").value = "";
    document.getElementById("mensagemErro").style.display = "none";

    const produtos = document.querySelectorAll(".product-card");
    produtos.forEach(produto => {
        produto.style.display = "block";
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

document.addEventListener("DOMContentLoaded", function () {
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
