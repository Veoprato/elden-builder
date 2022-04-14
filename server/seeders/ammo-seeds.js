const { Ammo } = require('../models');

const ammoData = [
    {
    "id": "17f69448ceel0i0a57bokoqz409yb",
    "name": "Firebone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69448ceel0i0a57bokoqz409yb.png",
    "description": "Arrow whittled from animal bones. The tip is set alight before firing",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 90
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f695dc715l0i0a59pf1x5fb5112r",
    "name": "Bloodbone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f695dc715l0i0a59pf1x5fb5112r.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with a golden tincture. Deals holy damage. Craftable item. The fletching adds distance to the arrow's flight.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes blood loss build up (55)"
    },
    {
    "id": "17f6955e0efl0i0a5a8q72a9vip51",
    "name": "Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6955e0efl0i0a5a8q72a9vip51.png",
    "description": "Ammunition used for crossbows. A widespread, common type of bolt.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 50
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f699c4de5l0i0a5a69f9ja6l52sm",
    "name": "Bloodbone Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f699c4de5l0i0a5a69f9ja6l52sm.png",
    "description": "Bolt carved from animal bone. The tip is daubed with a blood tincture. Afflicts targets with blood loss. Craftable item. ",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes blood loss buildup (50)"
    },
    {
    "id": "17f69af93d3l0i0a5b5c6u7e58dev5",
    "name": "Ballista Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69af93d3l0i0a5b5c6u7e58dev5.png",
    "description": "Greatbolt as large as a pear for use with Hand Ballista",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 160
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6924048dl0i0a5bddy4vjs3e5s",
    "name": "Black-key Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6924048dl0i0a5bddy4vjs3e5s.png",
    "description": "Bolts used in Crepus' Black-Key Crossbow, an assassin's tool of exquisite craftmanship.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 30
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes scarlet rot buildup (60)"
    },
    {
    "id": "17f6973ce6al0i0a5g8kku0ago9dtr",
    "name": "Bloodbone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6973ce6al0i0a5g8kku0ago9dtr.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with a blood tincture. Afflicts targets with blood loss.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes blood loss build up (55)"
    },
    {
    "id": "17f6994469al0i0a5kro3q7srgm3ic",
    "name": "Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6994469al0i0a5kro3q7srgm3ic.png",
    "description": "Arrows used with small and long bows. Unremarkable in any way, shape or form.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 45
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f699f2bf9l0i0a62bo1pm64y13t",
    "name": "Bone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f699f2bf9l0i0a62bo1pm64y13t.png",
    "description": "Arrow whittled from thin animal bones. Though the arrowhead is sharp indeed, it doesn't fly particularly true.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 35
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6988c728l0i0a6dz732w8pes2a5",
    "name": "Bone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6988c728l0i0a6dz732w8pes2a5.png",
    "description": "Arrow whittled from thin animal bones. The feather fletchings add distance and accuracy to the standard bone arrow.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 35
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f697685ffl0i0a6ejx68qb20d9e",
    "name": "Bone Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f697685ffl0i0a6ejx68qb20d9e.png",
    "description": "Bolt carved from a thin animal bone. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 40
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f693d91c2l0i0a6evjmmx3oa7qf",
    "name": "Bone Ballista Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f693d91c2l0i0a6evjmmx3oa7qf.png",
    "description": "Greatbolt as large as a spear carved from stout animal bones. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 150
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "- "
    },
    {
    "id": "17f6956b383l0i0a6hqo084990dji",
    "name": "Burred Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6956b383l0i0a6hqo084990dji.png",
    "description": "Bolt covered in thorns. One of the most horrific weapons used in the Shattering. Afflicts with blood loss.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 30
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes blood loss buildup (65)"
    },
    {
    "id": "17f6997ebfel0i0a6idqxeuva67nsk",
    "name": "Dwelling Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6997ebfel0i0a6idqxeuva67nsk.png",
    "description": "Arrow in which the spirits of small animals are thought to dwell.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 95
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6935eb21l0i0a6ntkl0li8p6xkg",
    "name": "Explosive Greatbolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6935eb21l0i0a6ntkl0li8p6xkg.png",
    "description": "Greatbolt tipped with a clump of Explosive Stone shards.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 50
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 150
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f697796f8l0i0a6nunhop3qk25xg",
    "name": "Explosive Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f697796f8l0i0a6nunhop3qk25xg.png",
    "description": "Bolt tipped with a shard of Explosive Stone. Explodes on impact, dealing fire damage.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 70
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "None"
    },
    {
    "id": "17f693d14cfl0i0a6xwx7n1y3jowc9",
    "name": "Fire Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f693d14cfl0i0a6xwx7n1y3jowc9.png",
    "description": "Arrow with the tip set alight.Deals fire damage. ",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 95
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f699870acl0i0a73wa3jmaf1ax4j",
    "name": "Firebone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f699870acl0i0a73wa3jmaf1ax4j.png",
    "description": "Arrow whittled from animal bones. The tip is set alight before firing. Deals fire damage to foes.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 90
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6992419cl0i0a7gx5d666jdb9q7",
    "name": "Firebone Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6992419cl0i0a7gx5d666jdb9q7.png",
    "description": "Bolt carved from animal bone. The tip is set alight before firing. Deals fire damage.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 75
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f697bf804l0i0a7j8awlq1z4g9u6",
    "name": "Flaming Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f697bf804l0i0a7j8awlq1z4g9u6.png",
    "description": "Bolt with a fiercely burned tip. Deals powerful fire damage.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 20
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 80
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69914f7dl0i0a7oebu55m1twr75",
    "name": "Golden Bolt",
    "image": null,
    "description": "Bolt blessed with an incantation of the Erdtree. Deals powerful holy damage ",
    "type": null,
    "attackPower": [
    {
    "name": "Phy20",
    "amount": null
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 80
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69992e40l0i0a7oo1s1bq93kal7",
    "name": "Golden Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69992e40l0i0a7oo1s1bq93kal7.png",
    "description": "Carved arrows made in tandem with the Erdtree Bow. Deals holy damage. ",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 95
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f696b53c0l0i0a7qtqyrwtbtoq7",
    "name": "Golden Great Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f696b53c0l0i0a7qtqyrwtbtoq7.png",
    "description": "Carved greatarrows made together with the Erdtree Greatbow. Deals holy damage. ",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy40",
    "amount": null
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 110
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69469b06l0i0a7sg2a8ces4w9x",
    "name": "Golem's Great Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69469b06l0i0a7sg2a8ces4w9x.png",
    "description": "Greatarrow of black stone crafted by a civilization now gone to ruin. Used by the Guardian Golem.This hefty arrow is enrobed in tempestuous winds, allowing it to break enemy stances and guards with ease.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 105
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69af00fal0i0a7uu2qhpuftxzv",
    "name": "Great Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69af00fal0i0a7uu2qhpuftxzv.png",
    "description": "A greatarrow as large as a spear for use with greatbows. Used by archers of monstrous strength employed by a lord's army.",
    "type": null,
    "attackPower": [
    {
    "name": "Phy100",
    "amount": null
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69b8ce34l0i0a7zih8qfea4dvka",
    "name": "Haligbone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69b8ce34l0i0a7zih8qfea4dvka.png",
    "description": "Arrow whittled From animal bones. The tip is daubed with a golden tincture. Deals holy damage. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 90
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69b16cb6l0i0a8r058km513nvw7",
    "name": "Haligbone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69b16cb6l0i0a8r058km513nvw7.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with a golden tincture. Deals holy damage. Craftable item. The fletching adds distance to the arrow's flight. ",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 90
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6945f9cal0i0a8wtc9cmxtd7rnn",
    "name": "Lightning Greabolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6945f9cal0i0a8wtc9cmxtd7rnn.png",
    "description": "Greatbolt tipped with a climp of Gravel Stone shards. ",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 50
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 150
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f693c3e3el0i0a8wy8f2xnxro75k",
    "name": "Haligbone Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f693c3e3el0i0a8wy8f2xnxro75k.png",
    "description": "Bolt carved from animal bone. The tip is daubed with a golden tincture. Deals holy damage. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": null
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 75
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69b0f8ebl0i0a8xtaw8i78q9o",
    "name": "Lightning Greabolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69b0f8ebl0i0a8xtaw8i78q9o.png",
    "description": "Greatbolt tipped with a climp of Gravel Stone shards.Deals powerful lightning damage. ",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 50
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 150
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69789d70l0i0a8zc8rtag3dspv4",
    "name": "Lightningbone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69789d70l0i0a8zc8rtag3dspv4.png",
    "description": "Arrow whittled from animal bones with a lightning-infused tip. Deals lightning damage.Craftable item. The fletching adds distance to the arrow's flight. ",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 90
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69635263l0i0a8ze3afj4nohfva",
    "name": "Lightningbone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69635263l0i0a8ze3afj4nohfva.png",
    "description": "Arrow whittled from animal bones with a lightning-infused tip. Deals lightning damage.Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 90
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6994982el0i0a92geml5aal9gy6",
    "name": "Lightningbone Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6994982el0i0a92geml5aal9gy6.png",
    "description": "Bolt crafted from animal bone with a lightning-infused tip. Deals lightning damage. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 75
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69b5a80el0i0a93rl97dubpwddn",
    "name": "Lordsworn's Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69b5a80el0i0a93rl97dubpwddn.png",
    "description": "Well-crafted bolt with an illustrious design, wielded by regulars of a lord's army.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 65
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6937df3bl0i0a9qwoh0sfdx9ih",
    "name": "Magicbone Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6937df3bl0i0a9qwoh0sfdx9ih.png",
    "description": "Bolt carved from animal bone. The tip is daubed with a glintstone tincture. Deals magic damage. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 75
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6977d26el0i0a9t6xhw1vwy7z5e",
    "name": "Poisonbone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6977d26el0i0a9t6xhw1vwy7z5e.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with venom. Afflicts targets with poison. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Confers Poison status ailment"
    },
    {
    "id": "17f696e5e94l0i0aa0jso6bhzrwcsg",
    "name": "Poisonbone Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f696e5e94l0i0aa0jso6bhzrwcsg.png",
    "description": "Bolt carved from animal bone. The tip is daubed with venom. Afflicts targets with poison. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes poison buildup (66)"
    },
    {
    "id": "17f69541e1el0i0aa1v5xyb7xygmaa",
    "name": "Poisonbone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69541e1el0i0aa1v5xyb7xygmaa.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with venom. Afflicts targets with poison. Craftable item. The addition of fletching enables more precise shots that can travel farther.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Confers Poison status ailment"
    },
    {
    "id": "17f69251e6al0i0aa1x6q566kjp786",
    "name": "Perfumer's Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69251e6al0i0aa1x6q566kjp786.png",
    "description": "Bolt created with perfumer techniques. Used by nobles' guards and the like.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 15
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 65
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f699a2487l0i0aa4vpxysfgpaem",
    "name": "Magicbone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f699a2487l0i0aa4vpxysfgpaem.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with a glintstone tincture. Deals magic damage.Craftable item. The Retching adds distance to the arrow's flight.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 90
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f695efd8fl0i0aa79m4cnuhuw36g",
    "name": "Meteor Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f695efd8fl0i0aa79m4cnuhuw36g.png",
    "description": "Enchanted work of craft made in tandem with Full Moon Crossbow. The tip is embedded with glintstone.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 80
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f697e9935l0i0aa7wy8c60t8z11",
    "name": "Magicbone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f697e9935l0i0aa7wy8c60t8z11.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with a glintstone tincture. Deals magic damage. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 10
    },
    {
    "name": "Mag",
    "amount": 90
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69681f23l0i0aahxnk8hmk4asl",
    "name": "Radahn's Spear",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69681f23l0i0aahxnk8hmk4asl.png",
    "description": "Greatarrows used by the General Radahns during the festival of combat. These are in fact the many spears with which he was stabbed by the Cleanrot Knights.Imbued with Radahn's gravitational power.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 100
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f6948e462l0i0aajv98butqkk57r",
    "name": "Rainbow Stone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6948e462l0i0aajv98butqkk57r.png",
    "description": "Arrow whittled from animal bones tipped with chips of Rainbow Stone. Colored lights shine at the point of impact. ",
    "type": null,
    "attackPower": [
    {
    "name": "Phy25",
    "amount": null
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f696f613bl0i0ab2gzfybs6xv4m",
    "name": "Rotbone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f696f613bl0i0ab2gzfybs6xv4m.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with rot. Afflicts targets with scarlet rot. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes scarlet rot buildup (50)"
    },
    {
    "id": "17f6999ab25l0i0ab4wbrb3l2bbiwn",
    "name": "Rotbone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f6999ab25l0i0ab4wbrb3l2bbiwn.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with rot. Afflicts targets with scarlet rot. Craftable item. The fletching adds distance to the arrow's flight.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes scarlet rot buildup (50)"
    },
    {
    "id": "17f698609f1l0i0ab5qhcgdj349ejv",
    "name": "Shattershard Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f698609f1l0i0ab5qhcgdj349ejv.png",
    "description": "Arrow whittled from animal bones tipped with a shard of crystal. Creates a resonating noise at the point of impact.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f69aaa491l0i0ab7upr3t0arnja",
    "name": "Serpent Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69aaa491l0i0ab7upr3t0arnja.png",
    "description": "Arrow carved to resemble a flying snake. Used in tandem with the Serpent Bow.",
    "type": null,
    "attackPower": [
    {
    "name": "Phy30",
    "amount": null
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes heavy poison buildup (78)"
    },
    {
    "id": "17f69657954l0i0ab817nv558hszgs",
    "name": "Shattershard Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69657954l0i0ab817nv558hszgs.png",
    "description": "Arrows whittled from animal bones tipped with a shard of crystal. Creates a resonating noise at the point of impact.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "-"
    },
    {
    "id": "17f695c24afl0i0ab8ndzenywdxan",
    "name": "Rotbone Bolt",
    "image": "https://eldenring.fanapis.com/images/ammos/17f695c24afl0i0ab8ndzenywdxan.png",
    "description": "Bolt carved from animal bone. The tip is daubed with rot. Afflicts targets with scarlet rot. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 25
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes scarlet rot buildup (55)"
    },
    {
    "id": "17f69558d42l0i0abcowa3xytt0hzd",
    "name": "Sleepbone Arrow Fletched",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69558d42l0i0abcowa3xytt0hzd.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with a water lily tincture. Afflicts targets with drowsiness. Craftable item. The addition of fletching enables more precise shots that can travel farther.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 20
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Confers Sleep status ailment"
    },
    {
    "id": "17f696a05b4l0i0abdatq6y5puk5v",
    "name": "Sleepbone Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f696a05b4l0i0abdatq6y5puk5v.png",
    "description": "Arrow whittled from animal bones. The tip is daubed with a water lily tincture. Afflicts targets with drowsiness. Craftable item.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 20
    },
    {
    "name": "Mag",
    "amount": 0
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Confers Sleep status ailment"
    },
    {
    "id": "17f69b10b35l0i0abn77r17fy19pon",
    "name": "Spiritflame Arrow",
    "image": "https://eldenring.fanapis.com/images/ammos/17f69b10b35l0i0abn77r17fy19pon.png",
    "description": "Arrow set alight with ghostflame before firing.Deals magic damage while also afflictingfoes with frost.",
    "type": "Pierce",
    "attackPower": [
    {
    "name": "Phy",
    "amount": 30
    },
    {
    "name": "Mag",
    "amount": 40
    },
    {
    "name": "Fire",
    "amount": 0
    },
    {
    "name": "Ligt",
    "amount": 0
    },
    {
    "name": "Holy",
    "amount": 0
    },
    {
    "name": "Crit",
    "amount": 100
    }
    ],
    "passive": "Causes frost build up (65)"
    }
    ];



const seedAmmo = () => Ammo.collection.insertMany(ammoData);

module.exports = seedAmmo;