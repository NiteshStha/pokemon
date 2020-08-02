class Game {
  canvas;
  ctx;
  gameEngine;
  battle;
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    canvas.width = CANVAS_DIMENSIONS.width;
    canvas.height = CANVAS_DIMENSIONS.height;
    this.battle = new Battle(this.ctx);
  }

  start = () => {
    this.gameEngine = requestAnimationFrame(() => this.start());
    this.ctx.clearRect(0, 0, CANVAS_DIMENSIONS.width, CANVAS_DIMENSIONS.height);
    this.battle.start();
  };
}
