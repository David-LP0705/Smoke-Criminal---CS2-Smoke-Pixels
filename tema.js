/* ---------- Alternância de tema claro/escuro (SCRUM-1) ---------- */
/* Este arquivo é carregado no <head> de todas as páginas.
   1) Aplica o tema salvo ANTES da página ser desenhada (evita "piscar").
   2) Cria o botão de troca dentro do menu de navegação. */
(function () {
    var CHAVE = 'smoke-criminal-tema';

    function lerTemaSalvo() {
        try {
            return localStorage.getItem(CHAVE) === 'light' ? 'light' : 'dark';
        } catch (e) {
            return 'dark';
        }
    }

    function salvarTema(tema) {
        try {
            localStorage.setItem(CHAVE, tema);
        } catch (e) { /* sem armazenamento: o tema vale só nesta visita */ }
    }

    function aplicarTema(tema) {
        document.documentElement.setAttribute('data-theme', tema);
    }

    // Tema padrão do site é o escuro; se o visitante escolheu o claro, ele é lembrado.
    aplicarTema(lerTemaSalvo());

    function criarBotao() {
        var lista = document.querySelector('.main-nav ul');
        if (!lista) return;

        var item = document.createElement('li');
        var botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'theme-toggle';

        function atualizarBotao() {
            var escuro = document.documentElement.getAttribute('data-theme') !== 'light';
            botao.textContent = escuro ? '\u2600 Tema claro' : '\u263E Tema escuro';
            botao.setAttribute('aria-label', escuro ? 'Mudar para o tema claro' : 'Mudar para o tema escuro');
        }

        botao.addEventListener('click', function () {
            var atual = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            var novo = atual === 'light' ? 'dark' : 'light';
            aplicarTema(novo);
            salvarTema(novo);
            atualizarBotao();
        });

        atualizarBotao();
        item.appendChild(botao);
        lista.appendChild(item);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', criarBotao);
    } else {
        criarBotao();
    }
})();
