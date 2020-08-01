class Pokemon {
  name;
  type;
  stats;
  moves;

  constructor(pokemon) {
    this.name = pokemon.name;
    this.type = pokemon.type;
    this.stats = pokemon.stats;
    this.moves = pokemon.moves;
  }

  getType = () => {
    if (Array.isArray(this.type))
      return Object.keys(TYPES).filter((key) => this.type.includes(TYPES[key]));
    return Object.keys(TYPES).find((key) => TYPES[key] === this.type);
  };
}

// const pk = new Pokemon(POKEMON.DRAGONITE);
// const pk2 = new Pokemon(POKEMON.DRAGONITE);
// console.log(pk);
// console.log(pk.getType());
// console.log(services.getEffectiveness(pk.moves[2].type, pk2.type));
