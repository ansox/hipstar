class Inimigo extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima);
    this.y = height - altura - 37;
  }

  move() {
    this.x = this.x - 5;

    if (this.x < -this.largura) {
      this.x = width;
    }
  }
}