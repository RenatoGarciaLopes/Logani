document.addEventListener("DOMContentLoaded", function () {
    // --- GALERIA DE IMAGENS ---
    const mainImage = document.querySelector(".main-image");
    const thumbnails = document.querySelectorAll(".thumbnails img");

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener("click", function () {
                mainImage.src = this.src;
                mainImage.alt = this.alt;

                thumbnails.forEach(t => t.classList.remove("selected"));
                this.classList.add("selected");
            });
        });
        thumbnails[0].classList.add("selected");
    }

    // --- BUSCA DE PRODUTOS ---
    const botaoBusca = document.getElementById("botaoBusca");
    const botaoLimpar = document.getElementById("botaoLimpar");
    const campoBusca = document.getElementById("busca");
    const mensagemErro = document.getElementById("mensagemErro");

    if (botaoBusca && campoBusca) {
        botaoBusca.addEventListener("click", function () {
            const termo = campoBusca.value.toLowerCase();
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

            if (mensagemErro) {
                mensagemErro.style.display = encontrados === 0 ? "block" : "none";
            }
        });
    }

    if (botaoLimpar && campoBusca) {
        botaoLimpar.addEventListener("click", function () {
            campoBusca.value = "";
            if (mensagemErro) mensagemErro.style.display = "none";

            const produtos = document.querySelectorAll(".product-card");
            produtos.forEach(produto => {
                produto.style.display = "block";
            });
        });

        campoBusca.addEventListener('input', function () {
            botaoLimpar.style.display = this.value.trim() !== "" ? 'block' : 'none';
        });
    }

    // --- MENU MOBILE ---
    const mobileMenuButton = document.getElementById('mobile-menu');
    const sideNav = document.querySelector('.nav-main');
    const overlay = document.getElementById('overlay');

    if (mobileMenuButton && sideNav && overlay) {
        const openMenu = () => {
            sideNav.classList.add('active');
            overlay.classList.add('active');
            mobileMenuButton.classList.add('active');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        };

        const closeMenu = () => {
            sideNav.classList.remove('active');
            overlay.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        };

        mobileMenuButton.addEventListener('click', () => {
            sideNav.classList.contains('active') ? closeMenu() : openMenu();
        });

        overlay.addEventListener('click', closeMenu);
    }

    // --- FORMULÁRIO DE CONTATO PARA WHATSAPP ---
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const telefone = document.getElementById("subject").value;
            const mensagem = document.getElementById("message").value;

            const texto = `*Mensagem do site Logani*\n\n` +
                `*Nome:* ${nome}\n` +
                `*Email:* ${email}\n` +
                `*Telefone:* ${telefone}\n` +
                `*Mensagem:* ${mensagem}`;

            const numeroWhatsApp = "5544988296184";
            const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
            window.open(link, "_blank");
            form.reset();

        });

        window.onload = function(){
            form.reset();
        }
    }

});
