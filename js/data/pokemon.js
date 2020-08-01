const POKEMON = {
  DRAGONITE: {
    name: 'Dragonite',
    type: [TYPES.DRAGON, TYPES.FLYING],
    stats: {
      hp: 386,
      attack: 403,
      defense: 317,
      spAttack: 328,
      spDefense: 328,
      speed: 284,
    },
    moves: [
      {
        name: 'Dragon Pulse',
        type: TYPES.DRAGON,
        damage: 85,
        accuracy: 100,
      },
      {
        name: 'Hurricane',
        type: TYPES.FLYING,
        damage: 110,
        accuracy: 70,
      },
      {
        name: 'Outrage',
        type: TYPES.DRAGON,
        damage: 120,
        accuracy: 100,
      },
      {
        name: 'Thunder Punch',
        type: TYPES.ELECTRIC,
        damage: 75,
        accuracy: 100,
      },
    ],
  },
};
