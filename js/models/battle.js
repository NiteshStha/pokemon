class Battle {
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }

  start = () => {
    this.#drawSprites();
  };

  #drawSprites = () => {
    // Draws the battle background
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.BACKGROUND),
      BATTLE_BACK_DIMENSIONS.x,
      BATTLE_BACK_DIMENSIONS.y,
      BATTLE_BACK_DIMENSIONS.width,
      BATTLE_BACK_DIMENSIONS.height
    );

    // Draws the player health bar
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.HEALTH_BAR),
      PLAYER_HEALTH_BAR_DIMENSIONS.x,
      PLAYER_HEALTH_BAR_DIMENSIONS.y,
      PLAYER_HEALTH_BAR_DIMENSIONS.width,
      PLAYER_HEALTH_BAR_DIMENSIONS.height
    );

    // Draws the player info bar
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.INFO_BAR),
      PLAYER_INFO_BAR_DIMENSIONS.x,
      PLAYER_INFO_BAR_DIMENSIONS.y,
      PLAYER_INFO_BAR_DIMENSIONS.width,
      PLAYER_INFO_BAR_DIMENSIONS.height
    );

    // Draws the opponent health bar
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.HEALTH_BAR),
      OPPONENT_HEALTH_BAR_DIMENSIONS.x,
      OPPONENT_HEALTH_BAR_DIMENSIONS.y,
      OPPONENT_HEALTH_BAR_DIMENSIONS.width,
      OPPONENT_HEALTH_BAR_DIMENSIONS.height
    );

    // Draws the opponent info bar
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.INFO_BAR),
      OPPONENT_INFO_BAR_DIMENSIONS.x,
      OPPONENT_INFO_BAR_DIMENSIONS.y,
      OPPONENT_INFO_BAR_DIMENSIONS.width,
      OPPONENT_INFO_BAR_DIMENSIONS.height
    );

    // Draws the player's moves bar
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.MOVES_BAR),
      MOVES_BAR_DIMENSIONS.x,
      MOVES_BAR_DIMENSIONS.y,
      MOVES_BAR_DIMENSIONS.width,
      MOVES_BAR_DIMENSIONS.height
    );

    // Draws the player's pokemon
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.DRAGONITE_BACK),
      PLAYER_POKEMON_POSITION.x,
      PLAYER_POKEMON_POSITION.y,
      PLAYER_POKEMON_POSITION.width,
      PLAYER_POKEMON_POSITION.height
    );

    // Draws the opponent's pokemon
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.BLASTOISE_FRONT),
      OPPONENT_POKEMON_POSITION.x,
      OPPONENT_POKEMON_POSITION.y,
      OPPONENT_POKEMON_POSITION.width,
      OPPONENT_POKEMON_POSITION.height
    );

    // Styling the fonts
    this.ctx.font = 'bold 22px Nunito';

    // Draws the player's pokemon move 1
    this.ctx.fillText(
      'Dragon Pulse',
      MOVES_POSITION.MOVE_1.x,
      MOVES_POSITION.MOVE_1.y
    );

    // Draws the player's pokemon move 2
    this.ctx.fillText(
      'Hurricane',
      MOVES_POSITION.MOVE_2.x,
      MOVES_POSITION.MOVE_2.y
    );

    // Draws the player's pokemon move 3
    this.ctx.fillText(
      'Outrage',
      MOVES_POSITION.MOVE_3.x,
      MOVES_POSITION.MOVE_3.y
    );

    // Draws the player's pokemon move 4
    this.ctx.fillText(
      'Thunder Punch',
      MOVES_POSITION.MOVE_4.x,
      MOVES_POSITION.MOVE_4.y
    );

    // Draws the player's pokemon name and level
    this.ctx.fillText(
      'Dragonite',
      PLAYER_POKEMON_NAME.x,
      PLAYER_POKEMON_NAME.y
    );
    this.ctx.fillText('Lv100', PLAYER_POKEMON_LEVEL.x, PLAYER_POKEMON_LEVEL.y);

    // Draws the opponent's pokemon name and level
    this.ctx.fillText(
      'Blastoise',
      OPPONENT_POKEMON_NAME.x,
      OPPONENT_POKEMON_NAME.y
    );
    this.ctx.fillText(
      'Lv100',
      OPPONENT_POKEMON_LEVEL.x,
      OPPONENT_POKEMON_LEVEL.y
    );

    // this.ctx.beginPath();
    // this.ctx.moveTo(75, 50);
    // this.ctx.lineTo(100, 50);
    // this.ctx.lineTo(100, 25);
    // this.ctx.fill();
  };
}
