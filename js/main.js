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
    "url('https://i.pinimg.com/1200x/b1/53/4a/b1534a034562f8a6a441bf4c3b8d9f8f.jpg')",
    "url('https://i.pinimg.com/736x/69/ab/ed/69abed2a605add63f337770b662ae00b.jpg')"
  ];

  const cores = ['#FFFFFF', '#000000', '#FFFFFF', '#000000', '#FFFFFF'];

  let index = 0;

  const imagemElemento = document.querySelector(".pipe");
  const scoreElement = document.querySelector('.score');

  // Define o estado inicial
  document.body.style.backgroundImage = fundos[index];
  scoreElement.style.color = cores[index];

  const backgroundInterval = setInterval(() => {
    index = (index + 1) % imagens.length;
    imagemElemento.src = imagens[index];
    document.body.style.backgroundImage = fundos[index];
    scoreElement.style.color = cores[index];
  }, 10000);

const jogador = document.querySelector('.jogador');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem');

let score = 0;
const winScore = 50;

const jump = () => {
    jogador.classList.add('jump');

    setTimeout(()=> {
        jogador.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() =>  {

    const pipePosition = pipe.offsetLeft;
    const jogadorPosition = +window.getComputedStyle(jogador).bottom.replace('px', '');

    score++;
    scoreElement.textContent = `Pontuação: ${score}`;
    
    if (pipePosition <= 120 && jogadorPosition < 90 && pipePosition > 0 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

       jogador.style.animation = 'none';
        jogador.style.bottom = `${jogadorPosition}px`;

        jogador.src = './images/game-over.png';
        jogador.style.width = '75px'
        jogador.style.marginLeft = '50px';  
        clearInterval(loop);
        clearInterval(backgroundInterval);

        
    }

    if(score >= winScore) {
        pipe.style.display = 'none';
        nuvem.style.display = 'none';
        clearInterval(backgroundInterval);

        jogador.style.animation = 'none';
        jogador.style.bottom = `${jogadorPosition}px`;

        jogador.src = './images/imagemVence.gif'; //victory animation
        jogador.style.width = '250px';

        clearInterval(loop);
    }
}, 100);

document.addEventListener('keydown', jump)