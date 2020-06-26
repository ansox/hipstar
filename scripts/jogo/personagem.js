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
    this.invencivel = false;
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

  ficaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }

    const precisao = .7;
    noFill();
    stroke('red')
    rect(inimigo.x + 15, inimigo.y + 15, inimigo.largura * precisao, inimigo.altura * precisao);

    const colisao = collideRectRect(
      this.x + 15, this.y + 15, this.largura * precisao, this.altura * precisao,
      inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao
    );

    return colisao;
  }

}