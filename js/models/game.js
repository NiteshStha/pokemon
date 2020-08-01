class Game {
  canvas;
  ctx;
  gameEngine;
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    canvas.width = CANVAS_DIMENSION.width;
    canvas.height = CANVAS_DIMENSION.height;
  }

  start = () => {
    this.gameEngine = requestAnimationFrame(() => this.start());
    this.ctx.clearRect(0, 0, CANVAS_DIMENSION.width, CANVAS_DIMENSION.height);
    this.ctx.drawImage(
      getImage('BACKGROUND'),
      0,
      0,
      CANVAS_DIMENSION.width,
      CANVAS_DIMENSION.height
    );
  };
}
