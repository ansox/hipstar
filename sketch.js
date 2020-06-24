let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemTroll;
let imagemVoador;
let gameOver;

let cenario;
let cenario2;
let cenario3;
let cenario4;
let cenario5;
let personagem;
let somDoJogo;
let pontuacao;

let somPulo;
let forest01;
let forest02;
let forest03;
let forest04;
let forest05;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810]
];

const matrizTroll = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = [];

function preload() {
  imagemCenario = loadImage('./imgs/floresta.png');
  imagemPersonagem = loadImage('./imgs/correndo.png');
  imagemInimigo = loadImage('./imgs/inimigos/gotinha.png');
  imagemTroll = loadImage('./imgs/inimigos/troll.png');
  imagemVoador = loadImage('./imgs/inimigos/gotinha-voadora.png');
  gameOver = loadImage('./imgs/assets/game-over.png');
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
  somPulo = loadSound('./sons/somPulo.mp3');
  forest01 = loadImage('./imgs/Forest/Forest Layer 01.png');
  forest02 = loadImage('./imgs/Forest/Forest Layer 02.png');
  forest03 = loadImage('./imgs/Forest/Forest Layer 03.png');
  forest04 = loadImage('./imgs/Forest/Forest Layer 04.png');
  forest05 = loadImage('./imgs/Forest/Forest Layer 05.png');
}

function keyPressed() {
  if (key === ' ') {
    personagem.pula();
    somPulo.play();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(forest01, 1);
  cenario2 = new Cenario(forest02, 2);
  cenario3 = new Cenario(forest03, 3);
  cenario4 = new Cenario(forest04, 4);
  cenario5 = new Cenario(forest05, 7);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, 37, 110, 135, 220, 270, 2);
  pontuacao = new Pontuacao();

  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 37, 52, 52, 104, 104, 1, 200);
  const inimigoTroll = new Inimigo(matrizTroll, imagemTroll, width - 52, 5, 200, 200, 400, 400, 2, 2500);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemVoador, width - 52, 200, 100, 75, 200, 150, 3, 1500);

  inimigos.push(inimigo);
  inimigos.push(inimigoTroll);
  inimigos.push(inimigoVoador);
  // somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  cenario2.exibe();
  cenario2.move();

  cenario3.exibe();
  cenario3.move();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      noLoop();
      image(gameOver, width / 2 - 200, height / 2);
    }
  })

  personagem.exibe();
  personagem.aplicaGravidade();

  cenario4.exibe();
  cenario4.move();

  cenario5.exibe();
  cenario5.move();

  pontuacao.adicionarPontos();
  pontuacao.exibe();
}