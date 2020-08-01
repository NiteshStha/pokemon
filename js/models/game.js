class Game {
  canvas;
  ctx;
  gameEngine;
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    canvas.width = CANVAS_DIMENSIONS.width;
    canvas.height = CANVAS_DIMENSIONS.height;
  }

  start = () => {
    this.gameEngine = requestAnimationFrame(() => this.start());
    this.ctx.clearRect(0, 0, CANVAS_DIMENSIONS.width, CANVAS_DIMENSIONS.height);
    this.ctx.drawImage(
      services.getImage(IMAGES_NAME.BACKGROUND),
      BATTLE_BACK_DIMENSIONS.x,
      BATTLE_BACK_DIMENSIONS.y,
      BATTLE_BACK_DIMENSIONS.width,
      BATTLE_BACK_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getImage(IMAGES_NAME.HEALTH_BAR),
      PLAYER_HEALTH_BAR_DIMENSIONS.x,
      PLAYER_HEALTH_BAR_DIMENSIONS.y,
      PLAYER_HEALTH_BAR_DIMENSIONS.width,
      PLAYER_HEALTH_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getImage(IMAGES_NAME.INFO_BAR),
      PLAYER_INFO_BAR_DIMENSIONS.x,
      PLAYER_INFO_BAR_DIMENSIONS.y,
      PLAYER_INFO_BAR_DIMENSIONS.width,
      PLAYER_INFO_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getImage(IMAGES_NAME.HEALTH_BAR),
      OPPONENT_HEALTH_BAR_DIMENSIONS.x,
      OPPONENT_HEALTH_BAR_DIMENSIONS.y,
      OPPONENT_HEALTH_BAR_DIMENSIONS.width,
      OPPONENT_HEALTH_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getImage(IMAGES_NAME.INFO_BAR),
      OPPONENT_INFO_BAR_DIMENSIONS.x,
      OPPONENT_INFO_BAR_DIMENSIONS.y,
      OPPONENT_INFO_BAR_DIMENSIONS.width,
      OPPONENT_INFO_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getImage(IMAGES_NAME.MOVES_BAR),
      MOVES_BAR_DIMENSIONS.x,
      MOVES_BAR_DIMENSIONS.y,
      MOVES_BAR_DIMENSIONS.width,
      MOVES_BAR_DIMENSIONS.height
    );

    this.ctx.font = 'bold 22px Nunito';
    this.ctx.fillText(
      'Dragon Pulse',
      MOVES_POSITION.MOVE_1.x,
      MOVES_POSITION.MOVE_1.y
    );
    this.ctx.fillText(
      'Hurricane',
      MOVES_POSITION.MOVE_2.x,
      MOVES_POSITION.MOVE_2.y
    );
    this.ctx.fillText(
      'Outrage',
      MOVES_POSITION.MOVE_3.x,
      MOVES_POSITION.MOVE_3.y
    );
    this.ctx.fillText(
      'Thunder Punch',
      MOVES_POSITION.MOVE_4.x,
      MOVES_POSITION.MOVE_4.y
    );
  };
}
