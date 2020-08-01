const services = {
  /**
   * Get the Effectiveness of the Attack of the Pokemon on the Opponent's Pokemon.
   * @param {Object} attack The Attack Object
   * @param {Object} oppPokemon The Opponent Pokemon Object
   */
  getEffectiveness: (attack, oppPokemon) => {
    if (Array.isArray(oppPokemon.type)) {
      return oppPokemon.type.reduce(
        (effect, type) => effect * TYPE_EFFECTIVENESS_CHART[attack.type][type],
        1
      );
    }
    return TYPE_EFFECTIVENESS_CHART[attack.type][oppPokemon.type];
  },
};

const oppoPokemon = {
  type: [TYPES.GHOST, TYPES.GROUND],
};

const attack = {
  type: TYPES.ELECTRIC,
};

console.log(services.getEffectiveness(attack, oppoPokemon));
