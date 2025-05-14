const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clounds = document.querySelector('.clounds')
const audiodefundo = new Audio('../Audios/musicadefundo.mp3');
const pulosound = new Audio('../Audios/pulodomario.MP3');
const gameoversound = new Audio('../Audios/gameoverpow.mp3');
const coinSound = new Audio('./Audios/coinn.MP3');
const score = document.querySelector('.score--value');
const cogumelo = document.querySelector('.cogumelo');
const moeda = document.querySelector('.moeda');
const moedas = document.querySelector('.moedas-valor');

let jogoPausado = false;
let pontuacao = 0;
let jumpState = mario.src;
let marioState = mario.src;
let tempo = 0;
let gamePlay = document.querySelector('.playagain');

const pausar = setTimeout(10000)

    if (mario.src = './Images/supermariowalking.gif') {
    marioState = './Images/supermariowalking.gif';
    }
    if (marioState = './Images/supermariowalking.gif') {
    mario.src = './Images/supermariowalking.gif';
    jumpState = './Images/supermariowalking.gif';
    }
    if (mario.src = './Images/mariowalking.gif') {
    marioState = './Images/mariowalking.gif';
    }
    if (marioState = './Images/mariowalking.gif') {
    mario.src = './Images/mariowalking.gif';
    jumpState = './Images/mariojumping.png';
    }

audiodefundo.play();

/* pular = mariojumping.png e adiiciona a class jump pro mario e depois remove e volta pro estado atual do mario */
const jump = () => {
    mario.classList.add('jump');
    mario.src = jumpState;
    audiodefundo.play();
    pulosound.play();

    setTimeout(() => {
        mario.classList.remove('jump');
        mario.src = marioState;
    }, 500);
};
//   right: 1810px; - posicao da moeda
/*

O  __________   __________  _________   _____________ 
|   |           |        |  |       |   |
|   |           |        |  |       |   |
|   |           |        |  |       |   |  
|   _________   |________|  |_______|   |
|           |   |        |  |       |   |
|           |   |        |  |       |   |
|           |   |        |  |       |   |
|   ________|   |        |  |       |   |____________

*/

/* verificar se o mario bateu no cano ou nao */
 const loop = setInterval( looping = () => { 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(pontuacao);
    console.log(marioState);

 if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 100 ) {

        moeda.style.animation = 'none';
        cogumelo.style.animation = 'none';
        cogumelo.style.width = '0px';
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

         mario.style.animation = 'none';
         mario.style.bottom = `${marioPosition}px`;
       
         mario.src = './Images/game-over.png';
         mario.style.width = '75px';
         mario.style.marginLeft = '50px';

         moeda.style.width = '600px'
         moeda.style.bottom = '200px'
         moeda.style.right = '35%'
         moeda.src = './Images/vasco.png';

         gameoversound.play();
          audiodefundo.volume = 0;
     }  else { 
            incrementScore();
        } }, 10); 

// ver se o mario comeu o cogumelo ou não
const checkEat = setInterval( () => {
    const cogumeloPosition = cogumelo.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (cogumeloPosition <= 75 && cogumeloPosition > 0 && marioPosition < 90) {
        marioState = './Images/supermariowalking.gif';
        mario.src = './Images/supermariowalking.gif';
        jumpState = './Images/supermariowalking.gif';
     } 
})

const gCoin = setInterval(() => {
    const moedaPosition = moeda.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (moedaPosition <= 75 && moedaPosition > 0 && marioPosition < 80) {
        score.innerText = +score.innerText + 1;
        moedas.innerText = +moedas.innerText + 1;
        coinSound.play();
    }
}, 10)

const jogoRapido = setInterval(() => {
    if (pontuacao >= 1000) {
        pipe.style.animationDuration = '2.5s';
    }
    if (pontuacao >= 3000) {
        pipe.style.animationDuration = '2s'
    }
    if (pontuacao >= 5000) {
        pipe.style.animationDuration = '1.5s'
    }
    if (pontuacao >= 7000) {
        pipe.style.animationDuration = '1s'
    }
    if (pontuacao >= 10000) {
        pipe.style.animationDuration = '0.6s'
    }
}, 10)
    
/* criar um numero aleatorio (caso necessario) */
const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
};

/* adicionar score ao jogador = score.numero(textodoscore) + 10 */ 
const incrementScore = () => {     
    score.innerText = +score.innerText + 1;
    mario.classList.add('gPonto');
    pontuacao = +pontuacao + 1;

    console.log(incrementScore);
};

/* adicionar o evento de pular á uma key */
document.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowUp") {
      jump()
    }
});

/* Botão de Jogar Novamente */
gamePlay.addEventListener('click', function() {
 location.reload();
 mario.src = './Images/mariowalking.gif';
});