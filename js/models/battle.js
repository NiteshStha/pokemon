class Battle {
  ctx;
  selectorX = 0;
  selectorY = 0;
  /**
   * Action Selection -> 'SELECTION'
   * Attack -> 'ATTACK'
   * Items -> 'ITEMS'
   */
  state = 'SELECTION';
  /**
   * Move 1 -> 0
   * Move 2 -> 1
   * Move 3 -> 2
   * Move 4 -> 3
   */
  selectedMove = 0;

  constructor(ctx) {
    this.ctx = ctx;
    window.addEventListener('keydown', this.#actionKeyEvents);
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
    this.ctx.font = 'bold 28px Nunito';

    // Draws the Attack or Items Menu
    this.ctx.fillText('Attack', 745, 560);
    this.ctx.fillText('Items', 750, 610);

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

    if (this.state === 'SELECTION') {
      // Draws the Move Selector
      this.ctx.beginPath();
      this.ctx.moveTo(
        ACTION_SELECTOR_POSITION.x1,
        ACTION_SELECTOR_POSITION.y1 + this.selectorY
      );
      this.ctx.lineTo(
        ACTION_SELECTOR_POSITION.x2,
        ACTION_SELECTOR_POSITION.y2 + this.selectorY
      );
      this.ctx.lineTo(
        ACTION_SELECTOR_POSITION.x3,
        ACTION_SELECTOR_POSITION.y3 + this.selectorY
      );
      this.ctx.fill();
    }

    if (this.state === 'ATTACK') {
      // Draws the Move Selector
      this.ctx.beginPath();
      this.ctx.moveTo(
        MOVES_SELECTOR_POSITION.x1 + this.selectorX,
        MOVES_SELECTOR_POSITION.y1 + this.selectorY
      );
      this.ctx.lineTo(
        MOVES_SELECTOR_POSITION.x2 + this.selectorX,
        MOVES_SELECTOR_POSITION.y2 + this.selectorY
      );
      this.ctx.lineTo(
        MOVES_SELECTOR_POSITION.x3 + this.selectorX,
        MOVES_SELECTOR_POSITION.y3 + this.selectorY
      );
      this.ctx.fill();
    }
  };

  #changeEventListeners = () => {
    window.removeEventListener('keydown', this.#movesKeyEvents);
    window.removeEventListener('keydown', this.#actionKeyEvents);

    if (this.state === 'SELECTION')
      window.addEventListener('keydown', this.#actionKeyEvents);

    if (this.state === 'ATTACK')
      window.addEventListener('keydown', this.#movesKeyEvents);
  };

  #actionKeyEvents = (event) => {
    if (event.keyCode === 38) {
      this.selectorY =
        this.selectorY > 0
          ? this.selectorY - ACTION_SELECTOR_POSITION.dy
          : this.selectorY;
    }

    if (event.keyCode === 40) {
      this.selectorY =
        this.selectorY < ACTION_SELECTOR_POSITION.dy
          ? this.selectorY + ACTION_SELECTOR_POSITION.dy
          : this.selectorY;
    }

    if (event.keyCode === 13) {
      this.state = 'ATTACK';
      this.selectorX = 0;
      this.selectorY = 0;
      this.#changeEventListeners();
    }
  };

  #movesKeyEvents = (event) => {
    if (event.keyCode === 37) {
      this.selectorX =
        this.selectorX > 0
          ? this.selectorX - MOVES_SELECTOR_POSITION.dx
          : this.selectorX;
    }
    if (event.keyCode === 38) {
      this.selectorY =
        this.selectorY > 0
          ? this.selectorY - MOVES_SELECTOR_POSITION.dy
          : this.selectorY;
    }
    if (event.keyCode === 39) {
      this.selectorX =
        this.selectorX < MOVES_SELECTOR_POSITION.dx
          ? this.selectorX + MOVES_SELECTOR_POSITION.dx
          : this.selectorX;
    }
    if (event.keyCode === 40) {
      this.selectorY =
        this.selectorY < MOVES_SELECTOR_POSITION.dy
          ? this.selectorY + MOVES_SELECTOR_POSITION.dy
          : this.selectorY;
    }

    if (event.keyCode === 27) {
      this.state = 'SELECTION';
      this.selectorX = 0;
      this.selectorY = 0;
      this.#changeEventListeners();
    }

    this.#updateSelectedMove();
  };

  #updateSelectedMove = () => {
    if (this.selectorX === 0 && this.selectorY === 0) {
      this.selectedMove = 0;
    }
    if (this.selectorX === MOVES_SELECTOR_POSITION.dx && this.selectorY === 0) {
      this.selectedMove = 1;
    }
    if (this.selectorX === 0 && this.selectorY === MOVES_SELECTOR_POSITION.dy) {
      this.selectedMove = 2;
    }
    if (
      this.selectorX === MOVES_SELECTOR_POSITION.dx &&
      this.selectorY === MOVES_SELECTOR_POSITION.dy
    ) {
      this.selectedMove = 3;
    }
  };
}
