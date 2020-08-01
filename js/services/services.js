const services = {
  /**
   * Generate random numbers between two intervals.
   * @param {number} min The minimum number in the interval.
   * @param {number} max The maximum number in the interval.
   * @returns {number} Returns a random number between two intervals.
   */
  RNG: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),

  /**
   * Get the Effectiveness of the Attack of the Pokemon on the Opponent's Pokemon.
   * @param {number} attackType The Attack Object of the Pokemon.
   * @param {number} pokemonType The Pokemon Object that is being attacked.
   * @returns {number} Returns the effectiveness multiplier.
   */
  getEffectiveness: (attackType, pokemonType) => {
    if (Array.isArray(pokemonType)) {
      return pokemonType.reduce(
        (effect, type) => effect * TYPE_EFFECTIVENESS_MATRIX[attackType][type],
        1
      );
    }
    return TYPE_EFFECTIVENESS_MATRIX[attackType][pokemonType];
  },

  /**
   * Get the Pokemon Move Damage against the Opponent's Pokemon.
   * @param {object} attack The Attack used by the Player.
   * @param {object} playerPokemon The Player's Pokemon.
   * @param {object} opponentPokemon The Opponent's Pokemon.
   * @returns {number} The Damage amount hit by the Player's Pokemon.
   */
  getDamage: (attack, playerPokemon, opponentPokemon) => {
    const lvl = (2 * playerPokemon.level) / 5 + 2;
    const power = attack.damage;
    const a =
      attack.attackType === ATTACK_TYPE.ATTACK
        ? playerPokemon.stats.attack
        : playerPokemon.stats.spAttack;
    const d =
      attack.attackType === ATTACK_TYPE.ATTACK
        ? opponentPokemon.stats.defense
        : opponentPokemon.stats.spDefense;
    const effectiveness = services.getEffectiveness(
      attack.type,
      opponentPokemon.type
    );
    const damage = ((lvl * power * (a / d)) / 50 + 2) * effectiveness;
    // RNG for move accuracy.
    if (services.RNG(1, 100) <= attack.accuracy) return damage;
    // Return 0 if the move missed.
    return 0;
  },
};
