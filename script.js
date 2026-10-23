
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
