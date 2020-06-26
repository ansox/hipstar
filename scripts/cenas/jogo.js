import Cenario from '../jogo/cenario.js'
import Pontuacao from '../jogo/pontuacao.js';
import Personagem from '../jogo/personagem.js';
import Inimigo from '../jogo/inimigo.js';
import Vida from '../jogo/vida.js';

export default class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    this.mapa = fita.mapa;
    this.indice = 0;
  }

  setup() {
    cenario = new Cenario(forest01, 1);
    cenario2 = new Cenario(forest02, 2);
    cenario3 = new Cenario(forest03, 3);
    cenario4 = new Cenario(forest04, 4);
    cenario5 = new Cenario(forest05, 7);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, 37, 110, 135, 220, 270, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 37, 52, 52, 104, 104, 1);
    const inimigoTroll = new Inimigo(matrizTroll, imagemTroll, width - 52, 5, 200, 200, 400, 400, 2);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemVoador, width - 52, 200, 100, 75, 200, 150, 3);

    inimigos.push(inimigo);
    inimigos.push(inimigoTroll);
    inimigos.push(inimigoVoador);
  }

  draw() {
    cenario.exibe();
    cenario.move();

    cenario2.exibe();
    cenario2.move();

    cenario3.exibe();
    cenario3.move();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();

      if (vida.vidas === 0) {
        image(gameOver, width / 2 - 200, height / 2);
        noLoop();
      }
    }

    personagem.exibe();
    personagem.aplicaGravidade();

    cenario4.exibe();
    cenario4.move();

    cenario5.exibe();
    cenario5.move();

    pontuacao.adicionarPontos();
    pontuacao.exibe();

    vida.draw();
  }

  keyPressed(key) {
    if (key === ' ') {
      personagem.pula();
      somPulo.play();
    }
  }
}