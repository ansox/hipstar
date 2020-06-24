class Personagem extends Animacao {

  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima);

    this.yInicial = height - this.altura - 37;
    this.y = this.yInicial;
    this.gravidade = 3;
    this.velocidadeDoPulo = 0;
  }

  pula() {
    this.velocidadeDoPulo = -30;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;

    const colisao = collideRectRect(
      this.x, this.y, this.largura * precisao, this.altura * precisao,
      inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao
    );

    return colisao;
  }

}