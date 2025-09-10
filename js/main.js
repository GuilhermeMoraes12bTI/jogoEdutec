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

        jogador.src = './images/paradoArt-unscreen.gif'
        jogador.style.marginLeft = '50px';  
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump)