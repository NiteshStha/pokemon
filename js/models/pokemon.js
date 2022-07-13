class Pokemon {
  name;
  type;
  level;
  sprites;
  stats;
  moves;

  constructor(pokemon) {
    this.name = pokemon.name;
    this.type = pokemon.type;
    this.level = pokemon.level;
    this.sprites = pokemon.sprites;
    this.stats = { ...pokemon.stats };
    this.moves = pokemon.moves;
  }

  getType = () => {
    if (Array.isArray(this.type))
      return Object.keys(TYPES).filter((key) => this.type.includes(TYPES[key]));
    return Object.keys(TYPES).find((key) => TYPES[key] === this.type);
  };

  useMove = (attack, opponentPokemon) => {
    const damage = services.getDamage(attack, this, opponentPokemon);
    opponentPokemon.stats.hp -= damage;
    return damage;
  };
}
