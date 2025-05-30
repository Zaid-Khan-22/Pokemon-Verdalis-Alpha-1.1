const pokedex = {
// Rowlet Line
Rowlet: {
  types: ['Grass', 'Flying'],
  baseStats: {hp: 68, att: 55, def: 55, spatt: 45, spdef: 50, speed: 42},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 17',
  evolvesInto: 'Dartrix',
  baseExp : 64, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 5, move: 'Leafage' },
    { level: 8, move: 'Peck' },
    { level: 12, move: 'Quick Attack' },
    { level: 16, move: 'Razor Leaf' },
    { level: 21, move: 'Pluck' },
    { level: 25, move: 'Aerial Ace' }
  ]
},
Dartrix: {
  types: ['Grass', 'Flying'],
  baseStats: {hp: 78, att: 75, def: 75, spatt: 70, spdef: 70, speed: 52},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 34',
  evolvesInto: 'Decidueye',
  baseExp : 147,  
  learnset: [
    { level: 21, move: 'Pluck' },
    { level: 25, move: 'Aerial Ace' },
    { level: 29, move: 'Ominous Wind' },
    { level: 33, move: 'Fury Cutter' }
  ]
},
Decidueye: {
  types: ['Grass', 'Ghost'],
  baseStats: {hp: 78, att: 107, def: 75, spatt: 100, spdef: 100, speed: 75},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 265, 
  learnset: [
    { level: 34, move: 'Shadow Claw' },
    { level: 38, move: 'Sucker Punch' },
    { level: 44, move: 'Leaf Blade' },
    { level: 48, move: 'Phantom Quill' },
    { level: 50, move: 'Brave Bird' },
    { level: 56, move: 'Leaf Storm' }
  ]
},

// Chimchar Line
Chimchar: {
  types: ['Fire'],
  baseStats: {hp: 44, att: 58, def: 49, spatt: 58, spdef: 49, speed: 62},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 14',
  evolvesInto: 'Monferno',
  baseExp : 62, 
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 5, move: 'Ember' },
    { level: 10, move: 'Pursuit' },
    { level: 13, move: 'Flame Wheel' }
  ]
},
Monferno: {
  types: ['Fire', 'Fighting'],
  baseStats: {hp: 64, att: 83, def: 52, spatt: 83, spdef: 52, speed: 86},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 36',
  evolvesInto: 'Infernape',
  baseExp : 142,
  learnset: [
    { level: 15, move: 'Mach Punch' },
    { level: 21, move: 'Fire Punch' },
    { level: 28, move: 'Brick Break' },
    { level: 35, move: 'Flame Burst' },
    { level: 38, move: 'Close Combat' },
    { level: 48, move: 'Flare Blitz' }
  ]
},
Infernape: {
  types: ['Fire', 'Fighting'],
  baseStats: {hp: 76, att: 104, def: 71, spatt: 104, spdef: 71, speed: 109},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 240,  
  learnset: [
    { level: 37, move: 'Close Combat' },
    { level: 42, move: 'Flare Blitz' },
    { level: 48, move: 'Blazing Vault' },
    { level: 51, move: 'Thunder Punch' },
  ]
},

// Mudkip Line
Mudkip: {
  types: ['Water'],
  baseStats: {hp: 50, att: 70, def: 50, spatt: 60, spdef: 50, speed: 50},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 16',
  evolvesInto: 'Marshtomp',
  baseExp : 62, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 5, move: 'Water Gun' },
    { level: 10, move: 'Mud-Slap' },
    { level: 15, move: 'Rock Smash' }
  ]
},
Marshtomp: {
  types: ['Water', 'Ground'],
  baseStats: {hp: 70, att: 85, def: 70, spatt: 60, spdef: 70, speed: 65},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 36',
  evolvesInto: 'Swampert',
  baseExp : 142, 
  learnset: [
    { level: 20, move: 'Mud Shot' },
    { level: 25, move: 'Bubble Beam' },
    { level: 30, move: 'Earth Power' },
    { level: 34, move: 'Brick Break' }
  ]
},
Swampert: {
  types: ['Water', 'Ground'],
  baseStats: {hp: 100, att: 110, def: 90, spatt: 85, spdef: 90, speed: 60},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 268,  
  learnset: [
    { level: 36, move: 'Earthquake' },
    { level: 42, move: 'Surf' },
    { level: 48, move: 'Aqua Tremor' },
    { level: 54, move: 'Liquidation' }
  ]
},

// Meowth Line
Meowth: {
  types: ['Normal'],
  baseStats: {hp: 40, att: 45, def: 35, spatt: 40, spdef: 40, speed: 90},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 28',
  evolvesInto: 'Persian',
  baseExp : 58,  
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 14, move: 'Bite' },
    { level: 17, move: 'Dig' },
    { level: 22, move: 'Rock Smash' }
  ]
},
Persian: {
  types: ['Normal'],
  baseStats: {hp: 65, att: 70, def: 60, spatt: 65, spdef: 65, speed: 115},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 154, 
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Dig' },
    { level: 1, move: 'Rock Smash' },
    { level: 28, move: 'Power Gem' },
    { level: 32, move: 'Slash' },
    { level: 44, move: 'Play Rough' },
    { level: 49, move: 'Swift' }
  ]
},

// Munchlax Line
Munchlax: {
  types: ['Normal'],
  baseStats: {hp: 135, att: 85, def: 40, spatt: 40, spdef: 85, speed: 5},
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 32',
  evolvesInto: 'Snorlax',
  baseExp : 78,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 9, move: 'Lick' },
    { level: 13, move: 'Bite' },
    { level: 17, move: 'Take Down' },
    { level: 21, move: 'Body Slam' }
  ]
},
Snorlax: {
  types: ['Normal'],
  baseStats: {hp: 160, att: 110, def: 65, spatt: 65, spdef: 110, speed: 30},
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 189,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Lick' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Take Down' },
    { level: 1, move: 'Body Slam' },
    { level: 32, move: 'Crunch' },
    { level: 36, move: 'Hyper Beam' },
    { level: 44, move: 'Giga Impact' },
    { level: 48, move: 'Brick Break' }
  ]
},

// Teddiursa Line
Teddiursa: {
  types: ['Normal'],
  baseStats: {hp: 60, att: 80, def: 50, spatt: 50, spdef: 50, speed: 40},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Ursaring',
  baseExp : 66,  
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 5, move: 'Rock Smash' },
    { level: 9, move: 'Pursuit' },
    { level: 15, move: 'Slash' },
    { level: 21, move: 'Take Down' }
  ]
},
Ursaring: {
  types: ['Normal'],
  baseStats: {hp: 90, att: 130, def: 75, spatt: 75, spdef: 75, speed: 55},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 175, 
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Pursuit' },
    { level: 1, move: 'Slash' },
    { level: 1, move: 'Take Down' },
    { level: 31, move: 'Cross Chop' },
    { level: 37, move: 'Close Combat' },
    { level: 46, move: 'Giga Impact' }
  ]
},
Zigzagoon: {
    types: ['Normal'],
    baseStats: { hp: 38, att: 30, def: 41, spatt: 30, spdef: 41, speed: 60 },
    expGroup: 'fast',
    evolves: true,
    evoMethod: 'Level 20',
    evolvesInto: 'Linoone',
    baseExp : 56,  
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 9, move: 'Headbutt' },
      { level: 12, move: 'Rock Smash' },
      { level: 15, move: 'Slash' },
      { level: 18, move: 'Mud Shot' }
    ]
  },
  Linoone: {
    types: ['Normal'],
    baseStats: { hp: 78, att: 70, def: 61, spatt: 50, spdef: 61, speed: 100 },
    expGroup: 'fast',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 147, 
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Headbutt' },
      { level: 1, move: 'Rock Smash' },
      { level: 1, move: 'Slash' },
      { level: 1, move: 'Mud Shot' },
      { level: 27, move: 'Night Slash' },
      { level: 30, move: 'Brick Break' },
      { level: 33, move: 'Surf' },
      { level: 36, move: 'Hyper Beam' },
      { level: 39, move: 'Giga Impact' }
    ]
  },
   PorygonZ: {
    types: ['Normal'],
    baseStats: { hp: 85, att: 80, def: 70, spatt: 135, spdef: 75, speed: 90 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 241, 
    learnset: [
      { level: 30, move: 'Discharge' },
      { level: 36, move: 'Tri Attack' },
      { level: 42, move: 'Signal Beam' },
      { level: 48, move: 'Psychic' },
      { level: 54, move: 'Hyper Beam' }
    ]
  },
  Lillipup: {
    types: ['Normal'],
    baseStats: { hp: 45, att: 60, def: 45, spatt: 25, spdef: 45, speed: 55 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 16',
    evolvesInto: 'Herdier',
    baseExp : 55,  
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 4, move: 'Mud-Slap' },
      { level: 8, move: 'Bite' },
      { level: 12, move: 'Take Down' }
    ]
  },
  Herdier: {
    types: ['Normal'],
    baseStats: { hp: 65, att: 80, def: 65, spatt: 35, spdef: 65, speed: 60 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 32',
    evolvesInto: 'Stoutland',
    baseExp : 130,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Mud-Slap' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Take Down' },
      { level: 18, move: 'Fire Fang' },
      { level: 20, move: 'Crunch' },
      { level: 24, move: 'Ice Fang' },
      { level: 28, move: 'Thunder Fang' },
      { level: 30, move: 'Double-Edge' }
    ]
  },
  Stoutland: {
    types: ['Normal'],
    baseStats: { hp: 85, att: 110, def: 90, spatt: 45, spdef: 90, speed: 80 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 225,  
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Mud-Slap' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Take Down' },
      { level: 1, move: 'Fire Fang' },
      { level: 1, move: 'Crunch' },
      { level: 1, move: 'Ice Fang' },
      { level: 1, move: 'Thunder Fang' },
      { level: 1, move: 'Double-Edge' },
      { level: 42, move: 'Giga Impact' },
    ]
  },
  Zangoose: {
    types: ['Normal'],
    baseStats: { hp: 73, att: 115, def: 60, spatt: 60, spdef: 60, speed: 90 },
    expGroup: 'mediumfast',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
     baseExp : 160, 
    learnset: [
      { level: 1, move: 'Scratch' },
      { level: 8, move: 'Quick Attack' },
      { level: 12, move: 'Pursuit' },
      { level: 20, move: 'Slash' },
      { level: 24, move: 'Brick Break' },
      { level: 30, move: 'X-Scissor' },
      { level: 36, move: 'Metal Claw' },
      { level: 40, move: 'Close Combat' }
    ]
  },
  Growlithe: {
  types: ['Fire'],
  baseStats: { hp: 55, att: 70, def: 45, spatt: 70, spdef: 50, speed: 60 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Fire Stone',
  evolvesInto: 'Arcanine',
  baseExp : 70, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 3, move: 'Bite' },
    { level: 6, move: 'Ember' },
    { level: 12, move: 'Flame Wheel' },
    { level: 18, move: 'Take Down' },
    { level: 24, move: 'Crunch' },
    { level: 30, move: 'Flamethrower' },
    { level: 42, move: 'Flare Blitz' },
    { level: 50, move: 'Outrage' },
  ]
},

Arcanine: {
  types: ['Fire'],
  baseStats: { hp: 90, att: 110, def: 80, spatt: 100, spdef: 80, speed: 95 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 194,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Flame Wheel' },
    { level: 1, move: 'Take Down' },
    { level: 1, move: 'Crunch' },
    { level: 1, move: 'Flamethrower' },
    { level: 1, move: 'Flare Blitz' },
    { level: 1, move: 'Outrage' },
  ]
},

Flareon: {
  types: ['Fire'],
  baseStats: { hp: 65, att: 130, def: 60, spatt: 95, spdef: 110, speed: 65 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 184,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 15, move: 'Ember' },
    { level: 20, move: 'Bite' },
    { level: 25, move: 'Fire Fang' },
    { level: 30, move: 'Iron Tail' },
    { level: 33, move: 'Dig' },
    { level: 35, move: 'Lava Plume' },
    { level: 40, move: 'Flare Blitz' }
  ]
},

Magby: {
  types: ['Fire'],
  baseStats: { hp: 45, att: 75, def: 37, spatt: 70, spdef: 55, speed: 83 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Magmar',
  baseExp : 73, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 10, move: 'Ember' },
    { level: 16, move: 'Rock Smash' },
    { level: 22, move: 'Flame Burst' },
    { level: 28, move: 'Fire Punch' }
  ]
},

Magmar: {
  types: ['Fire'],
  baseStats: { hp: 65, att: 95, def: 57, spatt: 100, spdef: 85, speed: 93 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 48',
  evolvesInto: 'Magmortar',
  baseExp : 173,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Flame Burst' },
    { level: 1, move: 'Fire Punch' },
    { level: 36, move: 'Brick Break' },
    { level: 42, move: 'Flamethrower' },
    { level: 47, move: 'Fire Blast' }
  ]
},

Magmortar: {
  types: ['Fire'],
  baseStats: { hp: 75, att: 95, def: 67, spatt: 125, spdef: 95, speed: 83 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 243,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Flame Burst' },
    { level: 1, move: 'Fire Punch' },
    { level: 1, move: 'Brick Break' },
    { level: 1, move: 'Flamethrower' },
    { level: 1, move: 'Fire Blast' },
    { level: 50, move: 'Sludge Bomb' },
    { level: 52, move: 'Hyper Beam' }
  ]
},
Darumaka: {
  types: ['Fire'],
  baseStats: { hp: 70, att: 90, def: 45, spatt: 15, spdef: 45, speed: 50 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Darmanitan',
  baseExp : 63, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 5, move: 'Ember' },
    { level: 12, move: 'Fire Fang' },
    { level: 20, move: 'Headbutt' },
    { level: 27, move: 'Fire Punch' }
  ]
},

Darmanitan: {
  types: ['Fire'],
  baseStats: { hp: 105, att: 140, def: 55, spatt: 30, spdef: 55, speed: 95 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 168, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Fire Fang' },
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Fire Punch' },
    { level: 41, move: 'Double-Edge' },
    { level: 37, move: 'Brick Break' }, 
    { level: 43, move: 'Flare Blitz' },
    
  ]
},

Larvesta: {
  types: ['Bug', 'Fire'],
  baseStats: { hp: 55, att: 85, def: 55, spatt: 50, spdef: 55, speed: 60 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Volcarona',
  baseExp : 72, 
  learnset: [
    { level: 1, move: 'Ember' },
    { level: 20, move: 'Flame Wheel' },
    { level: 30, move: 'Struggle Bug' },
    { level: 40, move: 'Double-Edge' },
    { level: 50, move: 'Fire Blast' }
  ]
},

Volcarona: {
  types: ['Bug', 'Fire'],
  baseStats: { hp: 85, att: 60, def: 65, spatt: 135, spdef: 105, speed: 100 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 275,  
  learnset: [
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Flame Wheel' },
    { level: 1, move: 'Struggle Bug' },
    { level: 1, move: 'Double-Edge' },
    { level: 1, move: 'Fire Blast' },
    { level: 40, move: 'Flame Burst' },
    { level: 45, move: 'Signal Beam' },
    { level: 50, move: 'Flamethrower' },
    { level: 70, move: 'Bug Buzz' }
  ]
},

Fletchling: {
  types: ['Normal', 'Flying'],
  baseStats: { hp: 45, att: 50, def: 43, spatt: 40, spdef: 38, speed: 62 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 17',
  evolvesInto: 'Fletchinder',
  baseExp : 56, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 5, move: 'Ember' },
    { level: 10, move: 'Peck' },
    { level: 15, move: 'Quick Attack' }
  ]
},

Fletchinder: {
  types: ['Fire', 'Flying'],
  baseStats: { hp: 62, att: 73, def: 55, spatt: 56, spdef: 52, speed: 84 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 32',
  evolvesInto: 'Talonflame',
  baseExp : 134,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Quick Attack' },
    { level: 17, move: 'Flame Wheel' },
    { level: 21, move: 'Pluck' },
    { level: 28, move: 'Flame Burst' },
    { level: 31, move: 'Flamethrower' }
  ]
},

Talonflame: {
  types: ['Fire', 'Flying'],
  baseStats: { hp: 78, att: 81, def: 71, spatt: 74, spdef: 69, speed: 126 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 175, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Flame Wheel' },
    { level: 1, move: 'Pluck' },
    { level: 1, move: 'Flame Burst' },
    { level: 1, move: 'Flamethrower' },
    { level: 35, move: 'Brave Bird' },
    { level: 38, move: 'Flare Blitz' },
    { level: 42, move: 'Steel Wing' }
  ]
},
Machop: {
  types: ['Fighting'],
  baseStats: { hp: 70, att: 80, def: 50, spatt: 35, spdef: 35, speed: 35 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 28',
  evolvesInto: 'Machoke',
  baseExp : 61,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 5, move: 'Headbutt' },
    { level: 10, move: 'Rock Smash' },
    { level: 15, move: 'Rock Throw' },
    { level: 20, move: 'Brick Break' }
  ]
},

Machoke: {
  types: ['Fighting'],
  baseStats: { hp: 80, att: 100, def: 70, spatt: 50, spdef: 60, speed: 45 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 45',
  evolvesInto: 'Machamp',
  baseExp : 142,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Brick Break' },
    { level: 28, move: 'Close Comabt' },
    { level: 32, move: 'Rock Tomb' },
    { level: 36, move: 'Cross Chop' },
    { level: 40, move: 'Rock Slide' },
  ]
},

Machamp: {
  types: ['Fighting'],
  baseStats: { hp: 90, att: 130, def: 80, spatt: 65, spdef: 85, speed: 55 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 253, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Brick Break' },
    { level: 1, move: 'Close Comabt' },
    { level: 1, move: 'Rock Tomb' },
    { level: 1, move: 'Cross Chop' },
    { level: 1, move: 'Rock Slide' },
    { level: 45, move: 'Focus Blast' },
    { level: 52, move: 'Stone Edge' }
  ]
},

Mienfoo: {
  types: ['Fighting'],
  baseStats: { hp: 45, att: 85, def: 50, spatt: 55, spdef: 50, speed: 65 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Mienshao',
  baseExp : 70,
  learnset: [
    { level: 1, move: 'Headbutt' },
    { level: 5, move: 'Rock Smash' },
    { level: 10, move: 'Smack Down' },
    { level: 20, move: 'Vaccum Wave' },
    { level: 29, move: 'Swift' },
    { level: 40, move: 'U-turn' }
  ]
},

Mienshao: {
  types: ['Fighting'],
  baseStats: { hp: 65, att: 125, def: 60, spatt: 95, spdef: 60, speed: 105 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 179, 
  learnset: [
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Smack Down' },
    { level: 1, move: 'Vaccum Wave' },
    { level: 1, move: 'Swift' },
    { level: 35, move: 'U-turn' },
    { level: 45, move: 'Aura Sphere' },
    { level: 50, move: 'High Jump Kick' }
  ]
},

Riolu: {
  types: ['Fighting'],
  baseStats: { hp: 40, att: 70, def: 40, spatt: 35, spdef: 40, speed: 60 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 28',
  evolvesInto: 'Lucario',
  baseExp : 57,
  learnset: [
    { level: 1, move: 'Quick Attack' },
    { level: 6, move: 'Rock Smash' },
    { level: 15, move: 'Vaccum Wave' },
    { level: 20, move: 'Brick Break' },
    { level: 25, move: 'Metal Claw' }
  ]
},

Lucario: {
  types: ['Fighting', 'Steel'],
  baseStats: { hp: 70, att: 110, def: 70, spatt: 115, spdef: 70, speed: 90 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 184,
  learnset: [
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Vaccum Wave' },
    { level: 1, move: 'Brick Break' },
    { level: 1, move: 'Metal Claw' },
    { level: 29, move: 'Aura Sphere' },
    { level: 37, move: 'Flash Cannon' },
    { level: 42, move: 'Close Combat' },
    { level: 48, move: 'Dragon Pulse' }
  ]
},

Croagunk: {
  types: ['Poison', 'Fighting'],
  baseStats: { hp: 48, att: 61, def: 40, spatt: 61, spdef: 40, speed: 50 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 37',
  evolvesInto: 'Toxicroak',
  baseExp : 60,
  learnset: [
    { level: 1, move: 'Mud-Slap' },
    { level: 6, move: 'Poison Sting' },
    { level: 10, move: 'Rock Smash' },
    { level: 15, move: 'Pursuit' },
    { level: 25, move: 'Sucker Punch' },
    { level: 35, move: 'Venoshock' }
  ]
},

Toxicroak: {
  types: ['Poison', 'Fighting'],
  baseStats: { hp: 83, att: 106, def: 65, spatt: 86, spdef: 65, speed: 85 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 172,
  learnset: [
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Poison Sting' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Pursuit' },
    { level: 1, move: 'Sucker Punch' },
    { level: 1, move: 'Venoshock' },
    { level: 37, move: 'Poison Jab' },
    { level: 42, move: 'Brick Break' },
    { level: 48, move: 'Cross Chop' },
    { level: 55, move: 'Sludge Bomb' }
  ]
},

Vaporeon: {
  types: ['Water'],
  baseStats: { hp: 130, att: 65, def: 60, spatt: 110, spdef: 95, speed: 65 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 184,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 15, move: 'Water Gun' },
    { level: 20, move: 'Bite' },
    { level: 25, move: 'Bubble Beam' },
    { level: 30, move: 'Aurora Beam' },
    { level: 35, move: 'Surf' },
    { level: 50, move: 'Hydro Pump' },
    { level: 55, move: 'Ice Beam' },
  ]
},

Magikarp: {
  types: ['Water'],
  baseStats: { hp: 20, att: 10, def: 55, spatt: 15, spdef: 20, speed: 80 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 20',
  evolvesInto: 'Gyarados',
  baseExp : 20,
  learnset: [
    { level: 1, move: 'Splash' },
    { level: 15, move: 'Tackle' },
  ]
},

Gyarados: {
  types: ['Water', 'Flying'],
  baseStats: { hp: 95, att: 125, def: 79, spatt: 60, spdef: 100, speed: 81 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 189,
  learnset: [
    { level: 1, move: 'Splash' },
    { level: 1, move: 'Tackle' },
    { level: 21, move: 'Bite' },
    { level: 30, move: 'Aqua Tail' },
    { level: 35, move: 'Ice Fang' },
    { level: 45, move: 'Hydro Pump' },
    { level: 55, move: 'Hurricane' }
  ]
},

Corphish: {
  types: ['Water'],
  baseStats: { hp: 43, att: 80, def: 65, spatt: 50, spdef: 35, speed: 35 },
  expGroup: 'fluctuating',
  evolves: true,
  evoMethod: 'Level 28',
  evolvesInto: 'Crawdaunt',
  baseExp : 62,
  learnset: [
    { level: 1, move: 'Bubble' },
    { level: 5, move: 'Metal Claw' },
    { level: 10, move: 'Headbutt' },
    { level: 20, move: 'Bubble Beam' },
    { level: 25, move: 'Knock Off' },

  ]
},

Crawdaunt: {
  types: ['Water', 'Dark'],
  baseStats: { hp: 63, att: 120, def: 85, spatt: 90, spdef: 55, speed: 55 },
  expGroup: 'fluctuating',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 164,
  learnset: [
    { level: 1, move: 'Bubble' },
    { level: 1, move: 'Metal Claw' },
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Bubble Beam' },
    { level: 1, move: 'Knock Off' },
    { level: 30, move: 'Night Slash' },
    { level: 35, move: 'Crunch' },
    { level: 42, move: 'Crabhammer' },
    { level: 50, move: 'Ice Punch' }
  ]
},

Binacle: {
  types: ['Rock', 'Water'],
  baseStats: { hp: 42, att: 52, def: 67, spatt: 39, spdef: 56, speed: 50 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Barbaracle',
  baseExp : 61,  
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 4, move: 'Water Gun' },
    { level: 10, move: 'Ice Punch' },
    { level: 20, move: 'Smack Down' },
    { level: 30, move: 'Slash' }
  ]
},

Barbaracle: {
  types: ['Rock', 'Water'],
  baseStats: { hp: 72, att: 105, def: 115, spatt: 54, spdef: 86, speed: 68 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 175,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Water Gun' },
    { level: 1, move: 'Ice Punch' },
    { level: 1, move: 'Smack Down' },
    { level: 1, move: 'Slash' },
    { level: 39, move: 'Cross Poison' },
    { level: 42, move: 'Night Slash' },
    { level: 48, move: 'Stone Edge' },
    { level: 54, move: 'Cross Chop' }
  ]
},
Spearow: {
  types: ['Normal', 'Flying'],
  baseStats: { hp: 40, att: 60, def: 30, spatt: 31, spdef: 31, speed: 70 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 20',
  evolvesInto: 'Fearow',
  baseExp : 52,
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 5, move: 'Tackle' },
    { level: 10, move: 'Quick Attack' },
    { level: 15, move: 'Aerial Ace' },
    { level: 24, move: 'Drill Peck' }
  ]
},

Fearow: {
  types: ['Normal', 'Flying'],
  baseStats: { hp: 65, att: 90, def: 65, spatt: 61, spdef: 61, speed: 100 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 155,
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Aerial Ace' },
    { level: 1, move: 'Drill Peck' },
    { level: 32, move: 'Steel Wing' },
    { level: 50, move: 'Brave Bird' }
  ]
},

Rookidee: {
  types: ['Flying'],
  baseStats: { hp: 38, att: 47, def: 35, spatt: 33, spdef: 35, speed: 57 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 18',
  evolvesInto: 'Corvisquire',
  baseExp : 49,  
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 4, move: 'Tackle' },
    { level: 12, move: 'Wing Attack' },
    { level: 16, move: 'Pluck' }
  ]
},

Corvisquire: {
  types: ['Flying'],
  baseStats: { hp: 68, att: 67, def: 55, spatt: 43, spdef: 55, speed: 77 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Corviknight',
  baseExp : 128,
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Wing Attack' },
    { level: 1, move: 'Pluck' },
    { level: 22, move: 'Drill Peck' },
    { level: 27, move: 'Air Slash' },
    { level: 33, move: 'Brave Bird' }
  ]
},

Corviknight: {
  types: ['Flying', 'Steel'],
  baseStats: { hp: 98, att: 87, def: 105, spatt: 53, spdef: 85, speed: 67 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 248,  
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Wing Attack' },
    { level: 1, move: 'Pluck' },
    { level: 1, move: 'Drill Peck' },
    { level: 1, move: 'Air Slash' },
    { level: 1, move: 'Brave Bird' },
    { level: 38, move: 'Iron Head' },
    { level: 42, move: 'Steel Wing' },
  ]
},

Lileep: {
  types: ['Rock', 'Grass'],
  baseStats: { hp: 66, att: 41, def: 77, spatt: 61, spdef: 87, speed: 23 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Cradily',
  baseExp : 71,
  learnset: [
    { level: 1, move: 'Astonish' },
    { level: 5, move: 'Acid' },
    { level: 10, move: 'Absorb' },
    { level: 15, move: 'Rock Throw' },
    { level: 20, move: 'Ancient Power' },
    { level: 30, move: 'Giga Drain' }
  ]
},

Cradily: {
  types: ['Rock', 'Grass'],
  baseStats: {hp: 86, att: 81, def: 97, spatt: 81, spdef: 107, speed: 43},
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp: 173,
  learnset: [
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Acid' },
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Ancient Power' },
    { level: 1, move: 'Giga Drain' },
    { level: 37, move: 'Rock Slide' },
    { level: 42, move: 'Energy Ball' },
  ]
},

Budew: {
  types: ['Grass', 'Poison'],
  baseStats: { hp: 40, att: 30, def: 35, spatt: 50, spdef: 70, speed: 55 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 20',
  evolvesInto: 'Roselia',
  baseExp : 56,
  learnset: [
    { level: 1, move: 'Absorb' },
    { level: 4, move: 'Acid' },
    { level: 7, move: 'Swift' },
    { level: 13, move: 'Mega Drain' }
  ]
},

Roselia: {
  types: ['Grass', 'Poison'],
  baseStats: { hp: 50, att: 60, def: 45, spatt: 100, spdef: 80, speed: 65 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Roserade',
  baseExp : 140, 
  learnset: [
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Acid' },
    { level: 1, move: 'Swift' },
    { level: 1, move: 'Mega Drain' },
    { level: 24, move: 'Sludge' },
    { level: 29, move: 'Energy Ball' },
  ]
},

Roserade: {
  types: ['Grass', 'Poison'],
  baseStats: { hp: 60, att: 70, def: 65, spatt: 125, spdef: 105, speed: 90 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 232,
  learnset: [
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Acid' },
    { level: 1, move: 'Swift' },
    { level: 1, move: 'Mega Drain' },
    { level: 1, move: 'Sludge' },
    { level: 1, move: 'Energy Ball' },
    { level: 36, move: 'Leaf Storm' },
    { level: 39, move: 'Dazzling Gleam' },
    { level: 44, move: 'Sludge Bomb' },
    { level: 51, move: 'Shadow Ball' },
  ]
},

Leafeon: {
  types: ['Grass'],
  baseStats: { hp: 65, att: 110, def: 130, spatt: 60, spdef: 65, speed: 95 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 184,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 15, move: 'Leafage' },
    { level: 20, move: 'Bite' },
    { level: 25, move: 'Razor Leaf' },
    { level: 30, move: 'Dig' },
    { level: 35, move: 'Energy Ball' },
    { level: 40, move: 'Leaf Blade' }
  ]
},

Ferroseed: {
  types: ['Grass', 'Steel'],
  baseStats: { hp: 44, att: 50, def: 91, spatt: 24, spdef: 86, speed: 10 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Ferrothorn',
  baseExp : 61,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 6, move: 'Absorb' },
    { level: 12, move: 'Metal Claw' },
    { level: 18, move: 'Razor Leaf' },
    { level: 26, move: 'Energy Ball' },
    { level: 35, move: 'Leaf Blade' }
  ]
},

Ferrothorn: {
  types: ['Grass', 'Steel'],
  baseStats: { hp: 74, att: 94, def: 131, spatt: 54, spdef: 116, speed: 20 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 171,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Metal Claw' },
    { level: 1, move: 'Razor Leaf' },
    { level: 1, move: 'Energy Ball' },
    { level: 32, move: 'Leaf Blade' },
    { level: 40, move: 'Flash Cannon' },
    { level: 45, move: 'Iron Head' }
  ]
},

Capsakid: {
  types: ['Grass'],
  baseStats: { hp: 52, att: 62, def: 40, spatt: 62, spdef: 40, speed: 50 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 25',
  evolvesInto: 'Scovillain',
  baseExp : 62,
  learnset: [
    { level: 1, move: 'Bite' },
    { level: 5, move: 'Absorb' },
    { level: 10, move: 'Headbutt' },
    { level: 15, move: 'Seed Bomb' },
    { level: 20, move: 'Mega Drain' }
  ]
},

Scovillain: {
  types: ['Grass', 'Fire'],
  baseStats: { hp: 65, att: 108, def: 65, spatt: 108, spdef: 65, speed: 75 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 170,  
  learnset: [
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Seed Bomb' },
    { level: 1, move: 'Mega Drain' },
    { level: 26, move: 'Flamethrower' },
    { level: 28, move: 'Energy Ball' },
    { level: 35, move: 'Fire Blast' },
    { level: 45, move: 'Solar Beam' }
  ]
},

Lotad: {
  types: ['Water', 'Grass'],
  baseStats: { hp: 40, att: 30, def: 30, spatt: 40, spdef: 50, speed: 30 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 14',
  evolvesInto: 'Lombre',
  baseExp : 44,  
  learnset: [
    { level: 1, move: 'Astonish' },
    { level: 3, move: 'Tackle' },
    { level: 6, move: 'Absorb' },
    { level: 9, move: 'Water Gun' },
    { level: 12, move: 'Swift' }
  ]
},

Lombre: {
  types: ['Water', 'Grass'],
  baseStats: { hp: 60, att: 50, def: 50, spatt: 60, spdef: 70, speed: 50 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 32',
  evolvesInto: 'Ludicolo',
  baseExp : 119, 
  learnset: [
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Water Gun' },
    { level: 1, move: 'Swift' },
    { level: 18, move: 'Bubble Beam' },
    { level: 22, move: 'Mega Drain' },
    { level: 27, move: 'Zen Headbutt' },
  ]
},

Ludicolo: {
  types: ['Water', 'Grass'],
  baseStats: { hp: 80, att: 70, def: 70, spatt: 90, spdef: 100, speed: 70 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 216,  
  learnset: [
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Water Gun' },
    { level: 1, move: 'Swift' },
    { level: 1, move: 'Bubble Beam' },
    { level: 1, move: 'Mega Drain' },
    { level: 1, move: 'Zen Headbutt' },
    { level: 38, move: 'Energy Ball' },
    { level: 47, move: 'Hydro Pump' },
    { level: 55, move: 'Ice Beam' }
  ]
},

Phantump: {
  types: ['Ghost', 'Grass'],
  baseStats: { hp: 43, att: 70, def: 48, spatt: 50, spdef: 60, speed: 38 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 28',
  evolvesInto: 'Trevenant',
  baseExp : 62, 
  learnset: [
    { level: 1, move: 'Astonish' },
    { level: 4, move: 'Tackle' },
    { level: 8, move: 'Absrob' },
    { level: 12, move: 'Shadow Sneak' },
    { level: 16, move: 'Hex' },
    { level: 20, move: 'Razor Leaf' }
  ]
},

Trevenant: {
  types: ['Ghost', 'Grass'],
  baseStats: { hp: 85, att: 110, def: 76, spatt: 65, spdef: 82, speed: 56 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 166, 
  learnset: [
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Absrob' },
    { level: 1, move: 'Shadow Sneak' },
    { level: 1, move: 'Hex' },
    { level: 1, move: 'Razor Leaf' },
    { level: 30, move: 'Shadow Claw' },
    { level: 35, move: 'Energy Ball' },
    { level: 40, move: 'Leaf Blade' },
    { level: 50, move: 'Phantom Force' }
  ]
},
NidoranM: {
  types: ['Poison'],
  baseStats: { hp: 46, att: 57, def: 40, spatt: 40, spdef: 40, speed: 50 },
  expGroup: 'medium-slow',
  evolves: true,
  evoMethod: 'Level 16',
  evolvesInto: 'Nidorino',
  baseExp : 55,
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 6, move: 'Tackle' },
    { level: 12, move: 'Poison Sting' },
  ]
},

Nidorino: {
  types: ['Poison'],
  baseStats: { hp: 61, att: 72, def: 57, spatt: 55, spdef: 55, speed: 65 },
  expGroup: 'medium-slow',
  evolves: true,
  evoMethod: 'Moon Stone',
  evolvesInto: 'Nidoking',
  baseExp : 128,
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Poison Sting' },
    { level: 17, move: 'Take Down' },
    { level: 21, move: 'Poison Jab' },
    { level: 25, move: 'Energy Ball' },
    { level: 30, move: 'Brick Break' },
  ]
},

Nidoking: {
  types: ['Poison', 'Ground'],
  baseStats: { hp: 81, att: 102, def: 77, spatt: 85, spdef: 75, speed: 85 },
  expGroup: 'medium-slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 227,  
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Poison Sting' },
    { level: 1, move: 'Take Down' },
    { level: 1, move: 'Poison Jab' },
    { level: 1, move: 'Energy Ball' },
    { level: 1, move: 'Brick Break' },
    { level: 31, move: 'Earth Power' },
    { level: 36, move: 'Megahorn' },
    { level: 38, move: 'Dig' },
    { level: 42, move: 'Sludge Wave' },
    { level: 48, move: 'Earthquake' }
  ]
},

NidoranF: {
  types: ['Poison'],
  baseStats: {hp: 55, att: 47, def: 52, spatt: 40, spdef: 40, speed: 41},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 16',
  evolvesInto: 'Nidorina',
  baseExp: 55,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 4, move: 'Peck' },
    { level: 9, move: 'Rock Smash' },
    { level: 12, move: 'Poison Sting' },
    { level: 15, move: 'Bite' },
    

  ]
},
Nidorina: {
  types: ['Poison'],
  baseStats: {hp: 70, att: 62, def: 67, spatt: 55, spdef: 55, speed: 56},
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Moon Stone',
  evolvesInto: 'Nidoqueen',
  baseExp: 128,
  learnset: [
    { level: 23, move: 'Sludge' },
    { level: 28, move: 'Crunch' },
    { level: 33, move: 'Earth Power' },
    { level: 37, move: 'Poison Fang' }
  ]
},
Nidoqueen: {
  types: ['Poison', 'Ground'],
  baseStats: {hp: 90, att: 92, def: 87, spatt: 75, spdef: 85, speed: 76},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp: 227,
  learnset: [
    { level: 1, move: 'Sludge' },
    { level: 1, move: 'Crunch' },
    { level: 1, move: 'Earth Power' },
    { level: 1, move: 'Poison Fang' },
    { level: 1, move: 'Body Slam' },
    { level: 43, move: 'Earthquake' },
    { level: 50, move: 'Sludge Wave' },
    { level: 55, move: 'Megahorn' },
    { level: 60, move: 'Hyper Beam' }
  ]
},

Zubat: {
  types: ['Poison', 'Flying'],
  baseStats: { hp: 40, att: 45, def: 35, spatt: 30, spdef: 40, speed: 55 },
  expGroup: 'medium-fast',
  evolves: true,
  evoMethod: 'Level 22',
  evolvesInto: 'Golbat',
  baseExp : 49, 
  learnset: [
    { level: 1, move: 'Absorb' },
    { level: 5, move: 'Astonish' },
    { level: 13, move: 'Wing Attack' },
    { level: 17, move: 'Bite' }
  ]
},

Golbat: {
  types: ['Poison', 'Flying'],
  baseStats: { hp: 75, att: 80, def: 70, spatt: 65, spdef: 75, speed: 90 },
  expGroup: 'medium-fast',
  evolves: true,
  evoMethod: 'Level 38',
  evolvesInto: 'Crobat',
  baseExp : 159,  
  learnset: [
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Wing Attack' },
    { level: 1, move: 'Bite' },
    { level: 23, move: 'Air Slash' },
    { level: 28, move: 'Poison Fang' },
    { level: 33, move: 'Sludge' },
    { level: 36, move: 'Cross Poison' },
  ]
},

Crobat: {
  types: ['Poison', 'Flying'],
  baseStats: { hp: 85, att: 90, def: 80, spatt: 70, spdef: 80, speed: 130 },
  expGroup: 'medium-fast',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 268,
  learnset: [
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Wing Attack' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Air Slash' },
    { level: 1, move: 'Poison Fang' },
    { level: 1, move: 'Sludge' },
    { level: 1, move: 'Cross Poison' },
    { level: 39, move: 'Sludge Bomb' },
    { level: 43, move: 'Brave Bird' },
  ]
},

Seviper: {
  types: ['Poison'],
  baseStats: { hp: 73, att: 100, def: 60, spatt: 100, spdef: 60, speed: 65 },
  expGroup: 'fluctuating',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 160,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 10, move: 'Poison Tail' },
    { level: 15, move: 'Bite' },
    { level: 20, move: 'Venoshock' },
    { level: 25, move: 'Iron Tail' },
    { level: 28, move: 'Poison Fang' },
    { level: 30, move: 'Night Slash' },
    { level: 35, move: 'Cross Poison' },
  ]
},

Skrelp: {
  types: ['Poison', 'Water'],
  baseStats: { hp: 50, att: 60, def: 60, spatt: 60, spdef: 60, speed: 30 },
  expGroup: 'medium-fast',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Dragalge',
  baseExp : 64,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 5, move: 'Acid' },
    { level: 15, move: 'Water Gun' },
    { level: 30, move: 'Sludge' }
  ]
},

Dragalge: {
  types: ['Poison', 'Dragon'],
  baseStats: { hp: 65, att: 75, def: 90, spatt: 97, spdef: 123, speed: 44 },
  expGroup: 'medium-fast',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 173,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Acid' },
    { level: 1, move: 'Water Gun' },
    { level: 1, move: 'Sludge' },
    { level: 39, move: 'Surf' },
    { level: 46, move: 'Dragon Pulse' },
    { level: 53, move: 'Sludge Bomb' }
  ]
},

Magnemite: {
  types: ['Electric', 'Steel'],
  baseStats: { hp: 25, att: 35, def: 70, spatt: 95, spdef: 55, speed: 45 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Magneton',
  baseExp : 65,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 6, move: 'Thunder Shock' },
    { level: 11, move: 'Mirror Shot' },
    { level: 17, move: 'Spark' },
    { level: 28, move: 'Discharge' },
  ]
},

Magneton: {
  types: ['Electric', 'Steel'],
  baseStats: { hp: 50, att: 60, def: 95, spatt: 120, spdef: 70, speed: 70 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 45',
  evolvesInto: 'Magnezone',
  baseExp : 163,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Thunder Shock' },
    { level: 1, move: 'Mirror Shot' },
    { level: 1, move: 'Spark' },
    { level: 1, move: 'Discharge' },
    { level: 31, move: 'Tri Attack' },
    { level: 37, move: 'Flash Cannon' },
    { level: 43, move: 'Thunderbolt' },
  ]
},

Magnezone: {
  types: ['Electric', 'Steel'],
  baseStats: { hp: 70, att: 70, def: 115, spatt: 130, spdef: 90, speed: 60 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 241,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Thunder Shock' },
    { level: 1, move: 'Mirror Shot' },
    { level: 1, move: 'Spark' },
    { level: 1, move: 'Discharge' },
    { level: 1, move: 'Tri Attack' },
    { level: 1, move: 'Flash Cannon' },
    { level: 1, move: 'Thunderbolt' },
    { level: 46, move: 'Thunder' },
    { level: 51, move: 'Steel Beam' },
  ]
},

Jolteon: {
  types: ['Electric'],
  baseStats: { hp: 65, att: 65, def: 60, spatt: 110, spdef: 95, speed: 130 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 184,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 15, move: 'Thunder Shock' },
    { level: 20, move: 'Bite' },
    { level: 25, move: 'Thunder Fang' },
    { level: 30, move: 'Spark' },
    { level: 35, move: 'Discharge' },
    { level: 40, move: 'Thunderbolt' },
    { level: 45, move: 'Thunder' }
  ]
},

Elekid: {
  types: ['Electric'],
  baseStats: { hp: 45, att: 63, def: 37, spatt: 65, spdef: 55, speed: 95 },
  expGroup: 'medium-slow',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Electabuzz',
  baseExp : 72,
  learnset: [
    { level: 1, move: 'Quick Attack' },
    { level: 5, move: 'Thunder Shock' },
    { level: 8, move: 'Swift' },
    { level: 13, move: 'Rock Smash' },
    { level: 22, move: 'Electro Ball' },
    { level: 26, move: 'Spark' },
    { level: 29, move: 'Thunder Punch' }
  ]
},

Electabuzz: {
  types: ['Electric'],
  baseStats: { hp: 65, att: 83, def: 57, spatt: 95, spdef: 85, speed: 105 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 48',
  evolvesInto: 'Electivire',
  baseExp : 172,
  learnset: [
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Thunder Shock' },
    { level: 1, move: 'Swift' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Electro Ball' },
    { level: 1, move: 'Spark' },
    { level: 1, move: 'Thunder Punch' },
    { level: 36, move: 'Thunderbolt' },
    { level: 40, move: 'Wild Charge' },
    { level: 43, move: 'Brick Break' },
  ]
},

Electivire: {
  types: ['Electric'],
  baseStats: { hp: 75, att: 123, def: 67, spatt: 95, spdef: 85, speed: 95 },
  expGroup: 'medium-slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 243, 
  learnset: [
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Thunder Shock' },
    { level: 1, move: 'Swift' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Electro Ball' },
    { level: 1, move: 'Spark' },
    { level: 1, move: 'Thunder Punch' },
    { level: 1, move: 'Thunderbolt' },
    { level: 1, move: 'Wild Charge' },
    { level: 1, move: 'Brick Break' },
    { level: 46, move: 'Zing Zap' },
    { level: 51, move: 'Volt Tackle' },
    { level: 56, move: 'Earthquake' },
    { level: 60, move: 'Giga Impact' }
  ]
},
Chinchou: {
  types: ['Water', 'Electric'],
  baseStats: { hp: 75, att: 38, def: 38, spatt: 56, spdef: 56, speed: 67 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 24',
  evolvesInto: 'Lanturn',
  baseExp : 66,
  learnset: [
    { level: 1, move: 'Water Gun' },
    { level: 4, move: 'Tackle' },
    { level: 8, move: 'Thunder Shock' },
    { level: 12, move: 'Bubble Beam' },
    { level: 16, move: 'Spark' },
    { level: 20, move: 'Aqua Jet' },
    
  ]
},

Lanturn: {
  types: ['Water', 'Electric'],
  baseStats: { hp: 125, att: 58, def: 58, spatt: 76, spdef: 76, speed: 67 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 161,  
  learnset: [
    { level: 1, move: 'Water Gun' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Thunder Shock' },
    { level: 1, move: 'Bubble Beam' },
    { level: 1, move: 'Spark' },
    { level: 1, move: 'Aqua Jet' },
    { level: 29, move: 'Electro Ball' },
    { level: 32, move: 'Signal Beam' },
    { level: 35, move: 'Surf' },
    { level: 40, move: 'Thunderbolt' },
    { level: 45, move: 'Hydro Pump' },
     { level: 50, move: 'Thunder' },
  ]
},

Electrike: {
  types: ['Electric'],
  baseStats: { hp: 40, att: 45, def: 40, spatt: 65, spdef: 40, speed: 65 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 26',
  evolvesInto: 'Manectric',
  baseExp : 59,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 4, move: 'Thunder Shock' },
    { level: 8, move: 'Bite' },
    { level: 12, move: 'Quick Attack' },
    { level: 16, move: 'Spark' },
    { level: 24, move: 'Electro Ball' }
  ]
},

Manectric: {
  types: ['Electric'],
  baseStats: { hp: 70, att: 75, def: 60, spatt: 105, spdef: 60, speed: 105 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 166,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Thunder Shock' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Spark' },
    { level: 1, move: 'Electro Ball' },
    { level: 28, move: 'Fire Fang' },
    { level: 30, move: 'Thunder Fang' },
    { level: 36, move: 'Discharge' },
    { level: 42, move: 'Thunderbolt' },
  ]
},

Toxel: {
  types: ['Electric', 'Poison'],
  baseStats: { hp: 40, att: 38, def: 35, spatt: 54, spdef: 35, speed: 40 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Toxtricity',
  baseExp : 48,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 5, move: 'Acid' },
    { level: 10, move: 'Thundershock' }
  ]
},

Toxtricity: {
  types: ['Electric', 'Poison'],
  baseStats: { hp: 75, att: 98, def: 70, spatt: 114, spdef: 70, speed: 75 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 176,  
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Acid' },
    { level: 1, move: 'Thundershock' },
    { level: 32, move: 'Discharge' },
    { level: 36, move: 'Poison Jab' },
    { level: 40, move: 'Thunderbolt' },
    { level: 42, move: 'Sludge Bomb' },
    { level: 45, move: 'Boomburst' }
  ]
},

Wattrel: {
  types: ['Electric', 'Flying'],
  baseStats: { hp: 40, att: 40, def: 35, spatt: 55, spdef: 40, speed: 70 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 25',
  evolvesInto: 'Kilowattrel',
  baseExp : 56, 
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 5, move: 'Tackle' },
    { level: 10, move: 'Quick Attack' },
    { level: 15, move: 'Pluck' },
    { level: 20, move: 'Spark' },
  ]
},

Kilowattrel: {
  types: ['Electric', 'Flying'],
  baseStats: { hp: 70, att: 70, def: 60, spatt: 105, spdef: 60, speed: 125 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 168, 
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Pluck' },
    { level: 1, move: 'Spark' },
    { level: 28, move: 'Air Cutter' },
    { level: 35, move: 'Discharge' },
    { level: 37, move: 'Air Slash' },
    { level: 39, move: 'Thunderbolt' },
    { level: 42, move: 'Hurricane' }
  ]
},

Diglett: {
  types: ['Ground'],
  baseStats: { hp: 10, att: 55, def: 25, spatt: 35, spdef: 45, speed: 95 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 26',
  evolvesInto: 'Dugtrio',
  baseExp : 53,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 4, move: 'Tackle' },
    { level: 8, move: 'Astonish' },
    { level: 12, move: 'Mud-Slap' },
    { level: 16, move: 'Bulldoze' },
    { level: 20, move: 'Sucker Punch' },
    { level: 24, move: 'Slash' }
  ]
},
Dugtrio: {
  types: ['Ground'],
  baseStats: { hp: 35, att: 100, def: 50, spatt: 50, spdef: 70, speed: 120 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
   baseExp : 149,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Sucker Punch' },
    { level: 1, move: 'Slash' },
    { level: 27, move: 'Earth Power' },
    { level: 30, move: 'Tri Attack' },
    { level: 34, move: 'Rock Slide' },
    { level: 38, move: 'Earthquake' }

  ]
},
Shellos: {
  types: ['Water'],
  baseStats: { hp: 76, att: 48, def: 48, spatt: 57, spdef: 62, speed: 34 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Gastrodon',
  baseExp : 65,
  learnset: [
    { level: 1, move: 'Mud-Slap' },
    { level: 4, move: 'Water Gun' },
    { level: 8, move: 'Mud Bomb' },
    { level: 12, move: 'Bubble Beam' },
    { level: 20, move: 'Body Slam' },
    { level: 25, move: 'Scald' }
  ]
},
Gastrodon: {
  types: ['Water', 'Ground'],
  baseStats: { hp: 111, att: 83, def: 68, spatt: 92, spdef: 82, speed: 39 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 166,
  learnset: [
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Water Gun' },
    { level: 1, move: 'Mud Bomb' },
    { level: 1, move: 'Bubble Beam' },
    { level: 1, move: 'Body Slam' },
    { level: 1, move: 'Scald' },
    { level: 32, move: 'Surf' },
    { level: 38, move: 'Earthquake' },
    { level: 45, move: 'Earth Power' },
    { level: 50, move: 'Ice Beam' },
  ]
},
Sandile: {
  types: ['Ground', 'Dark'],
  baseStats: { hp: 50, att: 72, def: 35, spatt: 35, spdef: 35, speed: 65 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 24',
  evolvesInto: 'Krokorok',
  baseExp : 58,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 3, move: 'Mud-Slap' },
    { level: 7, move: 'Bite' },
    { level: 14, move: 'Mud-Shot' },
    { level: 18, move: 'Knock Off' },
    { level: 22, move: 'Bulldoze' },
  ]
},
Krokorok: {
  types: ['Ground', 'Dark'],
  baseStats: { hp: 60, att: 82, def: 45, spatt: 45, spdef: 45, speed: 74 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 40',
  evolvesInto: 'Krookodile',
  baseExp : 123,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Mud-Shot' },
    { level: 1, move: 'Knock Off' },
    { level: 1, move: 'Bulldoze' },
    { level: 26, move: 'Rock Tomb' },
    { level: 32, move: 'Crunch' },
    { level: 36, move: 'Dig' },
  ]
},
Krookodile: {
  types: ['Ground', 'Dark'],
  baseStats: { hp: 95, att: 117, def: 80, spatt: 65, spdef: 70, speed: 92 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 229,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Mud-Shot' },
    { level: 1, move: 'Knock Off' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Rock Tomb' },
    { level: 1, move: 'Crunch' },
    { level: 1, move: 'Dig' },
    { level: 41, move: 'Outrage' },
    { level: 45, move: 'Earthquake' },
    { level: 48, move: 'Aerial Ace' },
    { level: 52, move: 'Stone Edge' }
  ]
},
Drilbur: {
  types: ['Ground'],
  baseStats: { hp: 60, att: 85, def: 40, spatt: 30, spdef: 45, speed: 68 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 31',
  evolvesInto: 'Excadrill',
  baseExp : 66,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 3, move: 'Mud-Slap' },
    { level: 7, move: 'Headbutt' },
    { level: 10, move: 'Pursuit' },
    { level: 14, move: 'Metal Claw' },
    { level: 21, move: 'Bulldoze' },
    { level: 28, move: 'Dig' }
  ]
},
Excadrill: {
  types: ['Ground', 'Steel'],
  baseStats: { hp: 110, att: 135, def: 60, spatt: 50, spdef: 65, speed: 88 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 178,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Pursuit' },
    { level: 1, move: 'Metal Claw' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Dig' },
    { level: 31, move: 'Earthquake' },
    { level: 36, move: 'Rock Slide' },
    { level: 42, move: 'Iron Head' },
  ]
},
Gligar: {
  types: ['Ground', 'Flying'],
  baseStats: { hp: 65, att: 75, def: 105, spatt: 35, spdef: 65, speed: 85 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Night with Razor Fang',
  evolvesInto: 'Gliscor',
  baseExp : 86,
  learnset: [
    { level: 1, move: 'Poison Sting' },
    { level: 4, move: 'Tackle' },
    { level: 7, move: 'Wing Attack' },
    { level: 10, move: 'Knock Off' },
    { level: 13, move: 'Quick Attack' },
    { level: 16, move: 'Mud-Slap' },
    { level: 24, move: 'Bulldoze' },
  ]
},
Gliscor: {
  types: ['Ground', 'Flying'],
  baseStats: { hp: 75, att: 95, def: 125, spatt: 45, spdef: 75, speed: 95 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 179,
  learnset: [
    { level: 1, move: 'Poison Sting' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Wing Attack' },
    { level: 1, move: 'Knock Off' },
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Bulldoze' },
    { level: 31, move: 'X-Scissor' },
    { level: 35, move: 'Earthquake' },
    { level: 40, move: 'Aerial Ace' }
  ]
},
Toedscool: {
  types: ['Ground', 'Grass'],
  baseStats: { hp: 40, att: 40, def: 35, spatt: 50, spdef: 100, speed: 70 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Toedscruel',
  baseExp : 67,
  learnset: [
    { level: 1, move: 'Mud-Slap' },
    { level: 4, move: 'Absorb' },
    { level: 8, move: 'Tackle' },
    { level: 12, move: 'Bulldoze' },
    { level: 16, move: 'Mega Drain' },
    { level: 20, move: 'Razor Leaf' },
    { level: 25, move: 'Mud Shot' },

  ]
},
Toedscruel: {
  types: ['Ground', 'Grass'],
  baseStats: { hp: 80, att: 70, def: 65, spatt: 80, spdef: 120, speed: 100 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 148,
  learnset: [
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Absorb' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Mega Drain' },
    { level: 1, move: 'Razor Leaf' },
    { level: 1, move: 'Mud Shot' },
    { level: 31, move: 'Earth Power' },
    { level: 36, move: 'Energy Ball' },
    { level: 42, move: 'Earthquake' },
    { level: 48, move: 'Leaf Storm' }
  ]
},

Ralts: {
  types: ['Psychic', 'Fairy'],
  baseStats: { hp: 28, att: 25, def: 25, spatt: 45, spdef: 35, speed: 40 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 20',
  evolvesInto: 'Kirlia',
  baseExp : 40,
  learnset: [

    { level: 1, move: 'Disarming Voice' },
    { level: 6, move: 'Confusion' },
    { level: 17, move: 'Draining Kiss' }
  ]
},

Kirlia: {
  types: ['Psychic', 'Fairy'],
  baseStats: { hp: 38, att: 35, def: 35, spatt: 65, spdef: 55, speed: 50 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Gardevoir',
  baseExp : 97,
  learnset: [
    { level: 1, move: 'Disarming Voice' },
    { level: 1, move: 'Confusion' },
    { level: 1, move: 'Draining Kiss' },
    { level: 22, move: 'Psybeam' },
    { level: 25, move: 'Dazzling Gleam' },
    { level: 27, move: 'Psychic' }
  ]
},

Gardevoir: {
  types: ['Psychic', 'Fairy'],
  baseStats: { hp: 68, att: 65, def: 65, spatt: 125, spdef: 115, speed: 80 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 259,
  learnset: [
    { level: 1, move: 'Disarming Voice' },
    { level: 1, move: 'Confusion' },
    { level: 1, move: 'Draining Kiss' },
    { level: 1, move: 'Psybeam' },
    { level: 1, move: 'Dazzling Gleam' },
    { level: 1, move: 'Psychic' },
    { level: 40, move: 'Moonblast' },
    { level: 44, move: 'Shadow Ball' },
    { level: 50, move: 'Aura Sphere' },
  ]
},

Gallade: {
  types: ['Psychic', 'Fighting'],
  baseStats: { hp: 68, att: 125, def: 65, spatt: 65, spdef: 115, speed: 80 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 259,
  learnset: [
    { level: 1, move: 'Disarming Voice' },
    { level: 1, move: 'Confusion' },
    { level: 1, move: 'Draining Kiss' },
    { level: 1, move: 'Psybeam' },
    { level: 1, move: 'Dazzling Gleam' },
    { level: 1, move: 'Psychic' },
    { level: 1, move: 'Slash' },
    { level: 33, move: 'Psycho Cut' },
    { level: 35, move: 'Night Slash' },
    { level: 40, move: 'Close Combat' },
    { level: 44, move: 'Leaf Blade' },
  ]
},

Meditite: {
  types: ['Fighting', 'Psychic'],
  baseStats: { hp: 30, att: 40, def: 55, spatt: 40, spdef: 55, speed: 60 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Medicham',
  baseExp : 56,
  learnset: [
    { level: 1, move: 'Confusion' },
    { level: 5, move: 'Rock Smash' },
    { level: 7, move: 'Scratch' },
    { level: 15, move: 'Psybeam' },
    { level: 21, move: 'Brick Break' },
    { level: 28, move: 'Psychic' },
  ]
},

Medicham: {
  types: ['Fighting', 'Psychic'],
  baseStats: { hp: 60, att: 60, def: 75, spatt: 60, spdef: 75, speed: 80 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 144,
  learnset: [
    { level: 1, move: 'Confusion' },
    { level: 1, move: 'Rock Smash' },
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Psybeam' },
    { level: 1, move: 'Brick Break' },
    { level: 1, move: 'Psychic' },
    { level: 31, move: 'Zen Headbutt' },
    { level: 38, move: 'Hi Jump Kick' },
    { level: 44, move: 'Close Combat' }
  ]
},

Beldum: {
  types: ['Steel', 'Psychic'],
  baseStats: { hp: 40, att: 55, def: 80, spatt: 35, spdef: 60, speed: 30 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 20',
  evolvesInto: 'Metang',
  baseExp : 60, 
  learnset: [
    { level: 1, move: 'Take Down' }
  ]
},

Metang: {
  types: ['Steel', 'Psychic'],
  baseStats: { hp: 60, att: 75, def: 100, spatt: 55, spdef: 80, speed: 50 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 45',
  evolvesInto: 'Metagross',
  baseExp : 147,
  learnset: [
    { level: 1, move: 'Take Down' },
    { level: 21, move: 'Metal Claw' },
    { level: 24, move: 'Confusion' },
    { level: 28, move: 'Pursuit' },
    { level: 36, move: 'Psychic' },
    { level: 44, move: 'Flash Cannon' }
  ]
},

Metagross: {
  types: ['Steel', 'Psychic'],
  baseStats: { hp: 80, att: 135, def: 130, spatt: 95, spdef: 90, speed: 70 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 270,
  learnset: [
    { level: 1, move: 'Take Down' },
    { level: 1, move: 'Metal Claw' },
    { level: 1, move: 'Confusion' },
    { level: 1, move: 'Pursuit' },
    { level: 1, move: 'Psychic' },
    { level: 1, move: 'Flash Cannon' },
    { level: 46, move: 'Meteor Mash' },
    { level: 52, move: 'Zen Headbutt' },
    { level: 60, move: 'Hyper Beam' }
  ]
},

Sigilyph: {
  types: ['Psychic', 'Flying'],
  baseStats: { hp: 72, att: 58, def: 80, spatt: 103, spdef: 80, speed: 97 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 172,
  learnset: [
    { level: 1, move: 'Confusion' },
    { level: 5, move: 'Gust' },
    { level: 10, move: 'Psybeam' },
    { level: 15, move: 'Air Cutter' },
    { level: 20, move: 'Psychic' },
    { level: 25, move: 'Air Slash' },
    { level: 30, move: 'Brave Bird' },
  ]
},

Girafarig: {
  types: ['Normal', 'Psychic'],
  baseStats: { hp: 70, att: 80, def: 65, spatt: 90, spdef: 65, speed: 85 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Farigiraf',
  baseExp : 159,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 10, move: 'Confusion' },
    { level: 15, move: 'Swift' },
    { level: 20, move: 'Psybeam' },
    { level: 25, move: 'Psychic' }
  ]
},

Farigiraf: {
  types: ['Normal', 'Psychic'],
  baseStats: { hp: 120, att: 90, def: 70, spatt: 110, spdef: 70, speed: 60 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 187,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Confusion' },
    { level: 1, move: 'Swift' },
    { level: 1, move: 'Psybeam' },
    { level: 1, move: 'Psychic' },
    { level: 35, move: 'Crunch' },
    { level: 40, move: 'Hyper Beam' }
  ]
},

Espeon: {
  types: ['Psychic'],
  baseStats: { hp: 65, att: 65, def: 60, spatt: 130, spdef: 95, speed: 110 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 184,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 15, move: 'Confusion' },
    { level: 20, move: 'Bite' },
    { level: 25, move: 'Psybeam' },
    { level: 30, move: 'Power Gem' },
    { level: 35, move: 'Psychic' },
    { level: 40, move: 'Shadow Ball' }
  ]
},

Rhyhorn: {
  types: ['Ground', 'Rock'],
  baseStats: { hp: 80, att: 85, def: 95, spatt: 30, spdef: 30, speed: 25 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Rhydon',
  baseExp : 69,
  learnset: [
    { level: 1, move: 'Take Down' },
    { level: 10, move: 'Mud-Slap' },
    { level: 20, move: 'Bulldoze' },
    { level: 28, move: 'Rock Tomb' }
  ]
},

Rhydon: {
  types: ['Ground', 'Rock'],
  baseStats: { hp: 105, att: 130, def: 120, spatt: 45, spdef: 45, speed: 40 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 45',
  evolvesInto: 'Rhyperior',
  baseExp : 170,
  learnset: [
    { level: 1, move: 'Take Down' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Rock Tomb' },
    { level: 31, move: 'Rock Slide' },
    { level: 35, move: 'Earthquake' },
    { level: 41, move: 'Stone Edge' },
  ]
},

Rhyperior: {
  types: ['Ground', 'Rock'],
  baseStats: { hp: 115, att: 140, def: 130, spatt: 55, spdef: 55, speed: 40 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 241,
  learnset: [
    { level: 1, move: 'Take Down' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Rock Tomb' },
    { level: 1, move: 'Rock Slide' },
    { level: 1, move: 'Earthquake' },
    { level: 1, move: 'Stone Edge' },
  ]
},

Roggenrola: {
  types: ['Rock'],
  baseStats: { hp: 55, att: 75, def: 85, spatt: 25, spdef: 25, speed: 15 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 25',
  evolvesInto: 'Boldore',
  baseExp : 56,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 8, move: 'Mud-Slap' },
    { level: 16, move: 'Smack Down' },
    { level: 24, move: 'Rock Tomb' },
  ]
},

Boldore: {
  types: ['Rock'],
  baseStats: { hp: 70, att: 105, def: 105, spatt: 50, spdef: 40, speed: 20 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 42',
  evolvesInto: 'Gigalith',
   baseExp : 137,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Smack Down' },
    { level: 1, move: 'Rock Tomb' },
    { level: 1, move: 'Rock Slide' },
    { level: 30, move: 'Bulldoze' },
    { level: 36, move: 'Stone Edge' }
  ]
},

Gigalith: {
  types: ['Rock'],
  baseStats: { hp: 85, att: 135, def: 130, spatt: 60, spdef: 80, speed: 25 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 232, 
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Smack Down' },
    { level: 1, move: 'Rock Tomb' },
    { level: 1, move: 'Rock Slide' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Stone Edge' },
    { level: 45, move: 'Earthquake' },

  ]
},

Rockruff: {
  types: ['Rock'],
  baseStats: { hp: 45, att: 65, def: 40, spatt: 30, spdef: 40, speed: 60 },
  expGroup: 'fast',
  evolves: true,
  evoMethod: 'Level 25',
  evolvesInto: 'Lycanroc',
  baseExp : 56,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 6, move: 'Mud-Slap' },
    { level: 12, move: 'Rock Throw' },
    { level: 18, move: 'Bite' },
    { level: 24, move: 'Rock Tomb' }
  ]
},

Lycanroc: {
  types: ['Rock'],
  baseStats: { hp: 75, att: 115, def: 65, spatt: 55, spdef: 65, speed: 112 },
  expGroup: 'fast',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 170,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Rock Tomb' },
    { level: 26, move: 'Accelerock' },
    { level: 30, move: 'Crunch' },
    { level: 34, move: 'Rock Slide' },
    { level: 38, move: 'Bulldoze' },
    { level: 42, move: 'Stone Edge' }
  ]
},

Geodude: {
  types: ['Rock', 'Ground'],
  baseStats: { hp: 40, att: 80, def: 100, spatt: 30, spdef: 30, speed: 20 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 25',
  evolvesInto: 'Graveler',
  baseExp : 60,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 4, move: 'Mud-Slap' },
    { level: 13, move: 'Rock Throw' },
    { level: 20, move: 'Bulldoze' }
  ]
},

Graveler: {
  types: ['Rock', 'Ground'],
  baseStats: { hp: 55, att: 95, def: 115, spatt: 45, spdef: 45, speed: 35 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 42',
  evolvesInto: 'Golem',
  baseExp : 137,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Bulldoze' },
    { level: 26, move: 'Rock Tomb' },
    { level: 32, move: 'Rock Slide' },
    { level: 38, move: 'Earthquake' }
  ]
},

Golem: {
  types: ['Rock', 'Ground'],
  baseStats: { hp: 80, att: 120, def: 130, spatt: 55, spdef: 65, speed: 45 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 223,
  learnset: [
        { level: 1, move: 'Tackle' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Rock Tomb' },
    { level: 1, move: 'Rock Slide' },
    { level: 1, move: 'Earthquake' },
    { level: 43, move: 'Stone Edge' }
  ]
},

Glaceon: {
  types: ['Ice'],
  baseStats: {hp: 65, att: 60, def: 110, spatt: 130, spdef: 95, speed: 65},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp: 184,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 15, move: 'Powder Snow' },
    { level: 20, move: 'Bite' },
    { level: 25, move: 'Aurora Beam' },
    { level: 30, move: 'Water Pulse' },
    { level: 33, move: 'Dig' },
    { level: 35, move: 'Ice Beam' },
    { level: 40, move: 'Blizzard' }
  ]
},

Lapras: {
  types: ['Water', 'Ice'],
  baseStats: { hp: 130, att: 85, def: 80, spatt: 85, spdef: 95, speed: 60 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 187,
  learnset: [
    { level: 1, move: 'Water Gun' },
    { level: 16, move: 'Ice Shard' },
    { level: 22, move: 'Body Slam' },
    { level: 26, move: 'Aurora Beam' },
    { level: 32, move: 'Bubble Beam' },
    { level: 38, move: 'Surf' },
    { level: 42, move: 'Ice Beam' },
    { level: 50, move: 'Hydro Pump' },
    { level: 52, move: 'Blizzard' }
  ]
},

Snorunt: {
  types: ['Ice'],
  baseStats: { hp: 50, att: 50, def: 50, spatt: 50, spdef: 50, speed: 50 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 24',
  evolvesInto: 'Glalie',
  baseExp : 60,
  learnset: [
    { level: 1, move: 'Powder Snow' },
    { level: 10, move: 'Bite' },
    { level: 15, move: 'Ice Shard' },
    { level: 25, move: 'Icy Wind' },
  ]
},

Glalie: {
  types: ['Ice'],
  baseStats: { hp: 80, att: 80, def: 80, spatt: 80, spdef: 80, speed: 80 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 168,
  learnset: [
    { level: 1, move: 'Powder Snow' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Ice Shard' },
    { level: 1, move: 'Icy Wind' },
    { level: 30, move: 'Crunch' },
    { level: 32, move: 'Ice  Fang' },
    { level: 38, move: 'Ice Beam' },
    { level: 42, move: 'Freeze-Dry' }
  ]
},

Froslass: {
  types: ['Ice', 'Ghost'],
  baseStats: {hp: 70, att: 80, def: 70, spatt: 80, spdef: 70, speed: 110},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp: 168,
  learnset: [
    { level: 1, move: 'Powder Snow' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Ice Shard' },
    { level: 1, move: 'Icy Wind' },
    { level: 21, move: 'Astonish' },
    { level: 27, move: 'Aurora Beam' },
    { level: 32, move: 'Hex' },
    { level: 38, move: 'Ice Beam' },
    { level: 43, move: 'Shadow Ball' },
    { level: 49, move: 'Blizzard' },
  ]
},

Swinub: {
  types: ['Ice', 'Ground'],
  baseStats: { hp: 50, att: 50, def: 40, spatt: 30, spdef: 30, speed: 50 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Piloswine',
  baseExp : 50,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 6, move: 'Powder Snow' },
    { level: 12, move: 'Mud-Slap' },
    { level: 20, move: 'Icy Wind' },
    { level: 28, move: 'Ice Fang' }
  ]
},

Piloswine: {
  types: ['Ice', 'Ground'],
  baseStats: { hp: 100, att: 100, def: 80, spatt: 60, spdef: 60, speed: 50 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 45',
  evolvesInto: 'Mamoswine',
  baseExp : 158,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Powder Snow' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Icy Wind' },
    { level: 1, move: 'Ice Fang' },
    { level: 31, move: 'Take Down' },
    { level: 33, move: 'Mud Bomb' },
    { level: 40, move: 'Earthquake' },
    { level: 43, move: 'Ice Beam' }
  ]
},

Mamoswine: {
  types: ['Ice', 'Ground'],
  baseStats: { hp: 110, att: 130, def: 80, spatt: 70, spdef: 60, speed: 80 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 265,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Powder Snow' },
    { level: 1, move: 'Mud-Slap' },
    { level: 1, move: 'Icy Wind' },
    { level: 1, move: 'Ice Fang' },
    { level: 1, move: 'Take Down' },
    { level: 1, move: 'Mud Bomb' },
    { level: 1, move: 'Earthquake' },
    { level: 1, move: 'Ice Beam' },
    { level: 46, move: 'Blizzard' },
    { level: 51, move: 'Stone Edge' }
  ]
},

  Caterpie: {
    types: ['Bug'],
    baseStats: { hp: 45, att: 30, def: 35, spatt: 20, spdef: 20, speed: 45 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 7',
    evolvesInto: 'Metapod',
    baseExp : 39,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 4, move: 'Struggle Bug' }
    ]
  },
  Metapod: {
    types: ['Bug'],
    baseStats: { hp: 50, att: 20, def: 55, spatt: 25, spdef: 25, speed: 30 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 10',
    evolvesInto: 'Butterfree',
    baseExp : 72,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Struggle Bug' }
    ]
  },
  Butterfree: {
    types: ['Bug', 'Flying'],
    baseStats: { hp: 60, att: 45, def: 50, spatt: 90, spdef: 80, speed: 70 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 198,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Struggle Bug' },
      { level: 11, move: 'Confusion' },
      { level: 12, move: 'Gust' },
      { level: 16, move: 'Psybeam' },
      { level: 20, move: 'Silver Wind' }
    ]
  },
  Heracross: {
    types: ['Bug', 'Fighting'],
    baseStats: { hp: 80, att: 125, def: 75, spatt: 40, spdef: 95, speed: 85 },
    expGroup: 'slow',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 200,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 10, move: 'Fury Cutter' },
      { level: 15, move: 'Rock Smash' },
      { level: 20, move: 'Brick Break' },
      { level: 30, move: 'Megahorn' },
      { level: 40, move: 'Close Combat' }
    ]
  },
  Scyther: {
    types: ['Bug', 'Flying'],
    baseStats: { hp: 70, att: 110, def: 80, spatt: 55, spdef: 80, speed: 105 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 32',
    evolvesInto: 'Scizor',
    baseExp : 100,
    learnset: [
      { level: 1, move: 'Quick Attack' },
      { level: 12, move: 'Wing Attack' },
      { level: 18, move: 'Fury Cutter' },
      { level: 24, move: 'Slash' },
      { level: 30, move: 'X-Scissor' }
    ]
  },
  Scizor: {
    types: ['Bug', 'Steel'],
    baseStats: { hp: 70, att: 130, def: 100, spatt: 55, spdef: 80, speed: 65 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 175, 
    learnset: [
      { level: 1, move: 'Quick Attack' },
      { level: 1, move: 'Wing Attack' },
      { level: 1, move: 'Fury Cutter' },
      { level: 1, move: 'Slash' },
      { level: 1, move: 'X-Scissor' },
      { level: 33, move: 'Bullet Punch' },
      { level: 35, move: 'Metal Claw' },
      { level: 39, move: 'Night Slash' },
      { level: 44, move: 'Flash Cannon' },
    ]
  },
  Yanma: {
    types: ['Bug', 'Flying'],
    baseStats: { hp: 65, att: 65, def: 45, spatt: 75, spdef: 45, speed: 95 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 25',
    evolvesInto: 'Yanmega',
    baseExp : 78,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 10, move: 'Quick Attack' },
      { level: 16, move: 'Wing Attack' },
      { level: 24, move: 'U-turn' }
    ]
  },
  Yanmega: {
    types: ['Bug', 'Flying'],
    baseStats: { hp: 86, att: 76, def: 86, spatt: 116, spdef: 56, speed: 95 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 180,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Quick Attack' },
      { level: 1, move: 'Wing Attack' },
      { level: 1, move: 'U-turn' },
      { level: 26, move: 'Ancient Power' },
      { level: 30, move: 'Air Slash' },
      { level: 40, move: 'Bug Buzz' },
    ]
  },
  Sewaddle: {
    types: ['Bug', 'Grass'],
    baseStats: { hp: 45, att: 53, def: 70, spatt: 40, spdef: 60, speed: 42 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 16',
    evolvesInto: 'Swadloon',
    baseExp : 62,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 8, move: 'Razor Leaf' },
      { level: 15, move: 'Fury Cutter' }
    ]
  },
  Swadloon: {
    types: ['Bug', 'Grass'],
    baseStats: { hp: 55, att: 63, def: 90, spatt: 50, spdef: 80, speed: 42 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 32',
    evolvesInto: 'Leavanny',
    baseExp : 133,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Razor Leaf' },
      { level: 1, move: 'Fury Cutter' }
    ]
  },
  Leavanny: {
    types: ['Bug', 'Grass'],
    baseStats: { hp: 75, att: 103, def: 80, spatt: 70, spdef: 80, speed: 92 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 225,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Razor Leaf' },
      { level: 1, move: 'Fury Cutter' },
      { level: 33, move: 'X-Scissor' },
      { level: 37, move: 'Energy Ball' },
      { level: 40, move: 'Leaf Blade' },
      { level: 43, move: 'Signal Beam' }
    ]
  },
  Venipede: {
    types: ['Bug', 'Poison'],
    baseStats: { hp: 30, att: 45, def: 59, spatt: 30, spdef: 39, speed: 57 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 19',
    evolvesInto: 'Whirlipede',
    baseExp : 52,
    learnset: [
      { level: 1, move: 'Poison Sting' },
      { level: 8, move: 'Venoshock' },
      { level: 15, move: 'Fury Cutter' }
    ]
  },
  Whirlipede: {
    types: ['Bug', 'Poison'],
    baseStats: { hp: 40, att: 55, def: 99, spatt: 40, spdef: 79, speed: 47 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 30',
    evolvesInto: 'Scolipede',
    baseExp : 126,
    learnset: [
      { level: 1, move: 'Poison Sting' },
      { level: 1, move: 'Venoshock' },
      { level: 1, move: 'Fury Cutter' },
      { level: 20, move: 'Poison Tail' },
      { level: 23, move: 'U-turn' },
      { level: 27, move: 'Sludge Bomb' },
    ]
  },
  Scolipede: {
    types: ['Bug', 'Poison'],
    baseStats: { hp: 60, att: 100, def: 89, spatt: 55, spdef: 69, speed: 112 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 218,
    learnset: [
      { level: 1, move: 'Poison Sting' },
      { level: 1, move: 'Venoshock' },
      { level: 1, move: 'Fury Cutter' },
      { level: 1, move: 'Poison Tail' },
      { level: 1, move: 'U-turn' },
      { level: 1, move: 'Sludge Bomb' },
      { level: 31, move: 'Megahorn' },
      { level: 35, move: 'Cross Poison' },
    ]
  },
  Dwebble: {
    types: ['Bug', 'Rock'],
    baseStats: { hp: 50, att: 65, def: 85, spatt: 35, spdef: 35, speed: 55 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 34',
    evolvesInto: 'Crustle',
     baseExp : 65,
    learnset: [
      { level: 1, move: 'Smack Down' },
      { level: 7, move: 'Tackle' },
      { level: 12, move: 'Fury Cutter' },
      { level: 20, move: 'Rock Throw' }
    ]
  },
  Crustle: {
    types: ['Bug', 'Rock'],
    baseStats: { hp: 70, att: 105, def: 125, spatt: 65, spdef: 75, speed: 45 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 166,
    learnset: [
      { level: 1, move: 'Smack Down' },
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Fury Cutter' },
      { level: 1, move: 'Rock Throw' },
      { level: 35, move: 'Rock Slide' },
      { level: 37, move: 'X-Scissor' },
      { level: 40, move: 'Stone Edge' }
    ]
  },
  Grubbin: {
    types: ['Bug'],
    baseStats: { hp: 47, att: 62, def: 45, spatt: 55, spdef: 45, speed: 46 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 20',
    evolvesInto: 'Charjabug',
    baseExp : 60,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 5, move: 'Dig' },
      { level: 10, move: 'Fury Cutter' }
    ]
  },
  Charjabug: {
    types: ['Bug', 'Electric'],
    baseStats: { hp: 57, att: 82, def: 95, spatt: 55, spdef: 75, speed: 36 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 30',
    evolvesInto: 'Vikavolt',
    baseExp : 140,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Dig' },
      { level: 1, move: 'Fury Cutter' },
      { level: 21, move: 'Spark' },
      { level: 25, move: 'Signal Beam' },
      { level: 29, move: 'X-Scissor' }
    ]
  },
  Vikavolt: {
    types: ['Bug', 'Electric'],
    baseStats: { hp: 77, att: 70, def: 90, spatt: 145, spdef: 75, speed: 43 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 225,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Dig' },
      { level: 1, move: 'Fury Cutter' },
      { level: 1, move: 'Spark' },
      { level: 1, move: 'Signal Beam' },
      { level: 1, move: 'X-Scissor' },
      { level: 31, move: 'Thunderbolt' },
      { level: 35, move: 'Bug Buzz' },
      { level: 40, move: 'Energy Ball' }
    ]
  },

  Horsea: {
    types: ['Water'],
    baseStats: { hp: 30, att: 40, def: 70, spatt: 70, spdef: 25, speed: 60 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 18',
    evolvesInto: 'Seadra',
    baseExp : 59,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 6, move: 'Water Gun' },
      { level: 12, move: 'Twister' },

    ]
  },
  Seadra: {
    types: ['Water'],
    baseStats: { hp: 55, att: 65, def: 95, spatt: 95, spdef: 45, speed: 85 },
    expGroup: 'medium',
    evolves: true,
    evoMethod: 'Level 40',
    evolvesInto: 'Kingdra',
    baseExp : 154,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Water Gun' },
      { level: 1, move: 'Twister' },
      { level: 19, move: 'Bubble Beam' },
      { level: 25, move: 'Dragon Breath' },
      { level: 32, move: 'Surf' },
      { level: 37, move: 'Hydro Pump' },
    ]
  },
  Kingdra: {
    types: ['Water', 'Dragon'],
    baseStats: { hp: 75, att: 95, def: 95, spatt: 95, spdef: 95, speed: 85 },
    expGroup: 'mediumslow',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 270,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Water Gun' },
      { level: 1, move: 'Twister' },
      { level: 1, move: 'Bubble Beam' },
      { level: 1, move: 'Dragon Breath' },
      { level: 1, move: 'Surf' },
      { level: 1, move: 'Hydro Pump' },
      { level: 41, move: 'Dragon Pulse' },
      { level: 47, move: 'Flash Cannon' },
      { level: 52, move: 'Ice Beam' }
    ]
  },
  Trapinch: {
    types: ['Ground'],
    baseStats: { hp: 45, att: 100, def: 45, spatt: 45, spdef: 45, speed: 10 },
    expGroup: 'slow',
    evolves: true,
    evoMethod: 'Level 15',
    evolvesInto: 'Vibrava',
    baseExp : 58,
    learnset: [
      { level: 1, move: 'Bite' },
      { level: 6, move: 'Mud-Slap' },
      { level: 12, move: 'Bite' },
    ]
  },
  Vibrava: {
    types: ['Ground', 'Dragon'],
    baseStats: { hp: 50, att: 70, def: 50, spatt: 50, spdef: 50, speed: 70 },
    expGroup: 'slow',
    evolves: true,
    evoMethod: 'Level 34',
    evolvesInto: 'Flygon',
    baseExp : 119,
    learnset: [
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Mud-Slap' },
      { level: 1, move: 'Bite' },
      { level: 17, move: 'Dragon Breath' },
      { level: 21, move: 'Earth Power' },
      { level: 28, move: 'Dig' },
      { level: 33, move: 'Dragon Claw' }
    ]
  },
  Flygon: {
    types: ['Ground', 'Dragon'],
    baseStats: { hp: 80, att: 100, def: 80, spatt: 80, spdef: 80, speed: 100 },
    expGroup: 'slow',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 234,
    learnset: [
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Mud-Slap' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Dragon Breath' },
      { level: 1, move: 'Earth Power' },
      { level: 1, move: 'Dig' },
      { level: 1, move: 'Dragon Claw' },
      { level: 35, move: 'Earthquake' },
      { level: 39, move: 'Crunch' },
      { level: 43, move: 'Steel Wing' },
      { level: 47, move: 'Signal Beam' },
    ]
  },
  Bagon: {
    types: ['Dragon'],
    baseStats: { hp: 45, att: 75, def: 60, spatt: 40, spdef: 30, speed: 50 },
    expGroup: 'slow',
    evolves: true,
    evoMethod: 'Level 30',
    evolvesInto: 'Shelgon',
    baseExp : 60,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 5, move: 'Ember' },
      { level: 10, move: 'Bite' },
      { level: 20, move: 'Dragon Breath' },
      { level: 25, move: 'Headbutt' }
    ]
  },
  Shelgon: {
    types: ['Dragon'],
    baseStats: { hp: 65, att: 95, def: 100, spatt: 60, spdef: 50, speed: 50 },
    expGroup: 'slow',
    evolves: true,
    evoMethod: 'Level 50',
    evolvesInto: 'Salamence',
    baseExp : 147,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Ember' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Dragon Breath' },
      { level: 1, move: 'Headbutt' },
      { level: 32, move: 'Bulldoze' },
      { level: 38, move: 'Zen Headbutt' },
      { level: 45, move: 'Dragon Claw' }
    ]
  },
  Salamence: {
    types: ['Dragon', 'Flying'],
    baseStats: { hp: 95, att: 135, def: 80, spatt: 110, spdef: 80, speed: 100 },
    expGroup: 'slow',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
     baseExp : 270,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Ember' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Dragon Breath' },
      { level: 1, move: 'Headbutt' },
      { level: 1, move: 'Bulldoze' },
      { level: 1, move: 'Zen Headbutt' },
      { level: 1, move: 'Dragon Claw' },
      { level: 51, move: 'Brave Bird' },
      { level: 57, move: 'Dragon Pulse' },
      { level: 60, move: 'Hurricane' }
    ]
  },
 
  Druddigon: {
    types: ['Dragon'],
    baseStats: { hp: 77, att: 120, def: 90, spatt: 60, spdef: 90, speed: 48 },
    expGroup: 'medium',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 170,
    learnset: [
      { level: 1, move: 'Dragon Tail' },
      { level: 15, move: 'Metal Claw' },
      { level: 30, move: 'Dragon Claw' },
      { level: 45, move: 'Iron Head' },
      { level: 50, move: 'Outrage' },
      { level: 55, move: 'Rock Slide' }
    ]
  },

  Deino: {
    types: ['Dark', 'Dragon'],
    baseStats: { hp: 52, att: 65, def: 50, spatt: 45, spdef: 50, speed: 38 },
    expGroup: 'slow',
    evolves: true,
    evoMethod: 'Level 30',
    evolvesInto: 'Zweilous',
    baseExp : 60,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 4, move: 'Twister' },
      { level: 9, move: 'Pursuit' },
      { level: 12, move: 'Bite' },
      { level: 17, move: 'Headbutt' }
    ]
  },
  Zweilous: {
    types: ['Dark', 'Dragon'],
    baseStats: { hp: 72, att: 85, def: 70, spatt: 65, spdef: 70, speed: 58 },
    expGroup: 'slow',
    evolves: true,
    evoMethod: 'Level 50',
    evolvesInto: 'Hydreigon',
    baseExp : 147,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Twister' },
      { level: 1, move: 'Pursuit' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Headbutt' },
      { level: 31, move: 'Dragon Breath' },
      { level: 36, move: 'Crunch' },
      { level: 43, move: 'Dragon Pulse' },
      { level: 49, move: 'Dark Pulse' }
    ]
  },

  Hydreigon: {
    types: ['Dark', 'Dragon'],
    baseStats: { hp: 92, att: 105, def: 90, spatt: 125, spdef: 90, speed: 98 },
    expGroup: 'slow',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 270,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Twister' },
      { level: 1, move: 'Pursuit' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Headbutt' },
      { level: 1, move: 'Dragon Breath' },
      { level: 1, move: 'Crunch' },
      { level: 1, move: 'Dragon Pulse' },
      { level: 1, move: 'Dark Pulse' },
      { level: 51, move: 'Tri Attack' },
      { level: 58, move: 'Surf' },
    ]
  },
  Noibat: {
    types: ['Flying', 'Dragon'],
    baseStats: { hp: 40, att: 30, def: 35, spatt: 45, spdef: 40, speed: 55 },
    expGroup: 'mediumfast',
    evolves: true,
    evoMethod: 'Level 37',
    evolvesInto: 'Noivern',
    baseExp : 49,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 5, move: 'Gust' },
      { level: 10, move: 'Twister' },
      { level: 15, move: 'Wing Attack' },
      { level: 20, move: 'Bite' },
      { level: 25, move: 'Dragon Breath' },
      { level: 30, move: 'Air Cutter' },
      { level: 35, move: 'Air Slash' },
    ]
  },
  Noivern: {
    types: ['Flying', 'Dragon'],
    baseStats: { hp: 85, att: 70, def: 80, spatt: 97, spdef: 80, speed: 123 },
    expGroup: 'mediumfast',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 187,
    learnset: [
      { level: 1, move: 'Tackle' },
      { level: 1, move: 'Gust' },
      { level: 1, move: 'Twister' },
      { level: 1, move: 'Wing Attack' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Dragon Breath' },
      { level: 1, move: 'Air Cutter' },
      { level: 1, move: 'Air Slash' },
      { level: 38, move: 'Boomburst' },
      { level: 42, move: 'Dragon Pulse' },
      { level: 46, move: 'Hurricane' }
    ]
  },

   Axew: {
    types: ['Dragon'],
    baseStats: { hp: 46, att: 87, def: 60, spatt: 30, spdef: 40, speed: 57 },
    expGroup: 'slow',
    evolves: true,
    evoMethod: 'Level 22',
    evolvesInto: 'Fraxure',
    baseExp : 64, 
    learnset: [
      { level: 1, move: 'Scratch' },
      { level: 4, move: 'Bite' },
      { level: 8, move: 'Twister' },
      { level: 12, move: 'Pursuit' },
      { level: 17, move: 'Dig' }
    ]
  },
  Fraxure: {
    types: ['Dragon'],
    baseStats: { hp: 66, att: 117, def: 70, spatt: 40, spdef: 50, speed: 67 },
    expGroup: 'slow',
    evolves: true,
    evoMethod: 'Level 38',
    evolvesInto: 'Haxorus',
    baseExp : 144,
    learnset: [
      { level: 1, move: 'Scratch' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Twister' },
      { level: 1, move: 'Pursuit' },
      { level: 1, move: 'Dig' },
      { level: 23, move: 'Dragon Breath' },
      { level: 29, move: 'Slash' },
      { level: 36, move: 'Dragon Claw' },
    ]
  },
  Haxorus: {
    types: ['Dragon'],
    baseStats: { hp: 76, att: 147, def: 90, spatt: 60, spdef: 70, speed: 97 },
    expGroup: 'slow',
    evolves: false,
    evoMethod: null,
    evolvesInto: null,
    baseExp : 243,
    learnset: [
      { level: 1, move: 'Scratch' },
      { level: 1, move: 'Bite' },
      { level: 1, move: 'Twister' },
      { level: 1, move: 'Pursuit' },
      { level: 1, move: 'Dig' },
      { level: 1, move: 'Dragon Breath' },
      { level: 1, move: 'Slash' },
      { level: 1, move: 'Dragon Claw' },
      { level: 39, move: 'Iron Head' },
      { level: 42, move: 'Outrage' },
      { level: 48, move: 'Giga Impact' }
    ]
  },
  Gible: {
  types: ['Dragon', 'Ground'],
  baseStats: {hp: 58, att: 70, def: 45, spatt: 40, spdef: 45, speed: 42},
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 24',
  evolvesInto: 'Gabite',
  baseExp: 60,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 3, move: 'Bite' },
    { level: 7, move: 'Twister' },
    { level: 15, move: 'Take Down' },
    { level: 19, move: 'Mud Shot' },
    { level: 25, move: 'Slash' }
  ]
},
Gabite: {
  types: ['Dragon', 'Ground'],
  baseStats: {hp: 68, att: 90, def: 65, spatt: 50, spdef: 55, speed: 82},
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 48',
  evolvesInto: 'Garchomp',
  baseExp: 144,
  learnset: [
    { level: 24, move: 'Dual Chop' },
    { level: 28, move: 'Dragon Claw' },
    { level: 33, move: 'Dig' },
    { level: 40, move: 'Dragon Rush' },
    { level: 45, move: 'Crunch' },
  ]
},
Garchomp: {
  types: ['Dragon', 'Ground'],
  baseStats: {hp: 108, att: 130, def: 95, spatt: 80, spdef: 85, speed: 102},
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp: 270,
  learnset: [
    { level: 1, move: 'Dragon Claw' },
    { level: 60, move: 'Earthquake' },
    { level: 65, move: 'Outrage' },
    { level: 70, move: 'Stone Edge' },
  ]
},

  Houndour: {
  types: ['Dark', 'Fire'],
  baseStats: { hp: 45, att: 60, def: 30, spatt: 80, spdef: 50, speed: 65 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 24',
  evolvesInto: 'Houndoom',
  baseExp : 66,
  learnset: [
    { level: 1, move: 'Ember' },
    { level: 5, move: 'Tackle' },
    { level: 10, move: 'Acid' },
    { level: 14, move: 'Bite' },
    { level: 21, move: 'Flamewheel' },

  ]
},

Houndoom: {
  types: ['Dark', 'Fire'],
  baseStats: { hp: 75, att: 90, def: 50, spatt: 110, spdef: 80, speed: 95 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 175,
  learnset: [
    { level: 1, move: 'Ember' },
    { level: 5, move: 'Tackle' },
    { level: 1, move: 'Acid' },
    { level: 1, move: 'Bite' },
    { level: 1, move: 'Flamewheel' },
    { level: 25, move: 'Crunch' },
    { level: 28, move: 'Fire Fang' },
    { level: 31, move: 'Flame Burst' },
    { level: 37, move: 'Dark Pulse' },
    { level: 42, move: 'Flamethrower' }
  ]
},

Murkrow: {
  types: ['Dark', 'Flying'],
  baseStats: { hp: 60, att: 85, def: 42, spatt: 85, spdef: 42, speed: 91 },
  expGroup: 'fast',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Honchkrow',
  baseExp : 81,
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 5, move: 'Astonish' },
    { level: 11, move: 'Pursuit' },
    { level: 17, move: 'Wing Attack' },
    { level: 25, move: 'Foul Play' },
    { level: 31, move: 'Assurance' },
  ]
},

Honchkrow: {
  types: ['Dark', 'Flying'],
  baseStats: { hp: 100, att: 125, def: 52, spatt: 105, spdef: 52, speed: 71 },
  expGroup: 'fast',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 177,
  learnset: [
    { level: 1, move: 'Peck' },
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Pursuit' },
    { level: 1, move: 'Wing Attack' },
    { level: 1, move: 'Foul Play' },
    { level: 1, move: 'Assurance' },
    { level: 36, move: 'Sucker Punch' },
    { level: 42, move: 'Night Slash' },
    { level: 46, move: 'Dark Pulse' },
    { level: 50, move: 'Brave Bird' },
  ]
},

Sneasel: {
  types: ['Dark', 'Ice'],
  baseStats: { hp: 55, att: 95, def: 55, spatt: 35, spdef: 75, speed: 115 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Weavile',
  baseExp : 86,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 5, move: 'Ice Shard' },
    { level: 14, move: 'Quick Attack' },
    { level: 20, move: 'Assurance' },
    { level: 24, move: 'Metal Claw' },
    { level: 31, move: 'Slash' },
    { level: 34, move: 'Ice Punch' },
  ]
},

Weavile: {
  types: ['Dark', 'Ice'],
  baseStats: { hp: 70, att: 120, def: 65, spatt: 45, spdef: 85, speed: 125 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 179,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 1, move: 'Ice Shard' },
    { level: 1, move: 'Quick Attack' },
    { level: 1, move: 'Assurance' },
    { level: 1, move: 'Metal Claw' },
    { level: 1, move: 'Slash' },
    { level: 1, move: 'Ice Punch' },
    { level: 36, move: 'Night Slash' },
    { level: 41, move: 'Dark Pulse' },
  ]
},

Larvitar: {
  types: ['Rock', 'Ground'],
  baseStats: {hp: 50, att: 64, def: 50, spatt: 45, spdef: 50, speed: 41},
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 24',
  evolvesInto: 'Pupitar',
  baseExp: 60,
  learnset: [
    { level: 1, move: 'Bite' },
    { level: 3, move: 'Tackle' },
    { level: 9, move: 'Mud-Slap' },
    { level: 12, move: 'Rock Throw' },
    { level: 15, move: 'Mud Shot' },
    { level: 18, move: 'Rock Tomb' },
  ]
},
Pupitar: {
  types: ['Rock', 'Ground'],
  baseStats: {hp: 70, att: 84, def: 70, spatt: 65, spdef: 70, speed: 51},
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 45',
  evolvesInto: 'Tyranitar',
  baseExp: 144,
  learnset: [
    { level: 30, move: 'Dark Pulse' },
    { level: 33, move: 'Rock Slide' },
    { level: 36, move: 'Crunch' },
    { level: 40, move: 'Earthquake' },
    { level: 45, move: 'Stone Edge' },
    
  ]
},
Tyranitar: {
  types: ['Rock', 'Dark'],
  baseStats: {hp: 100, att: 134, def: 110, spatt: 95, spdef: 100, speed: 61},
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp: 270,
  learnset: [
    { level: 1, move: 'Dark Pulse' },
    { level: 1, move: 'Stone Edge' },
    { level: 48, move: 'Earthquake' },
    { level: 50, move: 'Outrage' },
    { level: 55, move: 'Hyper Beam' }
  ]
},

Skorupi: {
  types: ['Poison', 'Bug'],
  baseStats: { hp: 40, att: 50, def: 90, spatt: 30, spdef: 55, speed: 65 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 35',
  evolvesInto: 'Drapion',
  baseExp : 66,
  learnset: [
    { level: 1, move: 'Poison Sting' },
    { level: 5, move: 'Tackle' },
    { level: 9, move: 'Knock Off' },
    { level: 13, move: 'Fury Cutter' },
    { level: 17, move: 'Poison Fang' },
    { level: 21, move: 'Venoshock' },
    { level: 27, move: 'Assurance' },
    { level: 31, move: 'Cross Poison' },
    { level: 34, move: 'Night Slash' },
  ]
},

Drapion: {
  types: ['Poison', 'Dark'],
  baseStats: { hp: 70, att: 90, def: 110, spatt: 60, spdef: 75, speed: 95 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 175,
  learnset: [
    { level: 1, move: 'Poison Sting' },
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Knock Off' },
    { level: 1, move: 'Fury Cutter' },
    { level: 1, move: 'Poison Fang' },
    { level: 1, move: 'Venoshock' },
    { level: 1, move: 'Assurance' },
    { level: 1, move: 'Cross Poison' },
    { level: 1, move: 'Night Slash' },
    { level: 39, move: 'Crunch' },

  ]
},

Absol: {
  types: ['Dark'],
  baseStats: { hp: 65, att: 130, def: 60, spatt: 75, spdef: 60, speed: 75 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 163,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 5, move: 'Quick Attack' },
    { level: 10, move: 'Pursuit' },
    { level: 17, move: 'Bite' },
    { level: 24, move: 'Night Slash' },
    { level: 27, move: 'Sucker Punch' },
    { level: 33, move: 'Psycho Cut' },
  ]
},

Umbreon: {
  types: ['Dark'],
  baseStats: { hp: 95, att: 65, def: 110, spatt: 60, spdef: 130, speed: 65 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 184,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 15, move: 'Pursuit' },
    { level: 20, move: 'Bite' },
    { level: 25, move: 'Assurance' },
    { level: 30, move: 'Shadow Ball' },
    { level: 35, move: 'Dark Pulse' },
    { level: 40, move: 'Night Slash' }
  ]
},

Ghastly: {
  types: ['Ghost', 'Poison'],
  baseStats: { hp: 30, att: 35, def: 30, spatt: 100, spdef: 35, speed: 80 },
  expGroup: 'medium-slow',
  evolves: true,
  evoMethod: 'Level 25',
  evolvesInto: 'Haunter',
  baseExp : 62,
  learnset: [
    { level: 1, move: 'Lick' },
    { level: 5, move: 'Pursuit' },
    { level: 18, move: 'Shadow Sneak' },
    { level: 23, move: 'Shadow Punch' },

  ]
},

Haunter: {
  types: ['Ghost', 'Poison'],
  baseStats: { hp: 45, att: 50, def: 45, spatt: 115, spdef: 55, speed: 95 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level  35',
  evolvesInto: 'Gengar',
  baseExp : 142,
  learnset: [
    { level: 1, move: 'Lick' },
    { level: 1, move: 'Pursuit' },
    { level: 1, move: 'Shadow Sneak' },
    { level: 1, move: 'Shadow Punch' },
    { level: 26, move: 'Sucker Punch' },
    { level: 30, move: 'Dark Pulse' },
    { level: 33, move: 'Shadow Ball' },
    
  ]
},

Gengar: {
  types: ['Ghost', 'Poison'],
  baseStats: { hp: 60, att: 65, def: 60, spatt: 130, spdef: 75, speed: 110 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 250,
  learnset: [
    { level: 1, move: 'Lick' },
    { level: 1, move: 'Pursuit' },
    { level: 1, move: 'Shadow Sneak' },
    { level: 1, move: 'Shadow Punch' },
    { level: 1, move: 'Sucker Punch' },
    { level: 1, move: 'Dark Pulse' },
    { level: 1, move: 'Shadow Ball' },
    { level: 36, move: 'Dazzling Gleam' },
    { level: 40, move: 'Sludge Bomb' },
    { level: 46, move: 'Psychic' },

  ]
},

Sableye: {
  types: ['Dark', 'Ghost'],
  baseStats: { hp: 50, att: 75, def: 75, spatt: 65, spdef: 65, speed: 50 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 133,
  learnset: [
    { level: 1, move: 'Scratch' },
    { level: 6, move: 'Astonish' },
    { level: 9, move: 'Shadow Sneak' },
    { level: 17, move: 'Knock Off' },
    { level: 26, move: 'Shadow Claw' },
    { level: 33, move: 'Zen Headbutt' },
    { level: 38, move: 'Power Gem' }
  ]
},

Litwick: {
  types: ['Ghost', 'Fire'],
  baseStats: { hp: 50, att: 30, def: 55, spatt: 65, spdef: 55, speed: 20 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 23',
  evolvesInto: 'Lampent',
  baseExp : 55,
  learnset: [
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Astonish' },
    { level: 8, move: 'Acid' },
    { level: 12, move: 'Flame Wheel' },
    { level: 16, move: 'Shadow Sneak' },
  ]
},

Lampent: {
  types: ['Ghost', 'Fire'],
  baseStats: { hp: 60, att: 40, def: 60, spatt: 95, spdef: 60, speed: 55 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 40',
  evolvesInto: 'Chandelure',
  baseExp : 130,
  learnset: [
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Acid' },
    { level: 1, move: 'Flame Wheel' },
    { level: 1, move: 'Shadow Sneak' },
    { level: 24, move: 'Flame Burst' },
    { level: 28, move: 'Hex' },
    { level: 33, move: 'Flamethrower' },
    { level: 39, move: 'Shadow Ball' },
  ]
},

Chandelure: {
  types: ['Ghost', 'Fire'],
  baseStats: { hp: 60, att: 55, def: 90, spatt: 145, spdef: 90, speed: 80 },
  expGroup: 'medium-slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 234,
  learnset: [
    { level: 1, move: 'Ember' },
    { level: 1, move: 'Astonish' },
    { level: 1, move: 'Acid' },
    { level: 1, move: 'Flame Wheel' },
    { level: 1, move: 'Shadow Sneak' },
    { level: 1, move: 'Flame Burst' },
    { level: 1, move: 'Hex' },
    { level: 1, move: 'Flamethrower' },
    { level: 1, move: 'Shadow Ball' },
    { level: 45, move: 'Fire Blast' },
  ]
},

Onix: {
  types: ['Rock', 'Ground'],
  baseStats: { hp: 35, att: 45, def: 160, spatt: 30, spdef: 45, speed: 70 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 30',
  evolvesInto: 'Steelix',
  baseExp : 77,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 5, move: 'Rock Throw' },
    { level: 10, move: 'Take Down' },
    { level: 15, move: 'Rock Tomb' },
    { level: 25, move: 'Bulldoze' },
  ]
},

Steelix: {
  types: ['Steel', 'Ground'],
  baseStats: { hp: 75, att: 85, def: 200, spatt: 55, spdef: 65, speed: 30 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 179,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Take Down' },
    { level: 1, move: 'Rock Tomb' },
    { level: 1, move: 'Bulldoze' },
    { level: 26, move: 'Iron Tail' },
    { level: 35, move: 'Rock Slide' },
    { level: 43, move: 'Stone Edge' },
    { level: 50, move: 'Earthquake' },
    { level: 56, move: 'Flash Cannon' },
    
  ]
},

Aron: {
  types: ['Steel', 'Rock'],
  baseStats: { hp: 50, att: 70, def: 100, spatt: 40, spdef: 40, speed: 30 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 25',
  evolvesInto: 'Lairon',
  baseExp : 66,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 4, move: 'Headbutt' },
    { level: 8, move: 'Metal Claw' },
    { level: 12, move: 'Rock Throw' },
    { level: 20, move: 'Iron Head' },
    { level: 24, move: 'Rock Tomb' }
  ]
},

Lairon: {
  types: ['Steel', 'Rock'],
  baseStats: { hp: 60, att: 90, def: 140, spatt: 50, spdef: 50, speed: 40 },
  expGroup: 'slow',
  evolves: true,
  evoMethod: 'Level 39',
  evolvesInto: 'Aggron',
  baseExp : 151,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Metal Claw' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Iron Head' },
    { level: 1, move: 'Rock Tomb' },
    { level: 26, move: 'Rock Slide' },
    { level: 31, move: 'Bulldoze' },
    { level: 38, move: 'Flash Cannon' },
  ]
},

Aggron: {
  types: ['Steel', 'Rock'],
  baseStats: { hp: 70, att: 110, def: 180, spatt: 60, spdef: 60, speed: 50 },
  expGroup: 'slow',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 239,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Headbutt' },
    { level: 1, move: 'Metal Claw' },
    { level: 1, move: 'Rock Throw' },
    { level: 1, move: 'Iron Head' },
    { level: 1, move: 'Rock Tomb' },
    { level: 1, move: 'Rock Slide' },
    { level: 1, move: 'Bulldoze' },
    { level: 1, move: 'Flash Cannon' },
    { level: 40, move: 'Iron Tail' },
    { level: 45, move: 'Double-Edge' },
    { level: 48, move: 'Stone Edge' },
    { level: 51, move: 'Earthquake' },
    { level: 55, move: 'Metal Burst' },
  ]
},

Mawile: {
  types: ['Steel', 'Fairy'],
  baseStats: { hp: 50, att: 85, def: 85, spatt: 55, spdef: 55, speed: 50 },
  expGroup: 'fast',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 133,
  learnset: [
    { level: 1, move: 'Astonish' },
    { level: 5, move: 'Fairy Wind' },
    { level: 8, move: 'Bite' },
    { level: 17, move: 'Iron Head' },
    { level: 24, move: 'Play Rough' },
    { level: 35, move: 'Crunch' },
    { level: 45, move: 'Moonblast' },
  ]
},

Flabébé: {
  types: ['Fairy'],
  baseStats: { hp: 44, att: 38, def: 39, spatt: 61, spdef: 79, speed: 42 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 22',
  evolvesInto: 'Floette',
  baseExp : 61,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 4, move: 'Fairy Wind' },
    { level: 8, move: 'Razor Leaf' },
    { level: 13, move: 'Razor Leaf' },
    { level: 17, move: 'Draining Kiss' },
  ]
},

Floette: {
  types: ['Fairy'],
  baseStats: { hp: 54, att: 45, def: 47, spatt: 75, spdef: 98, speed: 52 },
  expGroup: 'medium',
  evolves: true,
  evoMethod: 'Level 42',
  evolvesInto: 'Florges',
   baseExp : 130,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Fairy Wind' },
    { level: 1, move: 'Razor Leaf' },
    { level: 1, move: 'Razor Leaf' },
    { level: 1, move: 'Draining Kiss' },
    { level: 23, move: 'Mega Drain' },
    { level: 31, move: 'Dazzling Gleam' },
    { level: 36, move: 'Moonblast' },
    { level: 41, move: 'Energy Ball' }
  ]
},

Florges: {
  types: ['Fairy'],
  baseStats: { hp: 78, att: 65, def: 68, spatt: 112, spdef: 154, speed: 75 },
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp : 248,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 1, move: 'Fairy Wind' },
    { level: 1, move: 'Razor Leaf' },
    { level: 1, move: 'Razor Leaf' },
    { level: 1, move: 'Draining Kiss' },
    { level: 1, move: 'Mega Drain' },
    { level: 1, move: 'Dazzling Gleam' },
    { level: 1, move: 'Moonblast' },
    { level: 1, move: 'Energy Ball' },
    { level: 43, move: 'Shadow Ball' },
    { level: 48, move: 'Psychic' },
  ]
},

Sylveon: {
  types: ['Fairy'],
  baseStats: {hp: 95, att: 65, def: 65, spatt: 110, spdef: 130, speed: 60},
  expGroup: 'medium',
  evolves: false,
  evoMethod: null,
  evolvesInto: null,
  baseExp: 184,
  learnset: [
    { level: 1, move: 'Tackle' },
    { level: 15, move: 'Fairy Wind' },
    { level: 20, move: 'Bite' },
    { level: 25, move: 'Draining Kiss' },
    { level: 30, move: 'Play Rough' },
    { level: 33, move: 'Shadow Ball' },
    { level: 35, move: 'Moonblast' }
  ]
},


};
