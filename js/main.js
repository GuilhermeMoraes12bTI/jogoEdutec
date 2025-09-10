const imagens = [
    "images/planta1-removebg-preview.png",
    "images/cacto1-removebg-preview.png",
    "images/neve1-removebg-preview.png",
    "images/pedra1-removebg-preview.png"
  ];

  let index = 0;

  // Seleciona a imagem pela classe
  const imagemElemento = document.querySelector(".pipe");

  // Troca a imagem a cada 3 segundos
  setInterval(() => {
    index = (index + 1) % imagens.length; // Vai para a próxima imagem em loop
    imagemElemento.src = imagens[index];
  }, 10000); // 3000 milissegundos = 3 segundos










const jogador = document.querySelector('.jogador');
const pipe = document.querySelector('.pipe');


const jump = () => {
    jogador.classList.add('jump');

    setTimeout(()=> {
        jogador.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() =>  {

    const pipePosition = pipe.offsetLeft;
        const jogadorPosition = +window.getComputedStyle(jogador).bottom.replace('px', '');
        console.log(jogadorPosition)

    
    if (pipePosition <= 120 && jogadorPosition < 90 && pipePosition > 0 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

       jogador.style.animation = 'none';
        jogador.style.bottom = `${jogadorPosition}px`;

        jogador.src = './images/game-over.png';
        jogador.style.width = '75px'
        jogador.style.marginLeft = '50px';  
        clearInterval(loop);

        
    }
}, 10);

document.addEventListener('keydown', jump)