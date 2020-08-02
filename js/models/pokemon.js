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
    opponentPokemon.stats.hp -= services.getDamage(
      attack,
      this,
      opponentPokemon
    );
  };
}

// const pk1 = new Pokemon(POKEMON.DRAGONITE);
// const pk2 = new Pokemon(POKEMON.BLASTOISE);
// pk1.useMove(pk1.moves[1], pk2);
// console.log(pk2.stats.hp);
// pk2.useMove(pk2.moves[0], pk1);
// console.log(pk1.stats.hp);
