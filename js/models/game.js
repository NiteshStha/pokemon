class Game {
  canvas;
  ctx;
  gameEngine;
  battle;
  playerPokemons;
  opponentPokemons;

  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    canvas.width = CANVAS_DIMENSIONS.width;
    canvas.height = CANVAS_DIMENSIONS.height;
    this.playerPokemons = [
      new Pokemon(POKEMON.DRAGONITE),
      new Pokemon(POKEMON.BLASTOISE),
    ];
    this.opponentPokemons = [
      new Pokemon(POKEMON.BLASTOISE),
      new Pokemon(POKEMON.DRAGONITE),
    ];
    this.battle = new Battle(
      this.ctx,
      this.playerPokemons,
      this.opponentPokemons
    );
  }

  start = () => {
    this.gameEngine = requestAnimationFrame(() => this.start());
    this.ctx.clearRect(0, 0, CANVAS_DIMENSIONS.width, CANVAS_DIMENSIONS.height);
    this.battle.start();
  };
}
