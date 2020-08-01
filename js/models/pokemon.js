class Pokemon {
  name;
  type;
  stats;
  attacks;

  constructor(pokemon) {
    this.name = pokemon.name;
    this.type = pokemon.type;
  }

  getType = () => Object.keys(TYPES).find((key) => TYPES[key] === this.type);
}

const pk = new Pokemon(POKEMON.DRAGONITE);
console.log(pk);
console.log(pk.getType());
