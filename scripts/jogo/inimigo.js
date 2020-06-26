import Animacao from './animacao.js';

export default class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite,
    alturaSprite, velocidadeMaxima) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima);
    this.y = height - altura - variacaoY;
    this.x = width;
    this.velocidade = 0;
  }

  move() {
    this.x = this.x - this.velocidade;
  }

  aparece() {
    this.x = width;
  }
}