const jogador = document.querySelector('.jogador');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem');
const scoreElement = document.querySelector('.score');
const imagemElemento = document.querySelector(".pipe");
const gameBoard = document.querySelector('.game-board');
const startButton = document.querySelector('.botao-iniciar');
const restartButton = document.querySelector('.botao-reiniciar');


const imagens = [
    "images/planta1-removebg-preview.png",
    "images/cacto1-removebg-preview.png",
    "images/neve1-removebg-preview.png",
    "images/pedra1-removebg-preview.png"
];

const fundos = [
    "url('https://i.pinimg.com/1200x/03/7a/86/037a865c5bde34d89b53339fcc4fd7db.jpg')",
    "url('https://i.pinimg.com/736x/bd/20/17/bd2017763f932838f3f7764fde9fce18.jpg')",
    "url('https://i.pinimg.com/1200x/a4/73/25/a473254af647f8a75a4d61175d51fb4d.jpg')",
    "url('https://i.pinimg.com/1200x/b1/53/4a/b1534a034562f8a6a441bf4c3b8d9f8f.jpg')"
];

const cores = ['#FFFFFF', '#000000', '#000000', '#000000'];

const winScore = 1000;

const jump = () => {
    jogador.classList.add('jump');
    setTimeout(() => {
        jogador.classList.remove('jump')
    }, 500)
}

function startGame() {
    startButton.style.display = 'none';
    restartButton.style.display = 'none';
    gameBoard.style.display = 'block';

    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.display = 'block';
    pipe.style.left = '';
    jogador.src = './images/mario.gif';
    jogador.style.width = '150px';
    jogador.style.marginLeft = '0';
    jogador.style.animation = '';
    jogador.style.bottom = '0px';
    nuvem.style.display = 'block';

    let score = 0;
    let index = 0;

    document.body.style.backgroundImage = fundos[index];
    scoreElement.style.color = cores[index];
    imagemElemento.src = imagens[index];
    scoreElement.textContent = `Pontuação: 0`;

    const backgroundInterval = setInterval(() => {
        index = (index + 1) % imagens.length;
        imagemElemento.src = imagens[index];
        document.body.style.backgroundImage = fundos[index];
        scoreElement.style.color = cores[index];
    }, 10000);

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const jogadorPosition = +window.getComputedStyle(jogador).bottom.replace('px', '');

        score++;
        scoreElement.textContent = `Pontuação: ${score}`;

        if (pipePosition <= 120 && jogadorPosition < 90 && pipePosition > 0) {
            clearInterval(loop);
            clearInterval(backgroundInterval);

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            jogador.style.animation = 'none';
            jogador.style.bottom = `${jogadorPosition}px`;

            jogador.src = './images/game-over.png';
            jogador.style.width = '75px';
            jogador.style.marginLeft = '50px';

            restartButton.style.display = 'block';
        }

        if (score >= winScore) {
            clearInterval(loop);
            clearInterval(backgroundInterval);

            pipe.style.display = 'none';
            nuvem.style.display = 'none';

            jogador.style.animation = 'none';

            jogador.src = './images/imagemVence.gif';
            jogador.style.width = 'auto';
            jogador.style.height = '400px'; 
            jogador.style.bottom = '50px'; 
            jogador.style.left = '50%'; 
            jogador.style.transform = 'translateX(-50%)'; 
            jogador.style.marginLeft = '0';

            restartButton.style.display = 'block';
        }
    }, 100);

    document.addEventListener('keydown', jump);
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', () => {
    location.reload();
});
