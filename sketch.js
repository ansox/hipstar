
import load from './scripts/load.js';
import Jogo from './scripts/cenas/jogo.js';
import TelaInicial from './scripts/cenas/telaInicial.js';
import BotaoGerenciador from './scripts/cenas/botao.js';

function preload() {
  load();
}

function keyPressed() {
  jogo.keyPressed(key)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);

  jogo = new Jogo();
  jogo.setup();

  cenaAtual = 'telaInicial'

  cenas = {
    jogo: jogo,
    telaInicial: new TelaInicial()
  }

  // somDoJogo.loop();
}

function draw() {
  cenas[cenaAtual].draw();
}

window.setup = setup;
window.draw = draw;
window.preload = preload;
window.keyPressed = keyPressed;