# Smoke Criminal — Pixels de Smokes no TR do CS2

Guia pessoal de lineups de smoke para Counter-Strike 2 (lado Terrorista), organizado por mapa: **Dust II**, **Inferno** e **Mirage**. Cada lineup traz o pixel de referência, o tipo de arremesso, o propósito tático e o posicionamento.

## Links

- **Aplicação publicada (Render):** https://smoke-criminal.onrender.com
- **Registro da atividade no Jira:** https://davidlsilva0705.atlassian.net/jira/software/projects/SCRUM/boards/1
- **Repositório:** https://github.com/David-LP0705/Smoke-Criminal---CS2-Smoke-Pixels

## Melhoria implementada (SCRUM-1): alternância de tema claro/escuro

Todas as páginas agora têm um botão no menu superior que troca o site entre o **tema escuro** (padrão) e o **tema claro**.

Como funciona:

- O novo arquivo `tema.js` é carregado no `<head>` de todas as páginas. Ele aplica o tema salvo antes da página ser desenhada, evitando que a tela "pisque" no tema errado.
- O botão é criado automaticamente dentro do menu de navegação e alterna o atributo `data-theme` do elemento `<html>`.
- A escolha do visitante é salva no `localStorage` do navegador e lembrada nas próximas visitas e em todas as páginas.
- O `style.css` define as cores do tema claro sobrescrevendo as variáveis CSS (`--bg`, `--panel`, `--text` etc.), então todo o site muda de cor sem duplicar estilos.

Arquivos alterados: `tema.js` (novo), `style.css` e as cinco páginas HTML (inclusão do script).

## Melhoria adicional (SCRUM-2): filtro de lineups por tipo de arremesso

Nas páginas de mapa, botões permitem filtrar as smokes pelo tipo de arremesso (*Todos*, *Jump Throw*, *Padrão*, *Jump Throw + W*), com um contador de lineups visíveis (ex.: "MOSTRANDO 7 DE 8"). Os botões são criados pelo `script.js` a partir da etiqueta de cada card. Se a página tiver apenas um tipo (caso da Dust II), o filtro não aparece.

## Tecnologias

HTML5, CSS3 e JavaScript puro (sem frameworks e sem build). Site estático.

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/David-LP0705/Smoke-Criminal---CS2-Smoke-Pixels.git
   ```
2. Abra o arquivo `index.html` no navegador.

## Deploy

O site é publicado no **Render** como *Static Site*, conectado a este repositório do GitHub (branch `main`), sem comando de build e com o diretório de publicação na raiz do projeto (`./`). Após o merge na `main`, o deploy é disparado no painel do Render (*Manual Deploy > Deploy latest commit*), que publica a versão mais recente.

## Fluxo de versionamento

Tarefa no Jira (SCRUM-1 e SCRUM-2) → branch `feature/SCRUM-1-tema-claro-escuro` → commit → Pull Request #1 → merge na `main` → deploy no Render.

## Integrantes

- David Lucas
- Vinicius Moura
- Julio Cesar
- Rafael Silva
