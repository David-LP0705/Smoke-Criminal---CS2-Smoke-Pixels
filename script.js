
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function abrirImagem(src) {
    lightboxImg.src = src;          
    lightbox.classList.add('active'); 
}

function fecharImagem() {
    lightbox.classList.remove('active');
}

lightbox.addEventListener('click', function (evento) {
    if (evento.target === lightbox) {
        fecharImagem();
    }
});

document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') {
        fecharImagem();
    }
});


/* ---------- Filtro por tipo de arremesso (SCRUM-2) ---------- */
/* Lê a etiqueta (.throw-tag) de cada card, cria os botões de filtro
   automaticamente e mostra/esconde os cards conforme o botão clicado. */
function iniciarFiltro() {
    const grid = document.querySelector('.smoke-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.smoke-card'));
    cards.forEach(function (card) {
        const tag = card.querySelector('.throw-tag');
        card.dataset.tipo = tag ? tag.textContent.trim() : '';
    });

    const tipos = Array.from(new Set(cards.map(function (c) { return c.dataset.tipo; })))
        .filter(function (t) { return t !== ''; });

    // Só mostra o filtro se existir mais de um tipo de arremesso na página
    if (tipos.length < 2) return;

    const barra = document.createElement('div');
    barra.className = 'filter-bar';
    barra.setAttribute('role', 'group');
    barra.setAttribute('aria-label', 'Filtrar lineups por tipo de arremesso');

    const contador = document.createElement('span');
    contador.className = 'filter-count';

    function formatarRotulo(texto) {
        return texto.toLowerCase().replace(/(^|\s)\S/g, function (l) { return l.toUpperCase(); });
    }

    function criarBotao(rotulo, valor) {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'filter-btn';
        botao.textContent = rotulo;
        botao.dataset.filter = valor;
        botao.addEventListener('click', function () { aplicarFiltro(valor); });
        return botao;
    }

    function aplicarFiltro(valor) {
        let visiveis = 0;
        cards.forEach(function (card) {
            const mostrar = valor === 'todos' || card.dataset.tipo === valor;
            card.hidden = !mostrar;
            if (mostrar) visiveis++;
        });
        barra.querySelectorAll('.filter-btn').forEach(function (b) {
            const ativo = b.dataset.filter === valor;
            b.classList.toggle('active', ativo);
            b.setAttribute('aria-pressed', ativo ? 'true' : 'false');
        });
        contador.textContent = 'MOSTRANDO ' + visiveis + ' DE ' + cards.length;
    }

    barra.appendChild(criarBotao('Todos', 'todos'));
    tipos.forEach(function (tipo) {
        barra.appendChild(criarBotao(formatarRotulo(tipo), tipo));
    });
    barra.appendChild(contador);

    grid.parentNode.insertBefore(barra, grid);
    aplicarFiltro('todos');
}

iniciarFiltro();
