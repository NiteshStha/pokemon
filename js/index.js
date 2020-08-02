const game = new Game();

loadAllSprites().then(() => {
  game.start();
});
