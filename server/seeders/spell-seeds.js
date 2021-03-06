const { Spell } = require('../models');

const spellData = [
    {
    "source_id": "17f69323f35l0hykrc6d1g3vajyc0n",
    "name": "Briars Of Punishment",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69323f35l0hykrc6d1g3vajyc0n.png",
    "description": "An aberrant sorcery discovered by exiled criminals. Theirs are the sorceries most reviled by the academy. Wounds the caster with thorns of sin, sending a trail of bloodthorns running over the ground to impale enemies from below. This sorcery can be cast repeatedly. The guilty, their eyes gouged by thorns, lived in eternal darkness. There, they discovered the blood star.",
    "type": "Sorceries",
    "cost": 13,
    "slots": 1,
    "effects": "Wounds caster to unleash trail of bloodthrorns",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 0
    },
    {
    "name": "Faith",
    "amount": 21
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f697cbb96l0hykre66weonnfh81y",
    "name": "Ancient Death Rancor",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f697cbb96l0hykre66weonnfh81y.png",
    "description": "Sorcery of the servants of Death.",
    "type": "Sorceries",
    "cost": 24,
    "slots": 1,
    "effects": "Summons horde of vengeful spirits that chase down foes",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 34
    },
    {
    "name": "Faith",
    "amount": 24
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f694c4b51l0hykrh5ekspavmcdh",
    "name": "Briars Of Sin",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f694c4b51l0hykrh5ekspavmcdh.png",
    "description": "An aberrant sorcery, discovered along with red glintstone by those exiled to the north for their crimes. Summons large thorns from a whorl of blood shed by one's own hand in penance for sins. This sorcery can be cast repeatedly. The Academy reviles this sorcery, which draws its power from faith.",
    "type": "Sorceries",
    "cost": 9,
    "slots": 1,
    "effects": "Summons thorns from a whorl of your own blood.",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 0
    },
    {
    "name": "Faith",
    "amount": 24
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f697763ffl0hykrjb9eqis858fj9",
    "name": "Cannon Of Haima",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f697763ffl0hykrjb9eqis858fj9.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. Lobs an explosive magic projectile that flies in an arc. Charging enhances potency. Drawn from the conspectus of Haima, the adjudicator of the academy, this sorcery employs might as a means to quell conflict.",
    "type": "Sorceries",
    "cost": 45,
    "slots": 1,
    "effects": "Lobs an explosive magic projectile in an arc",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 25
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69548207l0hykrjxtjpw45plt0o",
    "name": "Ambush Shard",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69548207l0hykrjxtjpw45plt0o.png",
    "description": "One of the night sorceries of Sellia, Town of Sorcery. Launches a projectile from a distance removed from the caster, so as to strike the enemy from behind. This sorcery can be cast repeatedly. The Sellian sorcerers were assassins, and it is said that they often hunted their fellows.",
    "type": "Sorceries",
    "cost": 16,
    "slots": 1,
    "effects": "Strikes from behind with projectile fired from distance",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 23
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69526092l0hykrkfqubdcrri5ri",
    "name": "Carian Phalanx",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69526092l0hykrkfqubdcrri5ri.png",
    "description": "One of the sorceries of the Carian royal family.",
    "type": "Sorceries",
    "cost": 26,
    "slots": 1,
    "effects": "Forms a defensive arch of numerous magic glintblades",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 34
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69501669l0hykrly1hkzqhsjkgf",
    "name": "Adula's Moonblade",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69501669l0hykrly1hkzqhsjkgf.png",
    "description": "Sorcery of Adula, the Glintstone Dragon. Conjures a cold magic greatsword, then delivers a sweeping blow that launches a blade-like projectile of frost. This sorcery can be cast repeatedly. Adula, a devourer of sorcerers, was bested by Ranni and subsequently swore a knightly oath to her Dark Moon.",
    "type": "Sorceries",
    "cost": 26,
    "slots": 1,
    "effects": "Sweeping slash followed by cold blade projectile",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 32
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f698158cbl0hykro1lrfmqwblslj",
    "name": "Carian Greatsword",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f698158cbl0hykro1lrfmqwblslj.png",
    "description": "One of the sorceries of the Carian royal family. Conjures a magic greatsword and then delivers a sweeping blow. This sorcery can be cast repeatedly. Armed with this spell, sorcerers gain the strength of knights, their loyalty sworn to the moon.",
    "type": "Sorceries",
    "cost": 16,
    "slots": 1,
    "effects": "Performs sweeping slash using magical greatsword",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 24
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f68f67eeal0hyksqja69pmxoh3yh",
    "name": "Carian Piercer",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f68f67eeal0hyksqja69pmxoh3yh.png",
    "description": "One of the sorceries of the Carian royal family.",
    "type": "Sorceries",
    "cost": 23,
    "slots": 1,
    "effects": "Impales foes with magical greatsword",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 27
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f691dc847l0hyksqn4eqkjcj7jls",
    "name": "Carian Retaliation",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f691dc847l0hyksqn4eqkjcj7jls.png",
    "description": "One of the sorceries of the Carian royal family.",
    "type": "Sorceries",
    "cost": 8,
    "slots": 1,
    "effects": "Dispels enemy spells and retaliates with glintblades",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 17
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69526839l0hykt29wlkzjaekmfp",
    "name": "Carian Slicer",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69526839l0hykt29wlkzjaekmfp.png",
    "description": "One of the sorceries of the Carian royal family.",
    "type": "Sorceries",
    "cost": 4,
    "slots": 1,
    "effects": "Performs swift sweeping slash using magical sword",
    "requires": [
    {
    "name": "Int",
    "amount": 14
    }
    ]
    },
    {
    "source_id": "17f697a3cebl0hykt5z1wd5xboo99x",
    "name": "Crystal Barrage",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f697a3cebl0hykt5z1wd5xboo99x.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria.",
    "type": "Sorceries",
    "cost": 14,
    "slots": 1,
    "effects": "Fires a volley of glintstone crystal shards",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 23
    }
    ]
    },
    {
    "source_id": "17f6935c00al0hykt61d5dex7ibki",
    "name": "Collapsing Stars",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6935c00al0hykt61d5dex7ibki.png",
    "description": "One of the glintstone sorceries that manipulates gravitational forces.",
    "type": "Sorceries",
    "cost": 18,
    "slots": 1,
    "effects": "Pulls foes toward caster with gravity projectile volley",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 36
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69383db4l0hykt8reipbquz8e6t",
    "name": "Comet Azur",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69383db4l0hykt8reipbquz8e6t.png",
    "description": "Legendary sorcery devised by Azur, primeval sorcerer. Fires a tremendous comet in a torrent akin to the distant starry expanse, the place said to be the origin of glintstone. Hold to continue releasing the sorcery's power. When Azur glimpsed into the primeval current, he saw darkness. He was left both bewitched and fearful of the abyss.",
    "type": "Sorceries",
    "cost": 40,
    "slots": 3,
    "effects": "Fires a tremendous comet within a starry torrent",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 60
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69246033l0hykt9k2ifr73lab5s",
    "name": "Crystal Burst",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69246033l0hykt9k2ifr73lab5s.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. Fires a burst of glintstone crystal shards. This sorcery can be cast repeatedly and while in motion. Charging increases potency. A sorcery of the Crystal Cadre, a group of sorcerers who pursued the wisdom of stone - the secrets locked in the faint cogitation of the Crystalians.",
    "type": "Sorceries",
    "cost": 14,
    "slots": 1,
    "effects": "Fires a burst of glintstone crystal shards",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 18
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69173b9bl0hyktcuppfyv71lx3",
    "name": "Comet",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69173b9bl0hyktcuppfyv71lx3.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. Fires a great magical comet. This sorcery can be cast repeatedly and while in motion. Charging enhances potency. The greatest of the Karolos Conspectus's sorceries, that only a very few sorcerers have ever mastered.",
    "type": "Sorceries",
    "cost": 38,
    "slots": 1,
    "effects": "Fires a great magic comet",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 52
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f68f97095l0hykuc91iv4akp5w4i",
    "name": "Crystal Torrent",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f68f97095l0hykuc91iv4akp5w4i.png",
    "description": "Sorcery of the mysterious Crystalians.",
    "type": "Sorceries",
    "cost": 24,
    "slots": 1,
    "effects": "Creates crystal mass that fires stream of crystal shards",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 47
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69346f84l0hykudkkqg6v1lwpk",
    "name": "Crystal Release",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69346f84l0hykudkkqg6v1lwpk.png",
    "description": "Sorcery of the mysterious Crystalians. Creates a mass of crystal, then shatters it to scour a wide area with a violent rain of crystal shards. This sorcery is used by high-ranking adepts among the Crystalians. Some also call this sorcery \"the Crystal Sun.\"",
    "type": "Sorceries",
    "cost": 38,
    "slots": 1,
    "effects": "Scours area with violent rain of crystal shards",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 41
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69402fafl0hykuks706v0mkdjbd",
    "name": "Fia's Mist",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69402fafl0hykuks706v0mkdjbd.png",
    "description": "Sorcery of Fia, the Deathbed Companion. Creates a deathly mist before the caster, which inflicts Death blight upon those who enter. This sorcery can be cast while in motion. Charging enhances range of the mist. This sorcery was developed to oppose the Roundtable Hold, and is effective only against the Tarnished.",
    "type": "Sorceries",
    "cost": 25,
    "slots": 1,
    "effects": "Release a mist of death before caster",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 23
    },
    {
    "name": "Faith",
    "amount": 18
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f696b6eael0hykuqvnuxlujdx0r9",
    "name": "Eternal Darkness",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f696b6eael0hykuqvnuxlujdx0r9.png",
    "description": "Forbidden sorcery of Sellia, Town of Sorcery. ",
    "type": "Sorceries",
    "cost": 25,
    "slots": 1,
    "effects": "Creates a dark space that draws in spells",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 35
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f698816aal0hykuwweto12afmr3",
    "name": "Frozen Armament",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f698816aal0hykuwweto12afmr3.png",
    "description": "Sorcery said to have been used by the old snow witch. Enchants armament held in the right hand with frost. This sorcery can be cast while in motion. The snowy crone taught the young Ranni to fear the dark moon as she imparted her cold sorcery.",
    "type": "Sorceries",
    "cost": 20,
    "slots": 1,
    "effects": "Enchants right-hand armament with frost",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 15
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69206fd7l0hykuyci822nhe618p",
    "name": "Founding Rain Of Stars",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69206fd7l0hykuyci822nhe618p.png",
    "description": "The eldest primeval sorcery, said to have been discovered by an",
    "type": "Sorceries",
    "cost": 46,
    "slots": 2,
    "effects": "Releases a downpour of star rain for a while",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 52
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6989bf92l0hykv0ugfsrr1nuyy6",
    "name": "Explosive Ghostflame",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6989bf92l0hykv0ugfsrr1nuyy6.png",
    "description": "Sorcery of the servants of Death.",
    "type": "Sorceries",
    "cost": 36,
    "slots": 1,
    "effects": "Causes ghostflame explosion that burns wide area",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 42
    },
    {
    "name": "Faith",
    "amount": 30
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f698eaeabl0hykv0y1tsef3d740n",
    "name": "Freezing Mist",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f698eaeabl0hykv0y1tsef3d740n.png",
    "description": "Sorcery said to have been used by the old snow witch.",
    "type": "Sorceries",
    "cost": 20,
    "slots": 1,
    "effects": "Releases cold mist before caster",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 21
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6970b6del0hykw6jbvxlnultl",
    "name": "Gelmir's Fury",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6970b6del0hykw6jbvxlnultl.png",
    "description": "One of the sorceries developed from the magma of Mt. Gelmir.",
    "type": "Sorceries",
    "cost": 27,
    "slots": 1,
    "effects": "Covers area with surge of magma from the earth",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 28
    },
    {
    "name": "Faith",
    "amount": 15
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f697a11c6l0hykw8gs7a4bj2bzi",
    "name": "Gavel Of Haima",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f697a11c6l0hykw8gs7a4bj2bzi.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. Creates a magical greathammer and slams it down. Allows one follow-up attack. Drawn from the scholarly conspectus of Haima, the adjudicator of the academy, this sorcery employs might as a means to quell conflict.",
    "type": "Sorceries",
    "cost": 37,
    "slots": 1,
    "effects": "Attacks using a magic greathammer",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 25
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6923b831l0hykweqyar0a2aerzn",
    "name": "Glintstone Arc",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6923b831l0hykweqyar0a2aerzn.png",
    "description": "Fires a horizontal arc of magic that spreads outward. This sorcery can be cast repeteadly and while in motion.",
    "type": "Sorceries",
    "cost": 10,
    "slots": 1,
    "effects": "Fires a horizontally-widening magic arc",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 13
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6933356el0hykwkb5c4f5eue05g",
    "name": "Glintstone Cometshard",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6933356el0hykwkb5c4f5eue05g.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. Fires a magical comet with a trailing tail. This sorcery can be cast repeatedly and while in motion. Charging enhances potency. A sorcery of the Karolos Conspectus, the most venerable of the academy.",
    "type": "Sorceries",
    "cost": 25,
    "slots": 1,
    "effects": "Fires a magic comet with a trailing tail",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 36
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f692eb5c4l0hykwkentckpz3y24a",
    "name": "Glintstone Pebble",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f692eb5c4l0hykwkentckpz3y24a.png",
    "description": "The most basic glintstone sorcery of the Academy of Raya Lucaria.",
    "type": "Sorceries",
    "cost": 7,
    "slots": 1,
    "effects": "Fires magic projectiles from glintstone",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 10
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6944ddfel0hykwkrvbsv9aa4yv",
    "name": "Glintstone Stars",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6944ddfel0hykwkrvbsv9aa4yv.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria.",
    "type": "Sorceries",
    "cost": 14,
    "slots": 1,
    "effects": "Fires three shooting stars that pursue foes",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 12
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6964e156l0hykwlsm0jw2254jkf",
    "name": "Glintstone Icecrag",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6964e156l0hykwlsm0jw2254jkf.png",
    "description": "Sorcery said to have been used by the old snow witch.",
    "type": "Sorceries",
    "cost": 12,
    "slots": 1,
    "effects": "Fires mass of cold magic from glintstone",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 15
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f694aa956l0hykwnt8t2s7k2ohg8",
    "name": "Glintblade Phalanx",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f694aa956l0hykwnt8t2s7k2ohg8.png",
    "description": "One of the sorceries of the Carian royal family.",
    "type": "Sorceries",
    "cost": 20,
    "slots": 1,
    "effects": "Forms a defensive arch of magic glintblades",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 22
    }
    ]
    },
    {
    "source_id": "17f68fa1c72l0hykxlbrlhvbrbbyqn",
    "name": "Gravity Well",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f68fa1c72l0hykxlbrlhvbrbbyqn.png",
    "description": "One of the glintstone sorceries that manipulates gravitational forces. Fires a projectile of condensed gravitational force. Those struck by it will be pulled toward the caster. Charging enhances potency. A gravitational technique studied by the young Radahn. His master was an Alabaster Lord with skin of stone.",
    "type": "Sorceries",
    "cost": 12,
    "slots": 1,
    "effects": "Pulls foes toward caster with gravity projectile",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 17
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f696ff8b3l0hyky03xbsyxdc6ybe",
    "name": "Great Glintstone Shard",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f696ff8b3l0hyky03xbsyxdc6ybe.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. The glintstone serves as a conduit, launching large magical projectiles at foes. This sorcery can be cast repeatedly and while in motion. Those unworthy of the stone crown typically end their brief journey into sorcery here.",
    "type": "Sorceries",
    "cost": 12,
    "slots": 1,
    "effects": "Fires larger magic projectiles from glintstone",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 16
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6916d3a1l0hyky82ck5l071k7zt",
    "name": "Lucidity",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6916d3a1l0hyky82ck5l071k7zt.png",
    "description": "One of the sorceries of the Carian royal family.",
    "type": "Sorceries",
    "cost": 10,
    "slots": 1,
    "effects": "Alleviates buildup of sleep and madness",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 17
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69580940l0hyky9z5ebz67i2kvd",
    "name": "Greatblade Phalanx",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69580940l0hyky9z5ebz67i2kvd.png",
    "description": "One of the sorceries of the Carian royal family. Creates a defensive arch of larger magic glintblades overhead, which automatically attack nearby foes. Used by the enchanted troll knights. They were the comrades of the young Rennala, bound by oath.",
    "type": "Sorceries",
    "cost": 43,
    "slots": 1,
    "effects": "Forms a defensive arch of larger magic glintblades",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 29
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f695ccb66l0hykyaen5y0w0khkll",
    "name": "Great Oracular Bubble",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f695ccb66l0hykyaen5y0w0khkll.png",
    "description": "Sorcery of the claymen who served as priests in the ancient",
    "type": "Sorceries",
    "cost": 16,
    "slots": 1,
    "effects": "Launches a large magic bubble",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 25
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 18
    }
    ]
    },
    {
    "source_id": "17f6971b61dl0hykyaiiyblbxaeim",
    "name": "Oracle Bubble",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6971b61dl0hykyaiiyblbxaeim.png",
    "description": "Sorcery of the claymen who served as priests in the ancient dynasty.",
    "type": "Sorceries",
    "cost": 12,
    "slots": 1,
    "effects": "Launches several bubbles of magic.",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 10
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6921c90fl0hykycr9xzxlra3r57",
    "name": "Loretta's Greatbow",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6921c90fl0hykycr9xzxlra3r57.png",
    "description": "Sorcery used by Royal Knight Loretta. Creates a magic greatbow and fires a great arrow. Charging enhances potency. Hold to keep the great arrow nocked. It is said that the bow was Loretta's favored weapon.",
    "type": "Sorceries",
    "cost": 32,
    "slots": 1,
    "effects": "Fires great arrow from a magic greatbow",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 26
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f696d8893l0hykyj6qhbawvh09t",
    "name": "Loretta's Mastery",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f696d8893l0hykyj6qhbawvh09t.png",
    "description": "Sorcery used by Loretta, Knight of the Haligtree. Creates a magic greatbow and fires four great arrows simultaneously. Charging enhances potency. Hold to keep the great arrows nocked. Developed by Loretta after her long, bloody journey to seek out a place where the Albinaurics could live in peace. ",
    "type": "Sorceries",
    "cost": 50,
    "slots": 1,
    "effects": "Fires four great arrow from a magic greatbow at once",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 46
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69330670l0hykywaqrpmwdbzpyj",
    "name": "Magic Downpour",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69330670l0hykywaqrpmwdbzpyj.png",
    "description": "One of the sorceries of the Carian royal family.",
    "type": "Sorceries",
    "cost": 25,
    "slots": 1,
    "effects": "Summon a magic mass that sprays projectiles over area",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 15
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69818087l0hykz26ox2vtdp84yq",
    "name": "Magic Glintblade",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69818087l0hykz26ox2vtdp84yq.png",
    "description": "An old sorcery of the Carian Royal Family.",
    "type": "Sorceries",
    "cost": 12,
    "slots": 1,
    "effects": "Creates sigil that forms a projectile glintblade after delay",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 14
    }
    ]
    },
    {
    "source_id": "17f6985da4cl0hykzwl2ly1lk18kxg",
    "name": "Magma Shot",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6985da4cl0hykzwl2ly1lk18kxg.png",
    "description": "One of the sorceries developed from the magma of Mt. Gelmir.",
    "type": "Sorceries",
    "cost": 24,
    "slots": 1,
    "effects": "Fire lump of magma that explodes on contact",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 19
    },
    {
    "name": "Faith",
    "amount": 10
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6979d7f4l0hyl01q26suhho4xsd",
    "name": "Meteorite",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6979d7f4l0hyl01q26suhho4xsd.png",
    "description": "A glintstone sorcery that draws on gravitational force, used by a great white king with stone skin. Calls small meteorites down from the sky. The meteor shower continues for as long as the sorcery is in effect. It is said that, in the Eternal City, now lost in ruin underground, meteorites held the same import as stars.",
    "type": "Sorceries",
    "cost": 30,
    "slots": 1,
    "effects": "Calls small meteors down from the sky.",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 30
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69763b5dl0hyl03j39aq843i4li",
    "name": "Night Comet",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69763b5dl0hyl03j39aq843i4li.png",
    "description": "One of the night sorceries of Sellia, Town of Sorcery.",
    "type": "Sorceries",
    "cost": 32,
    "slots": 1,
    "effects": "Fires semi-invisible magic comet",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 38
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f68fe64del0hyl068olsfxrrts7",
    "name": "Meteorite Of Astel",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f68fe64del0hyl068olsfxrrts7.png",
    "description": "One of the glintstone sorceries that manipulates gravitational forces. Summons a void that emits a hail of meteorites. Hold to continue the effect. A manifestation of the power with which Astel leveled the Eternal City.",
    "type": "Sorceries",
    "cost": 60,
    "slots": 2,
    "effects": "Calls a hail of small meteorites from the void.",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 55
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69717eddl0hyl0exs9l0a0sdw6s",
    "name": "Night Shard",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69717eddl0hyl0exs9l0a0sdw6s.png",
    "description": "One of the night sorceries of Sellia, Town of Sorcery. ",
    "type": "Sorceries",
    "cost": 7,
    "slots": 1,
    "effects": "Swiftly fires a semi-invisible",
    "requires": null
    },
    {
    "source_id": "17f690350b7l0hyl0i9t31pb2ahyzj",
    "name": "Night Maiden's Mist",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f690350b7l0hyl0i9t31pb2ahyzj.png",
    "description": "One of the night sorceries of Sellia, Town of Sorcery.",
    "type": "Sorceries",
    "cost": 20,
    "slots": 1,
    "effects": "Releases life-sapping silver mist before caster",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 14
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69062ddbl0hyl0j0sh5cueid15m",
    "name": "Rancorcall",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69062ddbl0hyl0j0sh5cueid15m.png",
    "description": "Sorcery of the servants of Death.",
    "type": "Sorceries",
    "cost": 14,
    "slots": 1,
    "effects": "Summons vengeful spirits that chase down foes",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 16
    },
    {
    "name": "Faith",
    "amount": 14
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f698db556l0hyl0jjihm0vl3xdwh",
    "name": "Oracle Bubbles",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f698db556l0hyl0jjihm0vl3xdwh.png",
    "description": "Sorcery of the claymen who served as priests in the ancient",
    "type": "Sorceries",
    "cost": 12,
    "slots": 1,
    "effects": "Launches several small magic bubbles.",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 19
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 15
    }
    ]
    },
    {
    "source_id": "17f696ded8bl0hyl1chm38nbkimwj9",
    "name": "Rennala's Full Moon",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f696ded8bl0hyl1chm38nbkimwj9.png",
    "description": "Sorcery associated with the Carian queen. Uses the caster as a vessel to incarnate a full moon, then sends it floating toward foes. The full moon dispels all sorcery that touches it, and temporarily reduces magic damage negation for those it strikes. Queen Rennala encountered this enchanting moon when she was young, and later, it would bewitch the academy.",
    "type": "Sorceries",
    "cost": 55,
    "slots": 2,
    "effects": "Incarnate a full moon and launch it at foes",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 70
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6933fcffl0hyl1h3yit07w1s9ta",
    "name": "Ranni's Dark Moon",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6933fcffl0hyl1h3yit07w1s9ta.png",
    "description": "Legendary sorcery associated with the Carian queen. ",
    "type": "Sorceries",
    "cost": 62,
    "slots": 2,
    "effects": "Incarnate a cold, dark moon and launch it at foes.",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 68
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6960508el0hyl1nhkrxurxy1oqd",
    "name": "Rock Blaster",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6960508el0hyl1nhkrxurxy1oqd.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria.",
    "type": "Sorceries",
    "cost": 30,
    "slots": 1,
    "effects": "Thurst staff into ground to emit a massive shockwave",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 21
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f695b8eb1l0hyl1wwn8bq4hod2yh",
    "name": "Roiling Magma",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f695b8eb1l0hyl1wwn8bq4hod2yh.png",
    "description": "One of the sorceries developed from the magma of Mt. Gelmir. Fires a lump of condensed magma that explodes a short delay after hitting the target. Charging enhances potency and further delays the explosion. After discovering the ancient hexes of Gelmir, Rykard, son of Queen Rennala, brought them back into practical use as new forms of sorcery.",
    "type": "Sorceries",
    "cost": 32,
    "slots": 1,
    "effects": "Fires lump of magma that explodes after delay",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 21
    },
    {
    "name": "Faith",
    "amount": 12
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6956b602l0hyl1xzxdrjbidynzq",
    "name": "Rykard's Rancor",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6956b602l0hyl1xzxdrjbidynzq.png",
    "description": "The terrible power of Rykard, Lord of Blasphemy. ",
    "type": "Sorceries",
    "cost": 35,
    "slots": 2,
    "effects": "Releases searing spirits that repeatedly explode after delay",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 40
    },
    {
    "name": "Faith",
    "amount": 18
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f697513fdl0hyl1yp7y0bcj3si6i",
    "name": "Rock Sling",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f697513fdl0hyl1yp7y0bcj3si6i.png",
    "description": "One of the glintstone sorceries that manipulates gravitational forces. ",
    "type": "Sorceries",
    "cost": 18,
    "slots": 1,
    "effects": "Summons rocks from the earth and sends its flying",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 18
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f694eec4fl0hyl27r5xh06ckw1so",
    "name": "Scholar's Armament",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f694eec4fl0hyl27r5xh06ckw1so.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria.",
    "type": "Sorceries",
    "cost": 25,
    "slots": 1,
    "effects": "Enchants right-hand armament with magic damage",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 12
    }
    ]
    },
    {
    "source_id": "17f69379d7el0hyl27xfguetq35bni",
    "name": "Scholar's Shield",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69379d7el0hyl27xfguetq35bni.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria.",
    "type": "Sorceries",
    "cost": 30,
    "slots": 1,
    "effects": "Enhances left-handed shield damage negation",
    "requires": [
    {
    "name": "Int",
    "amount": 12
    }
    ]
    },
    {
    "source_id": "17f69233f99l0hyl32ixqa8cf501y",
    "name": "Shard Spiral",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69233f99l0hyl32ixqa8cf501y.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria.",
    "type": "Sorceries",
    "cost": 16,
    "slots": 1,
    "effects": "Fire twin spiraling projectiles",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 27
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69240fcdl0hyl38ber0x0u7bv3d",
    "name": "Shatter Earth",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69240fcdl0hyl38ber0x0u7bv3d.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. Imbues the ferrule of the caster's staff with magic, then thrusts it into the ground to create a magical shockwave. Allows one follow-up attack. A Stonedigger sorcery used by the glintstone miners of the crystal tunnel. At the academy, use of this sorcery was a stigma that marked out failed scholars.",
    "type": "Sorceries",
    "cost": 12,
    "slots": 1,
    "effects": "Thrust staff into ground to emit a shockwave",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 15
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6902b989l0hyl3f6iorcnaeypi",
    "name": "Starlight",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6902b989l0hyl3f6iorcnaeypi.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria.",
    "type": "Sorceries",
    "cost": 12,
    "slots": 1,
    "effects": "Creates star light to illuminate surroundings",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 15
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f693402e5l0hyl3gzhtqb01yjf3k",
    "name": "Star Shower",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f693402e5l0hyl3gzhtqb01yjf3k.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. Fires six magic shooting stars that pursue the target. This sorcery can be cast while in motion. Charging enhances potency. The most difficult to master of the Olivinus Conspectus sorceries.",
    "type": "Sorceries",
    "cost": 36,
    "slots": 1,
    "effects": "Fires six shooting stars that pursue foes",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 24
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f6974051al0hyl3kcvhpy2j6smf",
    "name": "Stars Of Ruin",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f6974051al0hyl3kcvhpy2j6smf.png",
    "description": "Legendary sorcery devised by Lusat, primeval sorcerers. ",
    "type": "Sorceries",
    "cost": 50,
    "slots": 1,
    "effects": "Fire twelve dark shooting stars that pursue foes",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 43
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f696ec037l0hyl3ngvf00twpbcg",
    "name": "Shattering Crystal",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f696ec037l0hyl3ngvf00twpbcg.png",
    "description": "Sorcery of the mysterious Crystalians. Creates a mass of crystal, then shatters it in a forward burst. Charging enhances potency. The Crystalians are inorganic beings, yet they live. They cleave close to the ideals of the primeval current, and as such, they are revered guests of the sorcerers.",
    "type": "Sorceries",
    "cost": 32,
    "slots": 1,
    "effects": "Creates crystal mass that shatters in forward burst",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 38
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69183747l0hyl3o1tnkgev3q3qs",
    "name": "Swift Glintstone Shard",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69183747l0hyl3o1tnkgev3q3qs.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. The glintstone serves as a conduit, launching swift magical projectiles at foes. This sorcery can be used without delay after performing another action. Those unworthy of the stone crown typically end their brief journey into sorcery here.",
    "type": "Sorceries",
    "cost": 5,
    "slots": 1,
    "effects": "Swiftly fires magic projectiles from glintstone",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 12
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f694f65f4l0hyl3qlnj0oepap3pg",
    "name": "Terra Magicus",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f694f65f4l0hyl3qlnj0oepap3pg.png",
    "description": "One of the glintstone sorceries of the Academy of Raya Lucaria. Draws an academy sigil upon the ground, raising the magic strength of those within. Once, the sigil would be cast from the highest belfry of the academy, covering the entire institution's grounds. This spell allows such vivid experience of spell???casting success, it turns many a fledgling into a true sorcerer in a flash of newfound understanding.",
    "type": "Sorceries",
    "cost": 20,
    "slots": 1,
    "effects": "Raises the magic strength of those within the sigil",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 20
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69321284l0hyl4lnndsfcv2un9k",
    "name": "Unseen Blade",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69321284l0hyl4lnndsfcv2un9k.png",
    "description": "One of the night sorceries of Sellia, Town of Sorcery. Enchants armament held in right hand, making it completely invisible. This sorcery can be cast while in motion. Used by Sellian assassins to present themselves as unarmed sorcerers.",
    "type": "Sorceries",
    "cost": 18,
    "slots": 1,
    "effects": "Makes right-hand armament completely invisible",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 12
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f698ec32bl0hyl4ouriysbeaoqvp",
    "name": "Unseen Form",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f698ec32bl0hyl4ouriysbeaoqvp.png",
    "description": "One of the night sorceries of Sellia, Town of Sorcery. Makes the caster semi-invisible. While on horseback, effect extends to cover the mount. This sorcery can be cast while in motion. The Sellian assassins considered every option that aided their dirty work.",
    "type": "Sorceries",
    "cost": 20,
    "slots": 1,
    "effects": "Makes the caster semi-invisible",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 16
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f69332a7cl0hyl4q0ahq1rhl510s",
    "name": "Thops's Barrier",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f69332a7cl0hyl4q0ahq1rhl510s.png",
    "description": "The lifelong pursuit of Thops the Bluntstone.",
    "type": "Sorceries",
    "cost": 7,
    "slots": 1,
    "effects": "Erect a magic forcefield to deflect spells",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 18
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f693b4e3cl0hyl4rjaph3b2vbtk5",
    "name": "Zamor Ice Storm",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f693b4e3cl0hyl4rjaph3b2vbtk5.png",
    "description": "Ice sorcery of the Town of Zamor.",
    "type": "Sorceries",
    "cost": 22,
    "slots": 1,
    "effects": "Thrust staff into ground to create freezing tornado.",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 36
    },
    {
    "name": "Faith",
    "amount": 0
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
    {
    "source_id": "17f692e03b8l0hyl4rlgts2b9n06wj",
    "name": "Tibia's Summons",
    "image": "https://eldenring.fanapis.com/images/sorceries/17f692e03b8l0hyl4rlgts2b9n06wj.png",
    "description": "Sorcery of the servants of Death. Summons a group of Those Lost in Death. Three skeletons will appear some distance from the caster and attack foes before disappearing. The dead have long been left to wander; what they need is leadership.",
    "type": "Sorceries",
    "cost": 20,
    "slots": 1,
    "effects": "Summons Those Who Live in Death",
    "requires": [
    {
    "name": "Intelligence",
    "amount": 28
    },
    {
    "name": "Faith",
    "amount": 20
    },
    {
    "name": "Arcane",
    "amount": 0
    }
    ]
    },
        {
        "source_id": "17f696c7ce7l0hynrwmh6d0r0rwk2",
        "name": "Ancient Dragons' Lightning Strike",
        "image": "https://eldenring.fanapis.com/images/incantations/17f696c7ce7l0hynrwmh6d0r0rwk2.png",
        "description": "A secret incantation of the capital's ancient dragon cult.",
        "type": "Incantations",
        "cost": 27,
        "slots": 1,
        "effects": "Summons red lightning that spreads from impact",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 26
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f695ad891l0hynrxcposdnx7gy9h",
        "name": "Aspects Of The Crucible: Horns",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695ad891l0hynrxcposdnx7gy9h.png",
        "description": "One of the ancient Erdtree incantations.",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "creates shoulder horn to gore foes from a low stance.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 27
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f690dc5ael0hynrxf3lq1w3xcjpr",
        "name": "Agheel's Flame",
        "image": "https://eldenring.fanapis.com/images/incantations/17f690dc5ael0hynrxf3lq1w3xcjpr.png",
        "description": "Superior incantation of Dragon Communion. Channels the power of the flying dragon Agheel.",
        "type": "Incantations",
        "cost": 36,
        "slots": 1,
        "effects": "Spews flame breath of Agheel from above",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 23
        },
        {
        "name": "Arcane",
        "amount": 15
        }
        ]
        },
        {
        "source_id": "17f693bd4f8l0hynrzaixs0xzre1q",
        "name": "Aspects Of The Crucible: Tail",
        "image": "https://eldenring.fanapis.com/images/incantations/17f693bd4f8l0hynrzaixs0xzre1q.png",
        "description": "One of the ancient Erdtree incantations.",
        "type": "Incantations",
        "cost": 32,
        "slots": 1,
        "effects": "Creates supple tail to sweep area before caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 27
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f698483c9l0hyns2v5nt60a29sd",
        "name": "Barrier Of Gold",
        "image": "https://eldenring.fanapis.com/images/incantations/17f698483c9l0hyns2v5nt60a29sd.png",
        "description": "One of the incantations of Erdtree Worship. ",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "Greatly increases magic damage negation for self & allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 24
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6911d8c2l0hyns4qd7p9pfucu26",
        "name": "Ancient Dragons' Lightning Spear",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6911d8c2l0hyns4qd7p9pfucu26.png",
        "description": "A secret incantation of the capital's ancient dragon cult.",
        "type": "Incantations",
        "cost": 32,
        "slots": 1,
        "effects": "Stabs with red lightning spear from above",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 0
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f690418f4l0hyns68vsg9zhbc6w",
        "name": "Beast Claw",
        "image": "https://eldenring.fanapis.com/images/incantations/17f690418f4l0hyns68vsg9zhbc6w.png",
        "description": "Incantation taught by Gurranq, the Beast Clergyman.",
        "type": "Incantation",
        "cost": 10,
        "slots": 1,
        "effects": "Creates claws that tear through the land.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 8
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f693c22edl0hynsdj8fz0ddz4vni",
        "name": "Aspect Of The Crucible: Breath",
        "image": "https://eldenring.fanapis.com/images/incantations/17f693c22edl0hynsdj8fz0ddz4vni.png",
        "description": "One of the ancient Erdtree incantations.",
        "type": "Incantations",
        "cost": 28,
        "slots": 1,
        "effects": "Creates throat pouch to spew fire while walking",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 27
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69691e79l0hyntbidbq75lrrjb7",
        "name": "Bestial Constitution",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69691e79l0hyntbidbq75lrrjb7.png",
        "description": "Incantation taught by Gurranq, the Beast Clergyman.",
        "type": "Incantations",
        "cost": 10,
        "slots": 1,
        "effects": "Alleviates blood loss and frost buildup",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 9
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f68f98778l0hynteevtb4hr6x90d",
        "name": "Bestial Sling",
        "image": "https://eldenring.fanapis.com/images/incantations/17f68f98778l0hynteevtb4hr6x90d.png",
        "description": "Incantation taught by Gurranq, the Beast Clergyman. Swiftly flings a number of sharp rock shards. This incantation can be cast without delay after performing another action. It is said that in the time before the Erdtree, stones were the first weapons of the beasts who had gained intelligence.",
        "type": "Incantations",
        "cost": 7,
        "slots": 1,
        "effects": "Swiftly flings numerous sharp rock shards",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 10
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69160ac9l0hynthagycs7dr7gq7",
        "name": "Black Blade",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69160ac9l0hynthagycs7dr7gq7.png",
        "description": "Power gleaned from the remembrance of Maliketh.",
        "type": "Incantations",
        "cost": 26,
        "slots": 2,
        "effects": "Black blade spinning slash that emits wave of light.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 46
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69860befl0hyntmsoo0kq76fsvd",
        "name": "Black Flame Ritual",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69860befl0hyntmsoo0kq76fsvd.png",
        "description": "Superior black flame incantation of the Godskin Apostles. ",
        "type": "Incantations",
        "cost": 24,
        "slots": 1,
        "effects": "Summons circle of black flame pillars around caster.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 42
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6982c810l0hyntn0pvua05sv3w",
        "name": "Black Flame",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6982c810l0hyntn0pvua05sv3w.png",
        "description": "A black flame incantation of the Godskin Apostles.",
        "type": "Incantations",
        "cost": 15,
        "slots": 1,
        "effects": "Throws a ball of raging black fire",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 20
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f692ee649l0hyntu1vu7cu8wxah",
        "name": "Black Flame Blade",
        "image": "https://eldenring.fanapis.com/images/incantations/17f692ee649l0hyntu1vu7cu8wxah.png",
        "description": "A black flame incantation of the Godskin Apostles. ",
        "type": "Incantations",
        "cost": 15,
        "slots": 1,
        "effects": "Enchants right-hand armament with black flame",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 17
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6955e547l0hyntv29oe95w4kpxj",
        "name": "Bestial Vitality",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6955e547l0hyntv29oe95w4kpxj.png",
        "description": "Incantation taught by Gurranq, the Beast Clergyman.",
        "type": "Incantations",
        "cost": 18,
        "slots": 1,
        "effects": "Heals HP over a period of time",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 12
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f694f1c32l0hynu33qh2e3un2g1",
        "name": "Black Flame's Protection",
        "image": "https://eldenring.fanapis.com/images/incantations/17f694f1c32l0hynu33qh2e3un2g1.png",
        "description": "A black flame incantation of the Godskin Apostles.",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "Increases phyiscal damage negation",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 30
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69801f77l0hynudtg36sba9k5lr",
        "name": "Blessing's Boon",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69801f77l0hynudtg36sba9k5lr.png",
        "description": "One of the ancient Erdtree incantations.",
        "type": "Incantations",
        "cost": 23,
        "slots": 1,
        "effects": "Grants blessing to self and nearby allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 24
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f690ba6e1l0hynuyuvb7sle1w35",
        "name": "Blessing Of The Erdtree",
        "image": "https://eldenring.fanapis.com/images/incantations/17f690ba6e1l0hynuyuvb7sle1w35.png",
        "description": "One of the ancient Erdtree incantations",
        "type": "Incantations",
        "cost": 60,
        "slots": 2,
        "effects": "Grants greater blessing to self and nearby allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 38
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f697aaf25l0hynv3bmpsnp4lpnd",
        "name": "Bloodflame Blade",
        "image": "https://eldenring.fanapis.com/images/incantations/17f697aaf25l0hynv3bmpsnp4lpnd.png",
        "description": "A Blood Oath incantation, granted by the Lord of Blood. Engulfs armament held in the right hand with bloodflame. This incantation can be cast while in motion. After dealing damage, bloodflame continues to build up onset of blood loss for a very short time.",
        "type": "Incantations",
        "cost": 20,
        "slots": 1,
        "effects": "Enchants right-hand armament with bloodflame",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 12
        },
        {
        "name": "Arcane",
        "amount": 10
        }
        ]
        },
        {
        "source_id": "17f6973c98fl0hynv5gnjf09yvy8y",
        "name": "Bloodflame Talons",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6973c98fl0hynv5gnjf09yvy8y.png",
        "description": "A Blood Oath incantation, granted by the Lord of Blood.",
        "type": "Incantations",
        "cost": 18,
        "slots": 1,
        "effects": "Creates bloodflame lacerations that then explode",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 13
        },
        {
        "name": "Arcane",
        "amount": 15
        }
        ]
        },
        {
        "source_id": "17f68fd9537l0hynv7q0d210i53bym9",
        "name": "Bloodboon",
        "image": "https://eldenring.fanapis.com/images/incantations/17f68fd9537l0hynv7q0d210i53bym9.png",
        "description": "Sacred incantation of Mohg, Lord of Blood.",
        "type": "Incantations",
        "cost": 15,
        "slots": 1,
        "effects": "Scatters bloodflame before caster to set area aflame.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 14
        },
        {
        "name": "Arcane",
        "amount": 17
        }
        ]
        },
        {
        "source_id": "17f695324del0hynv9a91iu7h3knff",
        "name": "Borealis's Mist",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695324del0hynv9a91iu7h3knff.png",
        "description": "Superior incantation of Dragon Communion.",
        "type": "Incantations",
        "cost": 48,
        "slots": 1,
        "effects": "Spews icy breath of Borealis from above",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 23
        },
        {
        "name": "Arcane",
        "amount": 15
        }
        ]
        },
        {
        "source_id": "17f694bc935l0hynvcwx4oahz00k48",
        "name": "Cure Poison",
        "image": "https://eldenring.fanapis.com/images/incantations/17f694bc935l0hynvcwx4oahz00k48.png",
        "description": "Incantation of the Two Fingers' faithful.",
        "type": "Incantation",
        "cost": 7,
        "slots": 1,
        "effects": "Cures Poison ailment and reduces poison build-up.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 10
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f696d3fddl0hynve32uy42tb6pip",
        "name": "Burn O Flame!",
        "image": "https://eldenring.fanapis.com/images/incantations/17f696d3fddl0hynve32uy42tb6pip.png",
        "description": "One of the incantations that draws directly from the power of the",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "Raises a series of flame pillars around caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 27
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f690b63a9l0hynvpzqrouoa3uwo",
        "name": "Darkness",
        "image": "https://eldenring.fanapis.com/images/incantations/17f690b63a9l0hynvpzqrouoa3uwo.png",
        "description": "Incantation of the Two Fingers' servants, who once served as the ",
        "type": "Incantations",
        "cost": 26,
        "slots": 1,
        "effects": "Creates area of darkness that conceals caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 18
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6907b527l0hynw9qj9bgu0iu0x",
        "name": "Death Lightning",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6907b527l0hynw9qj9bgu0iu0x.png",
        "description": "Incantation that channels the power of the ancient dragon",
        "type": "Incantation",
        "cost": 46,
        "slots": 2,
        "effects": "Strikes surroundings with storm of death lightning",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 47
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69836ab4l0hynwcix7z37ngspv",
        "name": "Discus Of Light",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69836ab4l0hynwcix7z37ngspv.png",
        "description": "One of the incantations of the Golden Order fundamentalists. ",
        "type": "Incantations",
        "cost": 11,
        "slots": 1,
        "effects": "Fires ring of light before the caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 13
        },
        {
        "name": "Faith",
        "amount": 13
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f695c512fl0hynwmn3k7xy8866e",
        "name": "Divine Fortification",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695c512fl0hynwmn3k7xy8866e.png",
        "description": "Incantation of the Two Fingers' faithful.",
        "type": "Incantations",
        "cost": 20,
        "slots": 1,
        "effects": "Increases holy damage negation.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 10
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69850e86l0hynws5vlzzny9q7y",
        "name": "Dragonbolt Blessing",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69850e86l0hynws5vlzzny9q7y.png",
        "description": "Superior incantation of the capital's ancient dragon cult. Summons lightning to bolster the caster's body. Attacks become easier to deflect and resistance to all ailments is increased. However, lightning damage negation will be reduced. Only those loved by dragons can survive the ordeal of cladding their bodies in lightning.",
        "type": "Incantations",
        "cost": 20,
        "slots": 1,
        "effects": "Bolsters caster's body with lightning",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 21
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f695ddd2cl0hynwt4kcvu1t0jpbh",
        "name": "Dragonice",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695ddd2cl0hynwt4kcvu1t0jpbh.png",
        "description": "One of the incantations of Dragon Communion.",
        "type": "Incantations",
        "cost": 36,
        "slots": 1,
        "effects": "Channels dragon to spew icy breath",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 15
        },
        {
        "name": "Arcane",
        "amount": 12
        }
        ]
        },
        {
        "source_id": "17f695ee05cl0hynwvuh9iqspb3fmk",
        "name": "Dragonclaw",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695ee05cl0hynwvuh9iqspb3fmk.png",
        "description": "One of the incantations of Dragon Communion.",
        "type": "Incantations",
        "cost": 42,
        "slots": 1,
        "effects": "Channels dragon to rend foes with dragon claws",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 17
        },
        {
        "name": "Arcane",
        "amount": 13
        }
        ]
        },
        {
        "source_id": "17f6919abe5l0hynwx7opzx5u5zvs",
        "name": "Dragonfire",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6919abe5l0hynwx7opzx5u5zvs.png",
        "description": "One of the incantations of Dragon Communion.",
        "type": "Incantation",
        "cost": 28,
        "slots": 1,
        "effects": "Channels dragon to spew flame breath",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 15
        },
        {
        "name": "Arcane",
        "amount": 12
        }
        ]
        },
        {
        "source_id": "17f68f9d130l0hynx3f1brjxtzdk9j",
        "name": "Dragonmaw",
        "image": "https://eldenring.fanapis.com/images/incantations/17f68f9d130l0hynx3f1brjxtzdk9j.png",
        "description": "One of the incantations of Dragon Communion.",
        "type": "Incantations",
        "cost": 62,
        "slots": 1,
        "effects": "Channels dragon to bite foes before caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 24
        },
        {
        "name": "Arcane",
        "amount": 16
        }
        ]
        },
        {
        "source_id": "17f6909836cl0hynxdbh1rpx4s4xfb",
        "name": "Ekzyke's Decay",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6909836cl0hynxdbh1rpx4s4xfb.png",
        "description": "Superior incantation of Dragon Communion. Channels the power of Ekzykes, the Decaying.",
        "type": "Incantations",
        "cost": 48,
        "slots": 1,
        "effects": "Spews scarlet rot breath of Ekzykes from above.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 23
        },
        {
        "name": "Arcane",
        "amount": 15
        }
        ]
        },
        {
        "source_id": "17f693fa72dl0hynxecsuhc2twylv",
        "name": "Ekzykes's Decay",
        "image": "https://eldenring.fanapis.com/images/incantations/17f693fa72dl0hynxecsuhc2twylv.png",
        "description": "Superior incantation of Dragon Communion. Channels the power of Ekzykes, the Decaying.",
        "type": "Incantations",
        "cost": 48,
        "slots": 1,
        "effects": "Spews scarlet rot breath of Ekzykes from above",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 23
        },
        {
        "name": "Arcane",
        "amount": 15
        }
        ]
        },
        {
        "source_id": "17f694fc4c1l0hynyj2kcaruicejdh",
        "name": "Fire's Deadly Sin",
        "image": "https://eldenring.fanapis.com/images/incantations/17f694fc4c1l0hynyj2kcaruicejdh.png",
        "description": "Incantation originating from a deeply ominous prophecy.",
        "type": "Incantations",
        "cost": 26,
        "slots": 1,
        "effects": "Sets area and self ablaze with raging flames",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 19
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f698775c6l0hynyj6kv53b13zexj",
        "name": "Erdtree Heal",
        "image": "https://eldenring.fanapis.com/images/incantations/17f698775c6l0hynyj6kv53b13zexj.png",
        "description": "One of the ancient Erdtree incantations.",
        "type": "Incantations",
        "cost": 65,
        "slots": 1,
        "effects": "Vastly heals HP for self and nearby allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 42
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6908edd1l0hynyjh9vrt6fwxg9g",
        "name": "Flame, Fall Upon Them",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6908edd1l0hynyjh9vrt6fwxg9g.png",
        "description": "One of the incantations that draws directly from the power of the",
        "type": "Incantations",
        "cost": 24,
        "slots": 1,
        "effects": "Hurls several balls of fire at once",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 28
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f692cd88cl0hynyo45u48tb1tyn",
        "name": "Ezykes's Decay",
        "image": "https://eldenring.fanapis.com/images/incantations/17f692cd88cl0hynyo45u48tb1tyn.png",
        "description": "Spews scarlet rot breath of Ekzykes from above",
        "type": "Incantations",
        "cost": 48,
        "slots": 1,
        "effects": "???",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 23
        },
        {
        "name": "Arcane",
        "amount": 15
        }
        ]
        },
        {
        "source_id": "17f691a5912l0hynyooe4izs5zxh3t",
        "name": "Electrify Armament",
        "image": "https://eldenring.fanapis.com/images/incantations/17f691a5912l0hynyooe4izs5zxh3t.png",
        "description": "One of the incantations of the capital's ancient dragon cult.",
        "type": "Incantations",
        "cost": 21,
        "slots": 1,
        "effects": "Enchants right-hand armament with lightning damage",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 15
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6985c468l0hynypycnlfmwjdzds",
        "name": "Flame Fortification",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6985c468l0hynypycnlfmwjdzds.png",
        "description": "Incantation of the Two Fingers' faithful. ",
        "type": "Incantations",
        "cost": 20,
        "slots": 1,
        "effects": "Increases fire damage negation.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 10
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6964ed65l0hynyrzn67dmtv89e",
        "name": "Flame Of The Fell God",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6964ed65l0hynyrzn67dmtv89e.png",
        "description": "This legendary incantation is one of several that draws directly from the power of the Fire Giants. Releases a ball of raging fire said to be inhabited by a fell god. The fireball floats toward enemies and explodes, setting the area ablaze. Arghanthy, the chief guardian of the Flame, had kept this incantation a well-kept secret until it was stolen by Adan. The fell god still lurks within the Fire Giants.",
        "type": "Incantations",
        "cost": 20,
        "slots": 2,
        "effects": "Summons raging fireball that explodes and sets the area ablaze",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 41
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69225db6l0hynyujjw6qxgtrbk",
        "name": "Elden Stars",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69225db6l0hynyujjw6qxgtrbk.png",
        "description": "This legendary incantation is the most ancient of those that derive from the Erdtree.",
        "type": "Incantations",
        "cost": 47,
        "slots": 2,
        "effects": "Creates a steam of golden shooting stars that assail the area.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 50
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f692f5b38l0hynzsnci8jsfgasx6",
        "name": "Flame, Protect Me",
        "image": "https://eldenring.fanapis.com/images/incantations/17f692f5b38l0hynzsnci8jsfgasx6.png",
        "description": "The most ancient of the Fire Monks' incantations.",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "Greatly increases fire damage negation",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 24
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f693ad486l0hynztvo8jus81t2uf",
        "name": "Fortissax's Lightning Spear",
        "image": "https://eldenring.fanapis.com/images/incantations/17f693ad486l0hynztvo8jus81t2uf.png",
        "description": "Incantation that channels the power of the ancient dragon Fortissax. ",
        "type": "Incantations",
        "cost": 64,
        "slots": 1,
        "effects": "Stabs from above with two red lightning spears in tandem",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 46
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6939dc0dl0hyo003ig3i03oy5eh",
        "name": "Frozen Lightning Spear",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6939dc0dl0hyo003ig3i03oy5eh.png",
        "description": "Incantation that channels the power of the Dragonkin Soldiers. Creates a spear of ice lightning and stabs it into the ground from above. On impact, the spear will burst into trails of lightning advancing forwards. The Dragonkin were born in the Eternal City, where they knew no true sky, nor true lightning. Instead, ice lightning was their weapon.",
        "type": "Incantations",
        "cost": 36,
        "slots": 1,
        "effects": "Stabs with ice lightning spear from above",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 34
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f695939cbl0hyo0116aw3hbaoca",
        "name": "Glintstone Breath",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695939cbl0hyo0116aw3hbaoca.png",
        "description": "One of the incantations of Dragon Communion.",
        "type": "Incantations",
        "cost": 36,
        "slots": 1,
        "effects": "Channels dragon to spew icy breath.",
        "requires": null
        },
        {
        "source_id": "17f68ff32f6l0hyo035frl5ld6347k",
        "name": "Golden Lightning Fortification",
        "image": "https://eldenring.fanapis.com/images/incantations/17f68ff32f6l0hyo035frl5ld6347k.png",
        "description": "An incantation of Erdtree Worship.",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "Greatly increases lightning resistance for self and allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 24
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f690e9092l0hyo03nyw25bgiu4hs",
        "name": "Frenzied Burst",
        "image": "https://eldenring.fanapis.com/images/incantations/17f690e9092l0hyo03nyw25bgiu4hs.png",
        "description": "Incantations originating from the maddening Three Fingers.",
        "type": "Incantations",
        "cost": 24,
        "slots": 1,
        "effects": "Emits concentrated blast of yellow flame of frenzy from eyes",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 22
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f695e7bcdl0hyo059aa6ajju2es",
        "name": "Giantsflame Take Thee",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695e7bcdl0hyo059aa6ajju2es.png",
        "description": "One of the incantations that draws directly from the power of the",
        "type": "Incantations",
        "cost": 32,
        "slots": 2,
        "effects": "Hurls massive ball of raging fire",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 30
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69510ee3l0hyo0f0mccaj31dwhq",
        "name": "Golden Vow (spell)",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69510ee3l0hyo0f0mccaj31dwhq.png",
        "description": "An incantation of Erdtree Worship.",
        "type": "Incantations",
        "cost": 47,
        "slots": 1,
        "effects": "Increases attack and defense for self and allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 25
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69535c25l0hyo1gmmkqtdazls9",
        "name": "Gurrang's Beast Claw",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69535c25l0hyo1gmmkqtdazls9.png",
        "description": "Superior incantation taught by Gurranq, the Beast Clergyman. ",
        "type": "Incantations",
        "cost": 21,
        "slots": 1,
        "effects": "Creates beast claws to rend surroundings with shockwaves",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 15
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69822dd3l0hyo1hzk48p9uymlan",
        "name": "Immutable Shield",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69822dd3l0hyo1hzk48p9uymlan.png",
        "description": "One of the incantations of the Golden Order fundamentalists. ",
        "type": "Incantations",
        "cost": 15,
        "slots": 1,
        "effects": "Increases left-hand shield's affinity/ailment resistance",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 19
        },
        {
        "name": "Faith",
        "amount": 19
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f692dbdc9l0hyo1jah0ket283h6d",
        "name": "Heal",
        "image": "https://eldenring.fanapis.com/images/incantations/17f692dbdc9l0hyo1jah0ket283h6d.png",
        "description": "Incantation of the Two Fingers' faithful.",
        "type": "Incantation",
        "cost": 32,
        "slots": 1,
        "effects": "Heals HP for you and nearby allies.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 12
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69430705l0hyo1jpd17zxxmmdyl",
        "name": "Howl Of Shabriri",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69430705l0hyo1jpd17zxxmmdyl.png",
        "description": "Incantation originating from the maddening Three Fingers. ",
        "type": "Incantations",
        "cost": 21,
        "slots": 1,
        "effects": "Shrieks, building up madness in nearby foes",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 33
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6926bc7dl0hyo1ku9wh0qz4eyh6",
        "name": "Great Heal",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6926bc7dl0hyo1ku9wh0qz4eyh6.png",
        "description": "Superior incantation of the Two Fingers' faithful.",
        "type": "Incantations",
        "cost": 45,
        "slots": 1,
        "effects": "Greatly Heals HP for self and nearby allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 15
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f693e76abl0hyo1mzypokk5gvlz",
        "name": "Greyoll's Roar",
        "image": "https://eldenring.fanapis.com/images/incantations/17f693e76abl0hyo1mzypokk5gvlz.png",
        "description": "Superior incantation of Dragon Communion. Channels the power of Greyoll, the Elder Dragon. An incantation of legendary status.",
        "type": "Incantation",
        "cost": 75,
        "slots": 2,
        "effects": "Emits the roar of Elder Dragon Greyoll.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 28
        },
        {
        "name": "Arcane",
        "amount": 17
        }
        ]
        },
        {
        "source_id": "17f68fa0c30l0hyo1qasgyir08s9kb",
        "name": "Inescapable Frenzy",
        "image": "https://eldenring.fanapis.com/images/incantations/17f68fa0c30l0hyo1qasgyir08s9kb.png",
        "description": "Incantation originating from the maddening Three Fingers. ",
        "type": "Incantations",
        "cost": 32,
        "slots": 1,
        "effects": "Latches onto foes to spread madness",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 21
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6904f3b2l0hyo1u5sqdw9zxr0g",
        "name": "Honed Bolt",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6904f3b2l0hyo1u5sqdw9zxr0g.png",
        "description": "One of the incantations of the capital's ancient dragon cult.",
        "type": "Incantations",
        "cost": 12,
        "slots": 1,
        "effects": "Strikes foe with lightning bolt from above",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 24
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69773db5l0hyo3532itzerrsdj",
        "name": "Lansseax's Glaive",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69773db5l0hyo3532itzerrsdj.png",
        "description": "Incantation that channels the powr of the ancient dragon Lansseax.",
        "type": "Incantations",
        "cost": 35,
        "slots": 1,
        "effects": "Sweeps from above with red lightning glaive.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 40
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f696de88al0hyo39vlr771is6fv",
        "name": "Lightning Fortification",
        "image": "https://eldenring.fanapis.com/images/incantations/17f696de88al0hyo39vlr771is6fv.png",
        "description": "Incantation of the Two Fingers' faithful. ",
        "type": "Incantations",
        "cost": 20,
        "slots": 1,
        "effects": "Increass lighting damage negation",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 10
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69602ae3l0hyo3a6ruzolnobp3o",
        "name": "Lord's Aid",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69602ae3l0hyo3a6ruzolnobp3o.png",
        "description": "Incantation bestowed by the Two Fingers upon the Tarnished",
        "type": "Incantations",
        "cost": 9,
        "slots": 1,
        "effects": "Alleviates poison / blood loss / sleep buildup for self / allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 12
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6908485dl0hyo3bkdtot70uk3p4",
        "name": "Lightning Spear",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6908485dl0hyo3bkdtot70uk3p4.png",
        "description": "One of the incantations of the capital's ancient dragon cult. Summons a lightning spear and hurls it before the caster. Charging causes a lightning bolt to strike the point ofimpact. Long ago, Godwyn the Golden defeated the ancient dragon Fortissax, and befriended his fallen foe ??? an event that gave rise to the ancient dragon cult in the capital.",
        "type": "Incantations",
        "cost": 14,
        "slots": 1,
        "effects": "Hurls lightning spear before caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 17
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6933b1fdl0hyo3bz9d9loqhf9qh",
        "name": "Law Of Causality",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6933b1fdl0hyo3bz9d9loqhf9qh.png",
        "description": "One of the incantations of the Golden Order fundamentalists.",
        "type": "Incantations",
        "cost": 22,
        "slots": 1,
        "effects": "Retaliates upon receiving a number of blows",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 0
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6908f509l0hyo3cd6br7iexs0ys",
        "name": "Litany Of Proper Death",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6908f509l0hyo3cd6br7iexs0ys.png",
        "description": "One of the incantations of the Golden Order fundamentalists. ",
        "type": "Incantation",
        "cost": 17,
        "slots": 1,
        "effects": "Creates image of Order to deal holy damage",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 17
        },
        {
        "name": "Faith",
        "amount": 17
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f693addcel0hyo3dh93zpcxbralt",
        "name": "Law Of Regression",
        "image": "https://eldenring.fanapis.com/images/incantations/17f693addcel0hyo3dh93zpcxbralt.png",
        "description": "Incantation of the Golden Order fundamentalists. One of the key fundamentals. Heals all negative statuses, dispels special effects, and reveals mimicry in all its forms. The fundamentalists describe the Golden Order through the powers of regression and causality. Regression is the pull of meaning; that all things yearn eternally to converge.",
        "type": "Incantations",
        "cost": 55,
        "slots": 1,
        "effects": "Heals all ailments and dispels all special effects",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 37
        },
        {
        "name": "Faith",
        "amount": 0
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69522233l0hyo3e7aqun8itt9a",
        "name": "Lightning Strike",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69522233l0hyo3e7aqun8itt9a.png",
        "description": "One of the incantations of the capital's ancient dragon cult.",
        "type": "Incantations",
        "cost": 17,
        "slots": 1,
        "effects": "Summons lightning bolt that spreads from impact.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 28
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6988869dl0hyo4qsblr2lchs3q7",
        "name": "Lord's Divine Fortification",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6988869dl0hyo4qsblr2lchs3q7.png",
        "description": "Incantation taught to Gideon the All-Knowing by the Two",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "Greatly increases holy damage negation incl. allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 27
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69634f78l0hyo4s4zggpkf72qsp",
        "name": "Lord's Heal",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69634f78l0hyo4s4zggpkf72qsp.png",
        "description": "Incantation bestowed by the Two Fingers upon the Tarnished",
        "type": "Incantations",
        "cost": 42,
        "slots": 1,
        "effects": "Massively heals HP for self and nearby allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 20
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f68fdec40l0hyo4sbk8kjcr4p6lp",
        "name": "Order Healing",
        "image": "https://eldenring.fanapis.com/images/incantations/17f68fdec40l0hyo4sbk8kjcr4p6lp.png",
        "description": "One of the incantations of the Golden Order fundamentalists.",
        "type": "Incantations",
        "cost": 15,
        "slots": 1,
        "effects": "Alleviates death blight buildup",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 0
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6962911el0hyo4s02nf0ie24nvc",
        "name": "Noble Presence",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6962911el0hyo4s02nf0ie24nvc.png",
        "description": "Ancient power of the Godskin Nobles. ",
        "type": "Incantations",
        "cost": 20,
        "slots": 1,
        "effects": "Thrust out belly with gusto to unelash repelling shockwave",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 26
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f692fa4d2l0hyo4uc4mjru3qoaee",
        "name": "Order's Blade",
        "image": "https://eldenring.fanapis.com/images/incantations/17f692fa4d2l0hyo4uc4mjru3qoaee.png",
        "description": "One of the incantations of the Golden Order fundamentalists. Used by hunters of Those Who Live in Death. Enchants armament held in the right hand with holy-affinity attacks. This incantation is especially damaging to Those Who Live in Death. Any felled by this incantation cannot be revived. The role of the hunters is to stamp out defiled reason - all for the perfection of the Golden Order.",
        "type": "Incantations",
        "cost": 22,
        "slots": 1,
        "effects": "Enchanted right-hand armament with holy damage",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 13
        },
        {
        "name": "Faith",
        "amount": 13
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69295d83l0hyo4wyff4k2r6tkno",
        "name": "Magic Fortification",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69295d83l0hyo4wyff4k2r6tkno.png",
        "description": "Incantation of the Two Fingers' faithful. Increases magic damage negation. This incantation can be cast while in motion. Follow the path that has been set for you, and you will make enemies of all others: the monks, the sorcerers, the ancient dragon knights, and the scions of gold. Heed me ??? the Lands Between offers no welcome to the Tarnished.",
        "type": "Incantations",
        "cost": 20,
        "slots": 1,
        "effects": "Increases magic damage negation",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 10
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6946750bl0hyo4yckgppsbgjyai",
        "name": "O, Flame!",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6946750bl0hyo4yckgppsbgjyai.png",
        "description": "Incantation of the Fire Monks.",
        "type": "Incantations",
        "cost": 12,
        "slots": 1,
        "effects": "Momentarily sparks roaring flame from hand",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 16
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6917092dl0hyo511p1ard3b4xwm",
        "name": "Magma Breath",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6917092dl0hyo511p1ard3b4xwm.png",
        "description": "One of the incantations of Dragon Communion. ",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "Channels wyrm to spew magma breath",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 14
        },
        {
        "name": "Arcane",
        "amount": 10
        }
        ]
        },
        {
        "source_id": "17f6971f6b6l0hyo69cly6crooe39",
        "name": "Pest Threads",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6971f6b6l0hyo69cly6crooe39.png",
        "description": "Incantation of the servants of rot.",
        "type": "Incantations",
        "cost": 19,
        "slots": 1,
        "effects": "Launches countless sticky threads before caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 11
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f697ae98fl0hyo6a7rwr36m0lrsr",
        "name": "Protection Of The Erdtree",
        "image": null,
        "description": "A superior incantation of Erdtree Worship. Increase damage negation for all affinities except physical, for both the caster and nearby allies. Hold to continue praying and delay activation. In the beginning, everything was in opposition to the Erdtree. But through countless victories in war, it became the embodiment of Order.",
        "type": "Incantations",
        "cost": 30,
        "slots": 1,
        "effects": "Increases affinity damage negation for self & allies",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 35
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6922607fl0hyo6c1nfqul6hljpg",
        "name": "Poison Armament",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6922607fl0hyo6c1nfqul6hljpg.png",
        "description": "Incantation of the servants of rot. Enchants armament held in the right hand with poison. This incantation can be cast while in motion. Those who dwell within poison know rot all too well. The death that begets life, that comes to all equally. That is to say: it is the cycle of rebirth put into practice.",
        "type": "Incantations",
        "cost": 15,
        "slots": 1,
        "effects": null,
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 10
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6958b760l0hyo6c41h81a4ao9ihh",
        "name": "Placidusax's Ruin",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6958b760l0hyo6c41h81a4ao9ihh.png",
        "description": "Power gleaned form the remembrance of Dragonlord Placidusax. ",
        "type": "Incantations",
        "cost": 80,
        "slots": 3,
        "effects": "Spews golden breath of Dragonlord Placidusax",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 36
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f695abe1dl0hyo6ddrxsg47tz9j9",
        "name": "Poison Mist",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695abe1dl0hyo6ddrxsg47tz9j9.png",
        "description": "Incantation of the servants of rot.",
        "type": "Incantations",
        "cost": 18,
        "slots": 1,
        "effects": "Releases poison mist before caster.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 12
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69215aafl0hyo6fnokhkxl7dq4p",
        "name": "Radagon's Rings Of Light",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69215aafl0hyo6fnokhkxl7dq4p.png",
        "description": "One of the incantations of the Golden Order fundamentalists.",
        "type": "Incantations",
        "cost": 29,
        "slots": 1,
        "effects": "Creates golden ring of light to attack wide area",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 31
        },
        {
        "name": "Faith",
        "amount": 31
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6968b28dl0hyo6loaay43jahfcp",
        "name": "Rotten Breath",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6968b28dl0hyo6loaay43jahfcp.png",
        "description": "One of the incantations of Dragon Communion.",
        "type": "Incantations",
        "cost": 36,
        "slots": 1,
        "effects": "Channels dragon to spew scarlet rot breath",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 15
        },
        {
        "name": "Arcane",
        "amount": 12
        }
        ]
        },
        {
        "source_id": "17f695dd7d9l0hyo6nbzipolrbtuxg",
        "name": "Rejection",
        "image": "https://eldenring.fanapis.com/images/incantations/17f695dd7d9l0hyo6nbzipolrbtuxg.png",
        "description": "Incantation of the Two Fingers' faithful.",
        "type": "Incantation",
        "cost": 9,
        "slots": 1,
        "effects": "Produces a shockwave that pushes away foes.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 12
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f694d5050l0hyo7rhkcg4j0qaii",
        "name": "Smarag's Glintstone Breath",
        "image": "https://eldenring.fanapis.com/images/incantations/17f694d5050l0hyo7rhkcg4j0qaii.png",
        "description": "Superior incantation of Dragon Communion.",
        "type": "Incantations",
        "cost": 36,
        "slots": 1,
        "effects": "Spews magic breath of Glintstone Dragon Smarag from above",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 23
        },
        {
        "name": "Arcane",
        "amount": 15
        }
        ]
        },
        {
        "source_id": "17f69771088l0hyo7tmllgof77289o",
        "name": "Stone Of Gurranq",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69771088l0hyo7tmllgof77289o.png",
        "description": "Superior incantation taught by Gurranq, the Beast Clergyman. ",
        "type": "Incantations",
        "cost": 15,
        "slots": 1,
        "effects": "Hurls a boulder before the caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 13
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f692aa326l0hyo81f3t0bbkonkwh",
        "name": "Surge, O Flame!",
        "image": "https://eldenring.fanapis.com/images/incantations/17f692aa326l0hyo81f3t0bbkonkwh.png",
        "description": "Superior incantation of the Fire Monks.",
        "type": "Incantations",
        "cost": 1,
        "slots": 1,
        "effects": "Incinerates area before caster with stream of fire",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 9
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f691c3d89l0hyo81xcmf8pooodpu",
        "name": "Shadow Bait",
        "image": "https://eldenring.fanapis.com/images/incantations/17f691c3d89l0hyo81xcmf8pooodpu.png",
        "description": "Incantation of the Two Fingers' sewants, who once served as the",
        "type": "Incantations",
        "cost": 15,
        "slots": 1,
        "effects": "Creates shadow that lures the aggression of foes of human build",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 13
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f692422c4l0hyo84mlas2e4zch5",
        "name": "Scouring Black Flame",
        "image": "https://eldenring.fanapis.com/images/incantations/17f692422c4l0hyo84mlas2e4zch5.png",
        "description": "A black flame incantation of the Godskin Apostles. Sweeps a wide area before the caster with black flame. Charging enhances range. The black flame could once slay gods. But when Maliketh sealed Destined Death, the true power of the black flame was lost.",
        "type": "Incantations",
        "cost": 27,
        "slots": 1,
        "effects": "Sweeps area before caster with black flame",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 28
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6904109al0hyo84mydzpc5usap9",
        "name": "Scarlet Aeonia",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6904109al0hyo84mydzpc5usap9.png",
        "description": "Technique of Malenia, the Goddess of Rot. ",
        "type": "Incantations",
        "cost": 56,
        "slots": 3,
        "effects": "Creates a giant flower that explodes with scarlet rot.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 35
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6925361el0hyo84va1dajld4erh",
        "name": "Swarm Of Flies",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6925361el0hyo84va1dajld4erh.png",
        "description": "A Blood Oath incantation, shared from the Lord of Blood's power. Releases a swarm of bloodflies before the caster to assault foes. The vile swarm deals damage and builds up onset of blood loss. This incantation can be cast while in motion. The new palace of the Lord of Blood lies in a swamp of festering blood, and these flies are said to spawn from excrement in that land. ",
        "type": "Incantations",
        "cost": 14,
        "slots": 1,
        "effects": "Releases a swarm of bloodflies before the caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 11
        },
        {
        "name": "Arcane",
        "amount": 16
        }
        ]
        },
        {
        "source_id": "17f69632226l0hyo91iqbjmg4xbw1",
        "name": "The Flame Of Frenzy",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69632226l0hyo91iqbjmg4xbw1.png",
        "description": "Incantation originating from the maddening Three Fingers.",
        "type": "Incantation",
        "cost": 16,
        "slots": 1,
        "effects": "Emits burst of yellow flame of frenzy from eyes",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 16
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f69603e55l0hyo92oip6kr38j99r",
        "name": "Theodorix's Magma",
        "image": "https://eldenring.fanapis.com/images/incantations/17f69603e55l0hyo92oip6kr38j99r.png",
        "description": "Superior incantation of Dragon Communion. Channels the power of the great wyrm Theodorix. Transforms caster into a great wyrm to spew a large volume of magma breath. Allows one follow-up attack. The name of the ancient troll warrior Theodorix lives on ??? as a hero of the War against the Giants.",
        "type": "Incantations",
        "cost": 45,
        "slots": 1,
        "effects": "Spews magma breath of Theodorix from above",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 21
        },
        {
        "name": "Arcane",
        "amount": 14
        }
        ]
        },
        {
        "source_id": "17f692da48al0hyo9dril53k44haam",
        "name": "Unendurable Frenzy",
        "image": "https://eldenring.fanapis.com/images/incantations/17f692da48al0hyo9dril53k44haam.png",
        "description": "Incantation originating from the maddening Three Fingers. Causes the yellow flame of frenzy to violently burst forth from the caster's eyes. Hold to continue channeling the flame. This incantation can be used while in motion. It is the maddening pain and unstoppable tears of those afflicted with the flame of frenzy brought into being. ",
        "type": "Incantations",
        "cost": 42,
        "slots": 1,
        "effects": "Emits violent burst of yellow flame of frenzy from eyes.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 31
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f6912a13el0hyo9e5e3yb9u659qs",
        "name": "Triple Rings Of Light",
        "image": "https://eldenring.fanapis.com/images/incantations/17f6912a13el0hyo9e5e3yb9u659qs.png",
        "description": "One of the incantations of the Golden Order fundamentalists. Produces three rings of light and fires them forwards. The rings of light return to a position close to the caster before disappearing. This incantation can be cast repeatedly. A gift from the young Ivliquella to his father, Radagon.",
        "type": "Incantations",
        "cost": 23,
        "slots": 1,
        "effects": "Fire three rings of light before the caster",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 23
        },
        {
        "name": "Faith",
        "amount": 23
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f690c2762l0hyo9glzbxuxlwc2dh",
        "name": "Whirl, O Flame!",
        "image": "https://eldenring.fanapis.com/images/incantations/17f690c2762l0hyo9glzbxuxlwc2dh.png",
        "description": "Superior Incantation of the Fire Monks. ",
        "type": "Incantations",
        "cost": 21,
        "slots": 1,
        "effects": "Sweeps area before caster with stream of fire",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 13
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f694ba1f5l0hyo9j21xk3iv8ws5v",
        "name": "Vyke's Dragonbolt",
        "image": "https://eldenring.fanapis.com/images/incantations/17f694ba1f5l0hyo9j21xk3iv8ws5v.png",
        "description": "Incantation of Vyke, knight of the Roundtable Hold.",
        "type": "Incantations",
        "cost": 27,
        "slots": 1,
        "effects": "Enchants right-hand armament with lightning damage",
        "requires": null
        },
        {
        "source_id": "17f698ccf55l0hyo9juunjo3lodn1n",
        "name": "Urgent Heal",
        "image": "https://eldenring.fanapis.com/images/incantations/17f698ccf55l0hyo9juunjo3lodn1n.png",
        "description": "Incantation of the Two Fingers faithful.",
        "type": "Incantation",
        "cost": 16,
        "slots": 1,
        "effects": "Heals a small amount of HP.",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 8
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        },
        {
        "source_id": "17f693ca95el0hyo9lhohewhkatfd",
        "name": "Wrath Of Gold",
        "image": "https://eldenring.fanapis.com/images/incantations/17f693ca95el0hyo9lhohewhkatfd.png",
        "description": "Superior Erdtree Worship incantation. Produces a golden shockwave that knocks back nearby foes. Charging increases the size of the shockwave. This incantation was discovered when the Elden Ring was shattered, and it was feared as a sign of the Erdtree's wrath.",
        "type": "Incantations",
        "cost": 40,
        "slots": 1,
        "effects": "Produces golden shockwave that knocks back foes",
        "requires": [
        {
        "name": "Intelligence",
        "amount": 0
        },
        {
        "name": "Faith",
        "amount": 32
        },
        {
        "name": "Arcane",
        "amount": 0
        }
        ]
        }
        ]



const seedSpell = () => Spell.collection.insertMany(spellData);

module.exports = seedSpell;