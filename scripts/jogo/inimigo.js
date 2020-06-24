import Animacao from './animacao.js';

export default class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite,
    alturaSprite, velocidadeMaxima, delay) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima);
    this.y = height - altura - variacaoY;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move() {
    this.x = this.x - 5;

    if (this.x < -this.largura - this.delay) {
      this.x = width;
    }
  }
}