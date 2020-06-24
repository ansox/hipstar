class Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, velocidadeMaxima) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.y = height - altura;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.speed = 0;
    this.velocidadeMaxima = velocidadeMaxima;
    this.frame = 0;
  }

  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura,
      this.matriz[this.frame][0], this.matriz[this.frame][1],
      this.larguraSprite, this.alturaSprite);

    this.anima();
  }

  anima() {
    this.speed++;

    if (this.speed >= this.velocidadeMaxima) {
      this.speed = 0;
      this.frame++;

      if (this.frame >= this.matriz.length - 1) {
        this.frame = 0;
      }
    }
  }
}