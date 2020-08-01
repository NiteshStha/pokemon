class Pokemon {
  name;
  type;
  stats;
  attacks;

  constructor(pokemon) {
    this.name = pokemon.name;
    this.type = pokemon.type;
  }
}

const pk = new Pokemon(POKEMON.DRAGONITE);
console.log(pk);
console.log(services.getType(pk.type));
