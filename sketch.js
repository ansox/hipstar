let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

function preload() {
  imagemCenario = loadImage('./imgs/floresta.png');
  imagemPersonagem = loadImage('./imgs/correndo.png');
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 5);
  personagem = new Personagem(imagemPersonagem);
  // frameRate(40);
  // somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();

}