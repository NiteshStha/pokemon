const services = {
  /**
   * Get the Effectiveness of the Attack of the Pokemon on the Opponent's Pokemon.
   * @param {object} attack The Attack Object of the Pokemon.
   * @param {object} pokemon The Pokemon Object that is being attacked.
   * @returns {number} Returns the effectiveness multiplier.
   */
  getEffectiveness: (attack, pokemon) => {
    if (Array.isArray(pokemon.type)) {
      return pokemon.type.reduce(
        (effect, type) => effect * TYPE_EFFECTIVENESS_MATRIX[attack.type][type],
        1
      );
    }
    return TYPE_EFFECTIVENESS_MATRIX[attack.type][pokemon.type];
  },
};
