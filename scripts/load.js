function load() {
  imagemPersonagem = loadImage('./imgs/correndo.png');
  imagemInimigo = loadImage('./imgs/inimigos/gotinha.png');
  imagemTroll = loadImage('./imgs/inimigos/troll.png');
  imagemVoador = loadImage('./imgs/inimigos/gotinha-voadora.png');
  gameOver = loadImage('./imgs/assets/game-over.png');
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
  somPulo = loadSound('./sons/somPulo.mp3');
  forest01 = loadImage('./imgs/Forest/Forest Layer 01.png');
  forest02 = loadImage('./imgs/Forest/Forest Layer 02.png');
  forest03 = loadImage('./imgs/Forest/Forest Layer 03.png');
  forest04 = loadImage('./imgs/Forest/Forest Layer 04.png');
  forest05 = loadImage('./imgs/Forest/Forest Layer 05.png');
  imagemTelaInicial = loadImage('./imgs/assets/telaInicial.png');
  fontTelaInicial = loadFont('./imgs/assets/fonteTelaInicial.otf');
  imagemVida = loadImage('./imgs/assets/coracao.png');
  fita = loadJSON('./fita/fita.json');
}

export default load;