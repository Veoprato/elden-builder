const { Talisman } = require('../models');

const talismanData = [
    {
    "source_id": "17f69f4f7a3l0i2soioqe3qysjxaw",
    "name": "Arrow's Sting Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69f4f7a3l0i2soioqe3qysjxaw.png",
    "description": "A talisman depicting three iron arrows. Carried by soldiers long ago.",
    "effect": "Raises attack power of arrows and bolts"
    },
    {
    "source_id": "17f69659e33l0i2soj4uhpxf54ncje",
    "name": "Arsenal Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69659e33l0i2soj4uhpxf54ncje.png",
    "description": "An iron charm that resembles a mass of weaponry. Boosts maximum equipment load. This talisman was derived from an unusual greatsword, once wielded by a hero hungry for vengeance.",
    "effect": "Raises maximum equipment load"
    },
    {
    "source_id": "17f69d47ea5l0i2sokp40249x3da4f",
    "name": "Assassin's Cerulean Dagger",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69d47ea5l0i2sokp40249x3da4f.png",
    "description": "An assassin's dagger, misshapen and stained in cerulean. Critical hits restore FP.",
    "effect": "Critical hits restore FP"
    },
    {
    "source_id": "17f697e45b3l0i2sol3u2c1y0ja11",
    "name": "Assassin's Crimson Dagger",
    "image": "https://eldenring.fanapis.com/images/talismans/17f697e45b3l0i2sol3u2c1y0ja11.png",
    "description": "An assassin's dagger, misshapen and stained in crimson. Critical hits restore HP.",
    "effect": "Critical hits restore HP"
    },
    {
    "source_id": "17f69dfff40l0i2soo71h481xlxzx8i",
    "name": "Arrow's Reach Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69dfff40l0i2soo71h481xlxzx8i.png",
    "description": "A talisman depicting three arrows. Carried by hunters of beasts.",
    "effect": "Increases bow effective range."
    },
    {
    "source_id": "17f69c74ab1l0i2sp8u8ehul0cxenh",
    "name": "Axe Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69c74ab1l0i2sp8u8ehul0cxenh.png",
    "description": "A talisman depicting an axe and a warrior. Enhances charge attacks.",
    "effect": "Enhances charge attacks."
    },
    {
    "source_id": "17f697718ffl0i2sp9dowe0oahaam",
    "name": "Boltdrake Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f697718ffl0i2sp9dowe0oahaam.png",
    "description": "Talisman depicting a yellow ancient dragon. Boosts lightning damage negation.",
    "effect": "Boosts lightning damage negation."
    },
    {
    "source_id": "17f69811f79l0i2spa5kavq1z95u5i",
    "name": "Blue Dancer Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69811f79l0i2spa5kavq1z95u5i.png",
    "description": "A cloth doll depicting a dancer garbed in blue. An ancient heirloom of some sort.",
    "effect": "Raises attack power with lower equipment load"
    },
    {
    "source_id": "17f69977289l0i2spaggtt1hdtxhk4",
    "name": "Blessed Dew Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69977289l0i2spaggtt1hdtxhk4.png",
    "description": "Talisman depicting a drop of the Erdtree's sap, a blessed boon.",
    "effect": "Slowly restores HP."
    },
    {
    "source_id": "17f69659808l0i2sphoobyfsfvku2i",
    "name": "Bull-goat's Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69659808l0i2sphoobyfsfvku2i.png",
    "description": "A talisman depicting the horns of a bull-goat. Raises poise.",
    "effect": "Raises Poise"
    },
    {
    "source_id": "17f69ed62a2l0i2sq0x8kqy5oe9mwn",
    "name": "Cerulean Amber Medallion",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ed62a2l0i2sq0x8kqy5oe9mwn.png",
    "description": "A medallion with cerulean amber inlaid. Boosts maximum FP.",
    "effect": "Raises maximum FP"
    },
    {
    "source_id": "17f69e97eaal0i2sq1lvpkd5cfq2q",
    "name": "Carian Filigreed Crest",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69e97eaal0i2sq1lvpkd5cfq2q.png",
    "description": "A talisman adorned with the royal crest.",
    "effect": "Lowers FP consumed by skills"
    },
    {
    "source_id": "17f69dc1892l0i2sq1oh9i2x6tlarj",
    "name": "Cerulean Seed Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69dc1892l0i2sq1oh9i2x6tlarj.png",
    "description": "A cerulean-colored talisman patterned after an Erdtree seed. Boosts FP restoration from the Flask of Cerulean Tears.",
    "effect": "Boosts FP restoration from Flask of Cerulean Tears"
    },
    {
    "source_id": "17f69942443l0i2sq2zl2bttnq08hp",
    "name": "Clarifying Horn Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69942443l0i2sq2zl2bttnq08hp.png",
    "description": "An accoutrement worn by the ancestral followers. Raises focus. (Focus governs resistance to sleep and madness.)",
    "effect": "Raises Focus"
    },
    {
    "source_id": "17f69ba1d62l0i2sq92f4o8t2tlzp7",
    "name": "Claw Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ba1d62l0i2sq92f4o8t2tlzp7.png",
    "description": "A talisman depicting a claw and an assassin. Enhances jump attacks.",
    "effect": "Enhances jump attacks."
    },
    {
    "source_id": "17f69d61012l0i2sqr9dmioj7dxngi",
    "name": "Crucible Knot Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69d61012l0i2sqr9dmioj7dxngi.png",
    "description": "A talisman fashioned from a bony knot that embodies that aspects of various creatures. Said to have grown on the human body long ago.",
    "effect": "Reduces damage and impact of headshots"
    },
    {
    "source_id": "17f699e5a9dl0i2sqsk8mpabyj9mm4",
    "name": "Crimson Amber Medallion",
    "image": "https://eldenring.fanapis.com/images/talismans/17f699e5a9dl0i2sqsk8mpabyj9mm4.png",
    "description": "A medallion with Crimson amber inlaid. Boosts maximum HP. The Erdtree's old sap becomes amber, treasured as the most precious of jewels in the age of Godfrey, the first Elden Lord. A primordial life energy resides inside",
    "effect": "Raises maximum HP"
    },
    {
    "source_id": "17f6993bc1fl0i2sqt5xscysq45rce",
    "name": "Crucible Scale Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6993bc1fl0i2sqt5xscysq45rce.png",
    "description": "A talisman fashioned from a scale that embodies the aspects of various creatures. Said to have grown on the human body long ago.",
    "effect": "Reduces damage taken from critical hits"
    },
    {
    "source_id": "17f69b7aec7l0i2sqw1x7ajlmzguyi",
    "name": "Crepus's Vial",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69b7aec7l0i2sqw1x7ajlmzguyi.png",
    "description": "Small mysterious bottle with a dark mist sealed within.",
    "effect": "Eliminates all sound made by the wearer during movement"
    },
    {
    "source_id": "17f69ed2edfl0i2sqxgpadu0gprbn",
    "name": "Curved Sword Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ed2edfl0i2sqxgpadu0gprbn.png",
    "description": "A talisman depicting a curved sword and a swordsman. Enhances guard counters.",
    "effect": "Enhances guard counters."
    },
    {
    "source_id": "17f69d584c8l0i2srfem3zhei7qek",
    "name": "Dragoncrest Shield Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69d584c8l0i2srfem3zhei7qek.png",
    "description": "Wrought iron talisman depicting a trio of ancient dragons. Boosts physical damage negation.",
    "effect": "Boosts physical damage negation"
    },
    {
    "source_id": "17f6969e375l0i2srh8fpkcyede0z",
    "name": "Flamedrake Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6969e375l0i2srh8fpkcyede0z.png",
    "description": "Talisman depicting a red ancient dragon. Boosts fire damage negation.",
    "effect": "Boosts fire damage negation."
    },
    {
    "source_id": "17f697b6373l0i2srhja32ffmg9v7s",
    "name": "Fire Scorpion Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f697b6373l0i2srhja32ffmg9v7s.png",
    "description": "A talisman carried by assassins who strike unseen. Patterned on a scorpion freshly shed of its exoskeleton, its claws seizing a heart that burns with fire.",
    "effect": "Raises fire attack, but lowers damage negation"
    },
    {
    "source_id": "17f69c7f897l0i2srkhjmyvn5rfnva",
    "name": "Godskin Swaddling Cloth",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69c7f897l0i2srkhjmyvn5rfnva.png",
    "description": "Sacred cloth of the Godskin Apostles, made from supple skin sewn together.",
    "effect": "Successive attacks restore HP"
    },
    {
    "source_id": "17f696b2a8el0i2srkijjgnyeo45ic",
    "name": "Faithful's Canvas Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f696b2a8el0i2srkijjgnyeo45ic.png",
    "description": "A talisman bearing an icon that depicts a group of masked figures. Raises potency of incantations.",
    "effect": "Raises potency of Incantations"
    },
    {
    "source_id": "17f69882e78l0i2ss2r6zb3cbd6h3k",
    "name": "Great-jar's Arsenal",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69882e78l0i2ss2r6zb3cbd6h3k.png",
    "description": "A charm that resembles a great jar overflowing with weaponry. Vastly boosts maximum equipment load.",
    "effect": "Vastly Raises maximum equip load (~19%)"
    },
    {
    "source_id": "17f69854ae6l0i2ss4quq0gikz8cw",
    "name": "Haligdrake Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69854ae6l0i2ss4quq0gikz8cw.png",
    "description": "Talisman depicting a golden ancient dragon. Boosts holy damage negation.",
    "effect": "Boosts holy damage negation."
    },
    {
    "source_id": "17f69ecd4bdl0i2ss5cnven5hobw5d",
    "name": "Green Turtle Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ecd4bdl0i2ss5cnven5hobw5d.png",
    "description": "A talisman in the shape of a green turtle. Raises stamina recovery speed.",
    "effect": "Raises stamina recovery speed."
    },
    {
    "source_id": "17f696fc245l0i2ss7f2pzn3xdhj6n",
    "name": "Hammer Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f696fc245l0i2ss7f2pzn3xdhj6n.png",
    "description": "A talisman depicting a hammer and a knight. Enhances stamina-reducing attacks against a blocking opponent.",
    "effect": "Enhances stamina-reducing attacks against blockers."
    },
    {
    "source_id": "17f69a7ec34l0i2ss898co9a2xz8uv",
    "name": "Immunizing Horn Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69a7ec34l0i2ss898co9a2xz8uv.png",
    "description": "An accountrement worn by the ancestral followers. Raises immunity. (Immunity governs resistance to poison and rot.)",
    "effect": "Raises Immunity"
    },
    {
    "source_id": "17f69cd1ed6l0i2ssohaju8uk3qvro",
    "name": "Kindred Of Rot's Exultation",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69cd1ed6l0i2ssohaju8uk3qvro.png",
    "description": "A talisman depicting the exultation of pests.",
    "effect": "Poisoning or rot in vicinity increases attack power"
    },
    {
    "source_id": "17f69e2a905l0i2ssrfz1ym5wgjvc",
    "name": "Lightning Scorpion Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69e2a905l0i2ssrfz1ym5wgjvc.png",
    "description": "A talisman carried by assassins who strike unseen. Patterned on a scorpion freshly shed of its exoskeleton, its claws seizing a heart that sparks with lightning.",
    "effect": "Raises lightning attack, but lowers damage negation"
    },
    {
    "source_id": "17f69ca952al0i2ssu6yw9l5kfw6q",
    "name": "Longtail Cat Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ca952al0i2ssu6yw9l5kfw6q.png",
    "description": "A brooch depicting Lacrima, the long-tailed cat.",
    "effect": "Renders the wearer immune to fall damage"
    },
    {
    "source_id": "17f69bdcd53l0i2ssvjmuvkx73w1bo",
    "name": "Marika's Scarseal",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69bdcd53l0i2ssvjmuvkx73w1bo.png",
    "description": "An eye engraved with an Elden Rune. Said to be the seal of Queen Marika.",
    "effect": "Raises attributes, but also increases damage taken"
    },
    {
    "source_id": "17f69c66a45l0i2sswom5whqqzshn",
    "name": "Lord Of Blood's Exultation",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69c66a45l0i2sswom5whqqzshn.png",
    "description": "A talisman depicting the exultation of the Lord of Blood.",
    "effect": "Enhances critical hits"
    },
    {
    "source_id": "17f69b9af92l0i2st8bt7bg2grdb1h",
    "name": "Mottled Necklace",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69b9af92l0i2st8bt7bg2grdb1h.png",
    "description": "A vividly-colored accoutrement precious to the ancestral followers.",
    "effect": "Raises Robustness, Immunity, and Focus"
    },
    {
    "source_id": "17f6980d220l0i2stavhe03m4ms2yf",
    "name": "Moon Of Nokstella",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6980d220l0i2stavhe03m4ms2yf.png",
    "description": "This legendary talisman is a treasure of Nokstella, the Eternal City.",
    "effect": "Increases memory slots by 2"
    },
    {
    "source_id": "17f6967fb2dl0i2ste8y2pomb9gcj9",
    "name": "Old Lord's Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6967fb2dl0i2ste8y2pomb9gcj9.png",
    "description": "A legendary talisman depicting the ancient king whose seat lies at the heart of the storm beyond time.",
    "effect": "Extends spell effect duration"
    },
    {
    "source_id": "17f699f5086l0i2stgzl85bqm2vvy",
    "name": "Pearldrake Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f699f5086l0i2stgzl85bqm2vvy.png",
    "description": "Talisman depicting a pearlescent ancient dragon. Boosts non-physical damage negation.",
    "effect": "Boosts non-physical damage negation."
    },
    {
    "source_id": "17f69e4e872l0i2strgtb0bn8sior8",
    "name": "Primal Glintstone Blade",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69e4e872l0i2strgtb0bn8sior8.png",
    "description": "An old glintstone blade that has been stained with blood.",
    "effect": "Spells consume less FP, but maximum HP is reduced"
    },
    {
    "source_id": "17f697a330el0i2stvssvzrmkqvrx",
    "name": "Prince Of Death's Pustule",
    "image": "https://eldenring.fanapis.com/images/talismans/17f697a330el0i2stvssvzrmkqvrx.png",
    "description": "A fetid pustule taken from facial flesh. Raises vitality. (Vitality governs resistance to the effects of Death.)",
    "effect": "Raises Vitality"
    },
    {
    "source_id": "17f69db3ddfl0i2stxpa5we7cuil2",
    "name": "Radagon Icon",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69db3ddfl0i2stxpa5we7cuil2.png",
    "description": "A legendary talisman depicting the Elden Lord Radagon. Shortens the casting time of sorceries and incantations.",
    "effect": "Shortens spell casting time"
    },
    {
    "source_id": "17f69f6b0d2l0i2su0uxibci7qzsn",
    "name": "Radagon's Scarseal",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69f6b0d2l0i2su0uxibci7qzsn.png",
    "description": "An eye engraved with an Elden Rune. Said to be the seal of King Consort Radagon.",
    "effect": "Raises attributes, but also increases damage taken."
    },
    {
    "source_id": "17f696a52c1l0i2su2ddt9cbw3bnog",
    "name": "Radagon's Soreseal",
    "image": "https://eldenring.fanapis.com/images/talismans/17f696a52c1l0i2su2ddt9cbw3bnog.png",
    "description": "This legendary talisman is an eye engraved with an Elden Rune, said to be the seal of King Consort Radagon.",
    "effect": "Greatly raises attributes, but also increases damage taken"
    },
    {
    "source_id": "17f69e49085l0i2sudupmymnf7is0e",
    "name": "Sacred Scorpion Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69e49085l0i2sudupmymnf7is0e.png",
    "description": "A talisman carried by assassins who strike unseen. Patterned on a scorpion freshly shed of its exoskeleton, its claws seizing a heart with a blessed glow.",
    "effect": "Raises holy attack, but lowers damage negation."
    },
    {
    "source_id": "17f6966d3a9l0i2suh41ayrux3telz",
    "name": "Sacrificial Twig",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6966d3a9l0i2suh41ayrux3telz.png",
    "description": "A talisman fashioned from a dried twig, so slender that it might snap at the slightest touch.",
    "effect": "Will be lost on death in place of runes."
    },
    {
    "source_id": "17f697d1dacl0i2sui3ut73lui72f",
    "name": "Shabriri's Woe",
    "image": "https://eldenring.fanapis.com/images/talismans/17f697d1dacl0i2sui3ut73lui72f.png",
    "description": "Disturbing likeness of a man whose eyes have been gouged out. The corners of his mouth are upturned in an almost flirtatious manner.",
    "effect": "Constantly attracts enemies' aggression"
    },
    {
    "source_id": "17f69b80630l0i2sum3q22drl273qe",
    "name": "Spelldrake Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69b80630l0i2sum3q22drl273qe.png",
    "description": "Talisman depicting a blue ancient dragon. Boosts magic damage negation.",
    "effect": "Boosts magical damage negation."
    },
    {
    "source_id": "17f69726e74l0i2sunvmav2rtqj9e",
    "name": "Stargazer Heirloom",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69726e74l0i2sunvmav2rtqj9e.png",
    "description": "A talisman engraved with the legend of a queen. Raises intelligence.",
    "effect": "Raises intelligence by 5."
    },
    {
    "source_id": "17f6964b6cbl0i2suzpeqzc8p0p31a",
    "name": "Twinblade Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6964b6cbl0i2suzpeqzc8p0p31a.png",
    "description": "A talisman depicting a twinblade and a confessor. Enhances the final hit ending a chain of attacks.",
    "effect": "Enhances final hit of chain attacks."
    },
    {
    "source_id": "17f69ebbca4l0i2suzy77ydy8c49x",
    "name": "Taker's Cameo",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ebbca4l0i2suzy77ydy8c49x.png",
    "description": "A talisman engraved with a stern likeness of Praetor Rykard, master of Volcano Manor.",
    "effect": "Restores HP upon defeating enemies"
    },
    {
    "source_id": "17f697e6e60l0i2sv6zgblnfuco5k5",
    "name": "Starscourge Heirloom",
    "image": "https://eldenring.fanapis.com/images/talismans/17f697e6e60l0i2sv6zgblnfuco5k5.png",
    "description": "A talisman engraved with a scene from a heroic tale. Raises strength.",
    "effect": "Raises strength"
    },
    {
    "source_id": "17f697609cfl0i2sv7ve0yxa2u67ps",
    "name": "Viridian Amber Medallion",
    "image": "https://eldenring.fanapis.com/images/talismans/17f697609cfl0i2sv7ve0yxa2u67ps.png",
    "description": "A medallion with viridian amber inlaid. Boosts maximum stamina. The Erdtree's old sap becomes amber, treasured as the most precious of jewels in the age of Godfrey, the first Elden Lord. A primordial life energy resides inside",
    "effect": "Raises maximum stamina"
    },
    {
    "source_id": "17f69b8ff63l0i2svfsqagao13n1q",
    "name": "Two Fingers Heirloom",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69b8ff63l0i2svfsqagao13n1q.png",
    "description": "A talisman engraved with the legend of the Two Fingers. Raises faith.",
    "effect": "Raises faith by 5."
    },
    {
    "source_id": "17f69a2445bl0i2svl6l9dei5cxhbd",
    "name": "Winged Sword Insignia",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69a2445bl0i2svl6l9dei5cxhbd.png",
    "description": "A talisman depicting a raised prosthetic blade. An honor bestowed upon the knights who fought alongside Malenia the Severed.",
    "effect": "Raises attack power with successive attacks"
    },
    {
    "source_id": "17f69f205a0l0i2svmo2djg04dhvj4",
    "name": "Erdtree's Favor",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69f205a0l0i2svmo2djg04dhvj4.png",
    "description": "A talisman depicting a special blessing of the Erdtree. Slightly raises maximum HP, stamina, and equip load.",
    "effect": "Raises maximum HP, stamina and equip load"
    },
    {
    "source_id": "17f699b6e58l0i2svqah8qxabssa6s",
    "name": "Crimson Seed Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f699b6e58l0i2svqah8qxabssa6s.png",
    "description": "A crimson-colored talisman patterned after an Erdtree seed. Boosts HP restoration from the Flask of Crimson Tears.",
    "effect": "Boosts HP regeneration from Flask of Crimson Tears"
    },
    {
    "source_id": "17f69d7c380l0i2sw0rxwfk68fidwr",
    "name": "Graven-school Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69d7c380l0i2sw0rxwfk68fidwr.png",
    "description": "A talisman depicting a school of graven mages, the nightmare of the academy.",
    "effect": "Raises potency of sorceries"
    },
    {
    "source_id": "17f69c0c973l0i2sw8w6uvbwqiqfmy",
    "name": "Godfrey Icon",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69c0c973l0i2sw8w6uvbwqiqfmy.png",
    "description": "A legendary talisman depicting the Elden Lord Godfrey. Raises charge attack power of sorceries, incantations, and skills.",
    "effect": "Enhances charged spells and skills."
    },
    {
    "source_id": "17f69858252l0i2swaqtyccdf5kihk",
    "name": "Lance Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69858252l0i2swaqtyccdf5kihk.png",
    "description": "A talisman depicting a lance and a knight. Enhances attacks while on horseback.",
    "effect": "Enhances attacks on horseback"
    },
    {
    "source_id": "17f69ee87e3l0i2swe4iei5nanxbr",
    "name": "Graven-mass Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ee87e3l0i2swe4iei5nanxbr.png",
    "description": "A talisman depicting the first school of graven mages — a nightmare that would continue to haunt the academy.  Greatly raises potency of sorceries.  The primeval current is a forbidden tradition of glintstone sorcery. To those who cleave to its teachings, the act of collecting sorcerers to fashion them into the seeds of stars is but another path of scientific inquiry.",
    "effect": "Greatly raises potency of sorceries."
    },
    {
    "source_id": "17f6967466bl0i2swi5et1ibv4rc6r",
    "name": "Ancestral Spirit's Horn",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6967466bl0i2swi5et1ibv4rc6r.png",
    "description": "Item cut from the horns of the Regal Ancestor Spirit.",
    "effect": "Restores FP upon defeating enemies"
    },
    {
    "source_id": "17f69990291l0i2swl19cw8v99d5tk",
    "name": "Stalwart Horn Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69990291l0i2swl19cw8v99d5tk.png",
    "description": "An accoutrement worn by the ancestral followers. Greatly raises robustness. (Robustness governs resistance to blood loss and frost.)  Said to be a budding horn. The ancestral followers believe that the horns of a long-lived beast continue to bud like antlers, over and over again, until the beast one day becomes an ancestral spirit.",
    "effect": "Greatly raises robustness"
    },
    {
    "source_id": "17f696b90dbl0i2sws9twxdvi39xzf",
    "name": "Dragoncrest Greatshield Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f696b90dbl0i2sws9twxdvi39xzf.png",
    "description": "Legendary talisman of wrought iron depicting a massive ancient dragon. Enormously boosts physical damage negation.",
    "effect": "Enormously boosts physical damage negation"
    },
    {
    "source_id": "17f69c504f2l0i2swunxt9oun5dn9",
    "name": "Marika's Soreseal",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69c504f2l0i2swunxt9oun5dn9.png",
    "description": "This legendary talisman is an eye engraved with an Elden Rune, said to be the seal of Queen Marika.",
    "effect": "Greatly raises attributes, but also increases damage taken."
    },
    {
    "source_id": "17f69d1b2c0l0i2sx1e2ftbrqshztb",
    "name": "Gold Scarab",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69d1b2c0l0i2sx1e2ftbrqshztb.png",
    "description": "A talisman facsimile of a scarab, the carrier of treasures and precious things.",
    "effect": "Increases runes obtained from"
    },
    {
    "source_id": "17f699ae959l0i2sx3bloupcziqiz",
    "name": "Ritual Sword Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f699ae959l0i2sx3bloupcziqiz.png",
    "description": "A talisman patterned after swords used in ritual combat held to honor the Erdtree.",
    "effect": "Raises attack power when HP is at maximum."
    },
    {
    "source_id": "17f699e1a3al0i2sxkv62fi32hab4",
    "name": "Ritual Shield Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f699e1a3al0i2sxkv62fi32hab4.png",
    "description": "A talisman patterned after shields used in ritual combat held to honor the Erdtree.",
    "effect": "Raises defense when HP is at maximum."
    },
    {
    "source_id": "17f69e92d45l0i2sxmogqn2tdfna89",
    "name": "Perfumer's Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69e92d45l0i2sxmogqn2tdfna89.png",
    "description": "A talisman depicting a set of perfume bottles. Raises potency of perfume items.",
    "effect": "Raises potency of perfume items"
    },
    {
    "source_id": "17f69b3ce89l0i2sxo7j01c9t4v2b",
    "name": "Blue-feathered Branchsword",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69b3ce89l0i2sxo7j01c9t4v2b.png",
    "description": "A talisman adorned with blue feathers, once used in ancient death rituals.",
    "effect": "Raises defense when HP is low."
    },
    {
    "source_id": "17f69747fbcl0i2sxow29iyn6fm75v",
    "name": "Magic Scorpion Charm",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69747fbcl0i2sxow29iyn6fm75v.png",
    "description": "A talisman carried by assassins who strike unseen. Patterned on a scorpion freshly shed of its exoskeleton, its claws seizing a heart that shimmers with magic.",
    "effect": "Raises magic attack, but lowers damage negation"
    },
    {
    "source_id": "17f69c86334l0i2sy3lip14s6g9qa",
    "name": "Prince Of Death's Cyst",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69c86334l0i2sy3lip14s6g9qa.png",
    "description": "A fetid, overgrown cyst taken from facial flesh. Greatly raises vitality. (Vitality governs resistance to the effects of Death.)",
    "effect": "Greatly raises vitality"
    },
    {
    "source_id": "17f69f4710al0i2sy6gpkd85ki28",
    "name": "Warrior Jar Shard",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69f4710al0i2sy6gpkd85ki28.png",
    "description": "Shard of a shattered warrior jar.",
    "effect": "Boosts the attack power of skills."
    },
    {
    "source_id": "17f698e1ea9l0i2sy8csbpc3y128lo",
    "name": "Shard Of Alexander",
    "image": "https://eldenring.fanapis.com/images/talismans/17f698e1ea9l0i2sy8csbpc3y128lo.png",
    "description": "Shard of the late Alexander, a shattered warrior jar.",
    "effect": "Greatly boosts the attack power of skills."
    },
    {
    "source_id": "17f69ba2ff0l0i2sye3sdb94vc6u6j",
    "name": "Greatshield Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ba2ff0l0i2sye3sdb94vc6u6j.png",
    "description": "Talisman depicting a knight holding a greatshield. Boosts guarding ability.",
    "effect": "Boosts guarding ability."
    },
    {
    "source_id": "17f69afb835l0i2sykg6ynuw6wl9b",
    "name": "Millicent's Prosthesis",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69afb835l0i2sykg6ynuw6wl9b.png",
    "description": "Part of the golden prosthesis used by Millicent. The hand is locked into a fist that once raised a sword aloft.",
    "effect": "Boosts dexterity, raises attack power with successive attacks"
    },
    {
    "source_id": "17f69e13918l0i2syr0vvb0gg1l8xg",
    "name": "Spear Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69e13918l0i2syr0vvb0gg1l8xg.png",
    "description": "A talisman depicting a spear and a soldier. Enhances the counterattacks that are unique to thrusting weapons.",
    "effect": "Enhances counterattacks unique to thrusting weapons"
    },
    {
    "source_id": "17f6991130cl0i2sywsfxyysl6tz7h",
    "name": "Dagger Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6991130cl0i2sywsfxyysl6tz7h.png",
    "description": "A talisman depicting a dagger and a surgeon. Enhances critical hits.",
    "effect": "Enhances critical hits."
    },
    {
    "source_id": "17f69ad7529l0i2syzo9ji7wrucoq5",
    "name": "Red-feathered Branchsword",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69ad7529l0i2syzo9ji7wrucoq5.png",
    "description": "A talisman adorned with red feathers, once used in ancient death rituals.",
    "effect": "Raises attack power when HP is low."
    },
    {
    "source_id": "17f69eaed7fl0i2sz3buubfj570rq",
    "name": "Companion Jar",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69eaed7fl0i2sz3buubfj570rq.png",
    "description": "A talisman given by the jars to their friends. Raises potency of thrown jars.",
    "effect": "Raises potency of throwing pots"
    },
    {
    "source_id": "17f6976f6b0l0i2szav175mw9xww9x",
    "name": "Flock's Canvas Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f6976f6b0l0i2szav175mw9xww9x.png",
    "description": "A talisman bearing an icon that depicts a mass of masked figures. Greatly raises potency of incantations.",
    "effect": "Greatly raises potency of Incantations."
    },
    {
    "source_id": "17f69c9bfc8l0i2sze3h5gawcr577p",
    "name": "Concealing Veil",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69c9bfc8l0i2sze3h5gawcr577p.png",
    "description": "Talisman put together from dark cloth with a lustrous sheen",
    "effect": "Conceals wearer while crouching away from foes"
    },
    {
    "source_id": "17f69cdc905l0i2szmkk79ces1m9ea",
    "name": "Furled Finger's Trick-mirror",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69cdc905l0i2szmkk79ces1m9ea.png",
    "description": "A small, clouded mirror that reflects a flesh-and-blood figure. Makes the bearer take on the appearance of a Host of Fingers One of the ritual implements created by the Tarnished to deceive invaders.",
    "effect": "Take on appearance of a Host of Fingers"
    },
    {
    "source_id": "17f69d33e2dl0i2szt872otxd3taua",
    "name": "Crucible Feather Talisman",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69d33e2dl0i2szt872otxd3taua.png",
    "description": "A talisman fashioned from feathers that embody the aspects of various creatures. Said to have grown on the human body long ago.",
    "effect": "Improves dodge rolling but increases damage taken"
    },
    {
    "source_id": "17f699d64d5l0i2szu3wjjkmeqklc",
    "name": "Daedicar's Woe",
    "image": "https://eldenring.fanapis.com/images/talismans/17f699d64d5l0i2szu3wjjkmeqklc.png",
    "description": "Disturbing likeness of a woman whose skin was flayed. She smiles with a serene tenderness.",
    "effect": "Increases damage taken"
    },
    {
    "source_id": "17f69e0bce6l0i2szv2ltfxx820p4e",
    "name": "Host's Trick-mirror",
    "image": "https://eldenring.fanapis.com/images/talismans/17f69e0bce6l0i2szv2ltfxx820p4e.png",
    "description": "A small, clouded mirror that reflects a flesh-and-blood figure.",
    "effect": "Take on appearance of a cooperator"
    },
    {
    "source_id": "17f696c4991l0i2szwm52zrw4bgso4",
    "name": "Entwining Umbilical Cord",
    "image": "https://eldenring.fanapis.com/images/talismans/17f696c4991l0i2szwm52zrw4bgso4.png",
    "description": "Mysterious circular object that's oddly warped. Changes the demeanour of the wearer's actions.",
    "effect": "Changes demeanour of wearer's actions"
    }
];



const seedTalisman = () => Talisman.collection.insertMany(talismanData);

module.exports = seedTalisman;