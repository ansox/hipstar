import Animacao from './animacao.js';

export default class Personagem extends Animacao {

  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima);

    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.gravidade = 4;
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -50;
    this.pulos = 0;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;
    noFill();
    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);

    const colisao = collideRectRect(
      this.x, this.y, this.largura * precisao, this.altura * precisao,
      inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao
    );

    return colisao;
  }

}