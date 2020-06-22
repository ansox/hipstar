class Personagem {
  matriz = [
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
  ]

  frame = 0;
  speed = 0;
  maxSpeed = 3;

  constructor(imagem) {
    this.imagem = imagem;
  }

  exibe() {
    image(imagemPersonagem, 50, height - 135, 110, 135,
      this.matriz[this.frame][0], this.matriz[this.frame][1],
      220, 270);

    this.anima();
  }

  anima() {
    this.speed++;

    if (this.speed >= this.maxSpeed) {
      this.speed = 0;
      this.frame++;

      if (this.frame >= this.matriz.length - 1) {
        this.frame = 0;
      }
    }

  }
}