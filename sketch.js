let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let cenario2;
let cenario3;
let cenario4;
let cenario5;
let personagem;
let somDoJogo;
let inimigo;
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

function preload() {
  imagemCenario = loadImage('./imgs/floresta.png');
  imagemPersonagem = loadImage('./imgs/correndo.png');
  imagemInimigo = loadImage('./imgs/inimigos/gotinha.png');
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
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, 110, 135, 220, 270, 2);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104, 1);

  // frameRate(40);
  // somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  cenario2.exibe();
  cenario2.move();

  cenario3.exibe();
  cenario3.move();

  inimigo.exibe();
  inimigo.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  cenario4.exibe();
  cenario4.move();

  cenario5.exibe();
  cenario5.move();

  if (personagem.estaColidindo(inimigo)) {
    noLoop();
  }

}