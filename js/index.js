const game = new Game();

loadAllImages().then(() => {
  game.start();
});
