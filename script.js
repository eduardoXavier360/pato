

const pato = document.getElementById('pato');
const quack = document.getElementById('quack');

const frases = [
    'Perdeu!',
    'Quack quack, otário!',
    'Cê pensou que eu ia embora?',
    '😎 Mais rápido que sua net!',
    'Tô de volta, bebê!',
    'Não me toque, humano!',
    'QUACK!',
    'Errou!',
    'Você achou que eu ia ficar parado?',
    'Cuidado com o pato!',
    'O pato é mais rápido que você!',
    'Você não consegue me pegar!',
    'Pato troll na área!',
    'Eu sou o pato mais rápido do mundo!',
    'Cuidado, eu posso morder!',
    'filho da puta',
    'vagabunda',
    'quack quack',
];

// Função para mostrar uma frase
function mostrarFrase(x, y) {
    const frase = document.createElement('div');
    frase.classList.add('frase');
    frase.textContent = frases[Math.floor(Math.random() * frases.length)];

    frase.style.left = `${x}px`;
    frase.style.top = `${y}px`;

    document.body.appendChild(frase);

    setTimeout(() => {
        frase.remove();
    }, 3000);
}

// Função para mover o pato aleatoriamente
function moverPato() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    pato.style.left = `${x}px`;
    pato.style.top = `${y}px`;
    quack.play();
    mostrarFrase(x, y);
}

// Mover o pato a cada 3 segundos
setInterval(moverPato, 300);

// Clique no pato
pato.addEventListener('click', () => {
    alert('QUACK! Você clicou no pato troll!');
    moverPato();
});
