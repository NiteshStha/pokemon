class Battle {
  // The canvas context object
  ctx;
  // The array of all the player's pokemons
  playerPokemons;
  // The array of all the opponent's pokemons
  opponentPokemons;
  // The current player pokemon index in the array
  playerPokemonIndex = 0;
  // The current opponent pokemon index in the array
  opponentPokemonIndex = 0;
  // The selector x position
  selectorX = 0;
  // The selector y position
  selectorY = 0;
  // The current player's pokemon's full HP
  playerFullHp;
  // The current opponent's pokemon's full HP
  opponentFullHp;
  /**
   * Player turn -> 'PLAYER'
   * Opponent turn -> 'OPPONENT'
   */
  turn;
  /**
   * Action Selection -> 'SELECTION'
   * Attack -> 'ATTACK'
   * Items -> 'ITEMS'
   * Finished -> 'FINISHED'
   */
  state = 'SELECTION';
  /**
   * Move 1 -> 0
   * Move 2 -> 1
   * Move 3 -> 2
   * Move 4 -> 3
   */
  selectedMove = 0;
  /**
   * Player Wins -> 'PLAYER'
   * OPPONENT Wins -> 'OPPONENT'
   */
  winner = '';

  constructor(ctx, playerPokemons, opponentPokemons) {
    this.ctx = ctx;
    this.playerPokemons = playerPokemons;
    this.opponentPokemons = opponentPokemons;
    this.playerFullHp = this.playerPokemons[this.playerPokemonIndex].stats.hp;
    this.opponentFullHp =
      this.opponentPokemons[this.opponentPokemonIndex].stats.hp;
    this.turn = 'PLAYER';
    window.addEventListener('keydown', this.#actionKeyEvents);
  }

  /**
   * Draws all the required sprites and texts in the game
   */
  draw = () => {
    if (this.state === 'FINISHED') {
      this.#drawEndScreen();
    } else {
      this.#drawSprites();
      this.#drawPokemonInfos();
      this.#drawBattleMenu();
    }
  };

  /**
   * Draws the sprites of the game
   */
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
      (this.playerPokemons[this.playerPokemonIndex].stats.hp /
        this.playerFullHp) *
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
      (this.opponentPokemons[this.opponentPokemonIndex].stats.hp /
        this.opponentFullHp) *
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

    if (this.state === 'SELECTION') {
      // Draws the empty actions bar
      this.ctx.drawImage(
        services.getSprite(SPRITE_NAMES.NO_ACTION),
        MOVES_BAR_DIMENSIONS.x,
        MOVES_BAR_DIMENSIONS.y,
        MOVES_BAR_DIMENSIONS.width,
        MOVES_BAR_DIMENSIONS.height
      );
      this.ctx.font = 'bold 32px Nunito';

      this.ctx.fillText(
        'Choose Action',
        EMPTY_TEXT_DIMENSIONS.x,
        EMPTY_TEXT_DIMENSIONS.y
      );
    }

    if (this.state === 'ATTACK' || this.state === 'ITEMS') {
      // Draws the player's moves bar
      this.ctx.drawImage(
        services.getSprite(SPRITE_NAMES.MOVES_BAR),
        MOVES_BAR_DIMENSIONS.x,
        MOVES_BAR_DIMENSIONS.y,
        MOVES_BAR_DIMENSIONS.width,
        MOVES_BAR_DIMENSIONS.height
      );
    }

    // Draws the player's pokemon
    this.ctx.drawImage(
      services.getSprite(
        this.playerPokemons[this.playerPokemonIndex].sprites.back
      ),
      PLAYER_POKEMON_POSITION.x,
      PLAYER_POKEMON_POSITION.y,
      PLAYER_POKEMON_POSITION.width,
      PLAYER_POKEMON_POSITION.height
    );

    // Draws the opponent's pokemon
    this.ctx.drawImage(
      services.getSprite(
        this.opponentPokemons[this.opponentPokemonIndex].sprites.front
      ),
      OPPONENT_POKEMON_POSITION.x,
      OPPONENT_POKEMON_POSITION.y,
      OPPONENT_POKEMON_POSITION.width,
      OPPONENT_POKEMON_POSITION.height
    );

    // Styling the fonts
    this.ctx.font = 'bold 28px Nunito';
    this.ctx.fillStyle = '#000';

    // Draws the Attack or Items Menu
    this.ctx.fillText('Attack', 745, 560);
    this.ctx.fillText('Items', 750, 610);
  };

  /**
   * Draws the text infos such as pokemon name and levels
   */
  #drawPokemonInfos = () => {
    // Styling the fonts
    this.ctx.font = 'bold 22px Nunito';

    // Draws the player's pokemon name and level
    this.ctx.fillText(
      this.playerPokemons[this.playerPokemonIndex].name,
      PLAYER_POKEMON_NAME.x,
      PLAYER_POKEMON_NAME.y
    );
    this.ctx.fillText(
      'Lv' + this.playerPokemons[this.playerPokemonIndex].level,
      PLAYER_POKEMON_LEVEL.x,
      PLAYER_POKEMON_LEVEL.y
    );

    // Draws the opponent's pokemon name and level
    this.ctx.fillText(
      this.opponentPokemons[this.opponentPokemonIndex].name,
      OPPONENT_POKEMON_NAME.x,
      OPPONENT_POKEMON_NAME.y
    );
    this.ctx.fillText(
      'Lv' + this.opponentPokemons[this.opponentPokemonIndex].level,
      OPPONENT_POKEMON_LEVEL.x,
      OPPONENT_POKEMON_LEVEL.y
    );

    if (this.state === 'ATTACK') {
      // Draws the player's pokemon move 1
      this.ctx.fillText(
        this.playerPokemons[this.playerPokemonIndex].moves[0].name,
        MOVES_POSITION.MOVE_1.x,
        MOVES_POSITION.MOVE_1.y
      );

      // Draws the player's pokemon move 2
      this.ctx.fillText(
        this.playerPokemons[this.playerPokemonIndex].moves[1].name,
        MOVES_POSITION.MOVE_2.x,
        MOVES_POSITION.MOVE_2.y
      );

      // Draws the player's pokemon move 3
      this.ctx.fillText(
        this.playerPokemons[this.playerPokemonIndex].moves[2].name,
        MOVES_POSITION.MOVE_3.x,
        MOVES_POSITION.MOVE_3.y
      );

      // Draws the player's pokemon move 4
      this.ctx.fillText(
        this.playerPokemons[this.playerPokemonIndex].moves[3].name,
        MOVES_POSITION.MOVE_4.x,
        MOVES_POSITION.MOVE_4.y
      );
    }
  };

  /**
   * Draws the battle menu i.e. the moves lists and items
   */
  #drawBattleMenu = () => {
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

    if (this.state === 'ATTACK' || this.state === 'ITEMS') {
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

  /**
   * Draws an Empty menu for displaying infos
   */
  #drawEmptyScreen = () => {
    // Draws the empty actions bar
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.OVERLAY_MESSAGE),
      MOVES_BAR_DIMENSIONS.x,
      MOVES_BAR_DIMENSIONS.y,
      MOVES_BAR_DIMENSIONS.width,
      MOVES_BAR_DIMENSIONS.height
    );
  };

  /**
   * Draws the winner of the battle after the match has finished
   */
  #drawWinner = () => {
    this.#drawEmptyScreen();
    this.ctx.font = 'bold 32px Nunito';
    if (this.winner === 'PLAYER') {
      this.ctx.fillText(
        'Trainer Wins !!',
        EMPTY_TEXT_DIMENSIONS.x,
        EMPTY_TEXT_DIMENSIONS.y
      );
    }
    if (this.winner === 'OPPONENT') {
      this.ctx.fillText(
        'Opponent Wins !!',
        EMPTY_TEXT_DIMENSIONS.x,
        EMPTY_TEXT_DIMENSIONS.y
      );
    }
  };

  /**
   * Draws the end screen after the game is finished
   */
  #drawEndScreen = () => {
    this.ctx.drawImage(
      services.getSprite(SPRITE_NAMES.GAME_END),
      0,
      0,
      CANVAS_DIMENSIONS.width,
      CANVAS_DIMENSIONS.height
    );
    this.ctx.font = 'bold 32px Nunito';
    if (this.winner === 'PLAYER') {
      this.ctx.fillText(
        'Congratulations, You Win !!!!',
        GAME_END_MESSAGE_POSITION.playerX,
        GAME_END_MESSAGE_POSITION.messageY
      );
    }
    if (this.winner === 'OPPONENT') {
      this.ctx.fillText(
        'Sorry, You Lose !!!!',
        GAME_END_MESSAGE_POSITION.opponentX,
        GAME_END_MESSAGE_POSITION.messageY
      );
    }

    this.ctx.font = 'bold 36px Nunito';
    // Create gradient
    const gradient = this.ctx.createLinearGradient(
      0,
      0,
      CANVAS_DIMENSIONS.width,
      0
    );
    gradient.addColorStop('0', 'black');
    gradient.addColorStop('0.5', 'blue');
    gradient.addColorStop('1.0', 'red');
    this.ctx.strokeStyle = gradient;
    this.ctx.strokeText(
      'Press Enter to Play Again',
      GAME_END_MESSAGE_POSITION.playX,
      GAME_END_MESSAGE_POSITION.playY
    );
  };

  // Handle the pokemon battles
  #handleBattle = () => {
    this.#getPlayerAttack();
  };

  /**
   * Get the player's pokemon attack
   */
  #getPlayerAttack = () => {
    if (
      this.turn === 'PLAYER' &&
      this.playerPokemons[this.playerPokemonIndex].stats.hp > 0
    ) {
      this.#removeEventListeners();
      cancelAnimationFrame(game.gameEngine);
      this.#drawAndUsePokemonAttack(
        true,
        this.playerPokemons[this.playerPokemonIndex],
        this.playerPokemons[this.playerPokemonIndex].moves[this.selectedMove],
        this.opponentPokemons[this.opponentPokemonIndex]
      );

      setTimeout(() => {
        game.start();
        this.draw();
        this.turn = 'OPPONENT';
        this.#getOpponentAttack();
        this.#checkPokemonFaint();
        this.#changeEventListeners();
      }, 4000);
    }
  };

  /**
   * Get the opponent's pokemon attack
   */
  #getOpponentAttack = () => {
    if (
      this.turn === 'OPPONENT' &&
      this.opponentPokemons[this.opponentPokemonIndex].stats.hp > 0
    ) {
      this.#removeEventListeners();
      const RNG = services.RNG(0, 3);
      cancelAnimationFrame(game.gameEngine);
      this.#drawAndUsePokemonAttack(
        false,
        this.opponentPokemons[this.opponentPokemonIndex],
        this.opponentPokemons[this.opponentPokemonIndex].moves[RNG],
        this.playerPokemons[this.playerPokemonIndex]
      );

      setTimeout(() => {
        game.start();
        this.draw();
        this.turn = 'PLAYER';
        this.#checkPokemonFaint();
        this.#changeEventListeners();
      }, 4000);
    }
  };

  #drawAndUsePokemonAttack = (player, attPokemon, move, defPokemon) => {
    // Drawing attack details
    const trainer = player ? 'Player' : 'Opponent';
    this.#drawEmptyScreen();
    this.ctx.fillText(
      `${trainer}'s ${attPokemon.name} used ${move.name}`,
      EMPTY_TEXT_DIMENSIONS.x,
      EMPTY_TEXT_DIMENSIONS.y
    );

    // Drawing attack effectiveness
    setTimeout(() => {
      // Using the attack and updating damage for the defending pokemon
      const damage = attPokemon.getDamage(move, defPokemon);
      defPokemon.stats.hp -= damage;

      const effectiveness = services.getEffectiveness(
        move.type,
        defPokemon.type
      );
      let effectivenessMessage = '';

      if (effectiveness === 0)
        effectivenessMessage = 'The attack had no effect';
      if (effectiveness === 1)
        effectivenessMessage = 'The attack was effective';
      if (effectiveness === 0.5)
        effectivenessMessage = 'The attack was not very effective';
      if (effectiveness === 2)
        effectivenessMessage = 'The attack was very effective';
      if (effectiveness > 2)
        effectivenessMessage = 'The attack was super effective';
      if (damage === 0) effectivenessMessage = 'The attack missed the target';

      this.#drawEmptyScreen();
      this.ctx.fillText(
        effectivenessMessage,
        EMPTY_TEXT_DIMENSIONS.x,
        EMPTY_TEXT_DIMENSIONS.y
      );
    }, 2000);
  };

  /**
   * Check whether any of the pokemon has fainted
   */
  #checkPokemonFaint = () => {
    // Check if player's pokemon fainted
    if (this.playerPokemons[this.playerPokemonIndex].stats.hp <= 0) {
      cancelAnimationFrame(game.gameEngine);
      this.#drawEmptyScreen();
      this.ctx.fillText(
        `Player's ${this.playerPokemons[this.playerPokemonIndex].name} fainted`,
        EMPTY_TEXT_DIMENSIONS.x,
        EMPTY_TEXT_DIMENSIONS.y
      );
      setTimeout(() => {
        game.start();
        this.playerPokemonIndex++;
        if (
          this.playerPokemonIndex >= this.playerPokemons.length &&
          this.winner === ''
        ) {
          // Equals to length - 1 because after the battle is over the index is set to length - 1 to avoid null exception
          this.playerPokemonIndex--;
          this.winner = 'OPPONENT';
          this.#finishMatch();
        }
        if (this.state !== 'FINISHED') {
          this.playerFullHp =
            this.playerPokemons[this.playerPokemonIndex].stats.hp;
          this.turn = 'PLAYER';
        }
      }, 2000);
    }

    // Check if opponent's pokemon fainted
    if (this.opponentPokemons[this.opponentPokemonIndex].stats.hp <= 0) {
      cancelAnimationFrame(game.gameEngine);
      this.#drawEmptyScreen();
      this.ctx.fillText(
        `Opponent's ${
          this.opponentPokemons[this.opponentPokemonIndex].name
        } fainted`,
        EMPTY_TEXT_DIMENSIONS.x,
        EMPTY_TEXT_DIMENSIONS.y
      );
      setTimeout(() => {
        game.start();
        this.opponentPokemonIndex++;
        if (
          this.opponentPokemonIndex >= this.opponentPokemons.length &&
          this.winner === ''
        ) {
          // Equals to length - 1 because after the battle is over the index is set to length - 1 to avoid null exception
          this.opponentPokemonIndex--;
          this.winner = 'PLAYER';
          this.#finishMatch();
        }
        if (this.state !== 'FINISHED') {
          this.opponentFullHp =
            this.opponentPokemons[this.opponentPokemonIndex].stats.hp;
          this.turn = 'PLAYER';
        }
      }, 2000);
    }
  };

  /**
   * End the game
   */
  #finishMatch = () => {
    this.#removeEventListeners();
    cancelAnimationFrame(game.gameEngine);
    this.draw();
    this.#drawWinner();
    setTimeout(() => {
      this.state = 'FINISHED';
      this.draw();
      window.addEventListener('keydown', this.#playAgainEvent);
    }, 2000);
  };

  #changeEventListeners = () => {
    window.removeEventListener('keydown', this.#movesKeyEvents);
    window.removeEventListener('keydown', this.#actionKeyEvents);

    if (this.state === 'SELECTION')
      window.addEventListener('keydown', this.#actionKeyEvents);

    if (this.state === 'ATTACK')
      window.addEventListener('keydown', this.#movesKeyEvents);

    if (this.state === 'ITEMS') {
      window.addEventListener('keydown', this.#itemsKeyEvents);
    }
  };

  #actionKeyEvents = (event) => {
    if (event.keyCode === KEY_CODES.UP) {
      this.selectorY =
        this.selectorY > 0
          ? this.selectorY - ACTION_SELECTOR_POSITION.dy
          : this.selectorY;
    }

    if (event.keyCode === KEY_CODES.DOWN) {
      this.selectorY =
        this.selectorY < ACTION_SELECTOR_POSITION.dy
          ? this.selectorY + ACTION_SELECTOR_POSITION.dy
          : this.selectorY;
    }

    if (event.keyCode === KEY_CODES.ENTER) {
      if (this.selectorY === ACTION_SELECTOR_POSITION.dy) {
        this.state = 'ITEMS';
      } else {
        this.state = 'ATTACK';
      }
      this.selectorX = 0;
      this.selectorY = 0;
      this.#changeEventListeners();
    }
  };

  #movesAndItemsKeyBindSetup = (event, eventFrom) => {
    if (event.keyCode === KEY_CODES.LEFT) {
      this.selectorX =
        this.selectorX > 0
          ? this.selectorX - MOVES_SELECTOR_POSITION.dx
          : this.selectorX;
    }
    if (event.keyCode === KEY_CODES.UP) {
      this.selectorY =
        this.selectorY > 0
          ? this.selectorY - MOVES_SELECTOR_POSITION.dy
          : this.selectorY;
    }
    if (event.keyCode === KEY_CODES.RIGHT) {
      this.selectorX =
        this.selectorX < MOVES_SELECTOR_POSITION.dx
          ? this.selectorX + MOVES_SELECTOR_POSITION.dx
          : this.selectorX;
    }
    if (event.keyCode === KEY_CODES.DOWN) {
      this.selectorY =
        this.selectorY < MOVES_SELECTOR_POSITION.dy
          ? this.selectorY + MOVES_SELECTOR_POSITION.dy
          : this.selectorY;
    }

    if (event.keyCode === KEY_CODES.ENTER && eventFrom === 'moves') {
      this.#handleBattle();
    }

    if (event.keyCode === KEY_CODES.ENTER && eventFrom === 'items') {
      // this.#handleItems();
    }

    if (event.keyCode === KEY_CODES.ESC) {
      this.state = 'SELECTION';
      this.selectorX = 0;
      this.selectorY = 0;
      this.#changeEventListeners();
    }
  };

  #movesKeyEvents = (event) => {
    this.#movesAndItemsKeyBindSetup(event, 'moves');
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

  #itemsKeyEvents = (event) => {
    this.#movesAndItemsKeyBindSetup(event, 'items');
  };

  #playAgainEvent = (event) => {
    if (event.keyCode === KEY_CODES.ENTER) {
      this.#removeEventListeners();
      game.reset();
    }
  };

  #removeEventListeners = () => {
    window.removeEventListener('keydown', this.#playAgainEvent);
    window.removeEventListener('keydown', this.#movesKeyEvents);
    window.removeEventListener('keydown', this.#actionKeyEvents);
  };
}
