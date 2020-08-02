class Battle {
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }

  start = () => {
    this.#drawSprites();
  };

  #drawSprites = () => {
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.BACKGROUND),
      BATTLE_BACK_DIMENSIONS.x,
      BATTLE_BACK_DIMENSIONS.y,
      BATTLE_BACK_DIMENSIONS.width,
      BATTLE_BACK_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.HEALTH_BAR),
      PLAYER_HEALTH_BAR_DIMENSIONS.x,
      PLAYER_HEALTH_BAR_DIMENSIONS.y,
      PLAYER_HEALTH_BAR_DIMENSIONS.width,
      PLAYER_HEALTH_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.INFO_BAR),
      PLAYER_INFO_BAR_DIMENSIONS.x,
      PLAYER_INFO_BAR_DIMENSIONS.y,
      PLAYER_INFO_BAR_DIMENSIONS.width,
      PLAYER_INFO_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.HEALTH_BAR),
      OPPONENT_HEALTH_BAR_DIMENSIONS.x,
      OPPONENT_HEALTH_BAR_DIMENSIONS.y,
      OPPONENT_HEALTH_BAR_DIMENSIONS.width,
      OPPONENT_HEALTH_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.INFO_BAR),
      OPPONENT_INFO_BAR_DIMENSIONS.x,
      OPPONENT_INFO_BAR_DIMENSIONS.y,
      OPPONENT_INFO_BAR_DIMENSIONS.width,
      OPPONENT_INFO_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.MOVES_BAR),
      MOVES_BAR_DIMENSIONS.x,
      MOVES_BAR_DIMENSIONS.y,
      MOVES_BAR_DIMENSIONS.width,
      MOVES_BAR_DIMENSIONS.height
    );

    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.DRAGONITE_BACK),
      120,
      300,
      200,
      200
    );

    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.DRAGONITE_FRONT),
      530,
      30,
      280,
      280
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
