const POKEMON = {
  DRAGONITE: {
    name: 'Dragonite',
    type: [TYPES.DRAGON, TYPES.FLYING],
    level: 100,
    sprites: {
      front: 'DRAGONITE_FRONT',
      back: 'DRAGONITE_BACK',
    },
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
        attackType: ATTACK_TYPE.SPECIAL_ATTACK,
      },
      {
        name: 'Hurricane',
        type: TYPES.FLYING,
        damage: 110,
        accuracy: 70,
        attackType: ATTACK_TYPE.SPECIAL_ATTACK,
      },
      {
        name: 'Outrage',
        type: TYPES.DRAGON,
        damage: 120,
        accuracy: 100,
        attackType: ATTACK_TYPE.SPECIAL_ATTACK,
      },
      {
        name: 'Thunder Punch',
        type: TYPES.ELECTRIC,
        damage: 75,
        accuracy: 100,
        attackType: ATTACK_TYPE.SPECIAL_ATTACK,
      },
    ],
  },

  BLASTOISE: {
    name: 'Blastoise',
    type: TYPES.WATER,
    level: 100,
    sprites: {
      front: 'BLASTOISE_FRONT',
      back: 'BLASTOISE_BACK',
    },
    stats: {
      hp: 362,
      attack: 291,
      defense: 328,
      spAttack: 295,
      spDefense: 339,
      speed: 280,
    },
    moves: [
      {
        name: 'Ice Beam',
        type: TYPES.ICE,
        damage: 90,
        accuracy: 100,
        attackType: ATTACK_TYPE.SPECIAL_ATTACK,
      },
      {
        name: 'Hydro Pump',
        type: TYPES.WATER,
        damage: 110,
        accuracy: 80,
        attackType: ATTACK_TYPE.SPECIAL_ATTACK,
      },
      {
        name: 'Flash Cannon',
        type: TYPES.STEEL,
        damage: 80,
        accuracy: 100,
        attackType: ATTACK_TYPE.ATTACK,
      },
      {
        name: 'Hydro Cannon',
        type: TYPES.WATER,
        damage: 150,
        accuracy: 90,
        attackType: ATTACK_TYPE.SPECIAL_ATTACK,
      },
    ],
  },
};
