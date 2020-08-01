const services = {
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
};
