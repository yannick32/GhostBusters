// 0 = EMF level 5
// 1 = Spirit Box
// 2 = Fingerprints
// 3 = Ghost Orbs
// 4 = Ghost Writings
// 5 = Freezing Temperatures
// 6 = D.O.T.S Projector

const evidenceTypes = [
    {
        name: "EMF Level 5",
        id: "emf"
    },
    {
        name: "Spirit Box",
        id: "spiritbox"
    },
    {
        name: "Fingerprints",
        id: "fingerprints"
    },
    {
        name: "Ghost Orbs",
        id: "ghostorbs"
    },
    {
        name: "Ghost Writings",
        id: "ghostwritings"
    },
    {
        name: "Freezing Temps",
        id: "freezingtemperatures"
    },
    {
        name: "D.O.T.S Projector",
        id: "dotsProjector"
    }
];

const ghostInfos = [
    {
        name: "spirit",
        evidences: [0, 1, 4],
        description:
            "<b>EMF Level 5 + Spiritbox + Writings</b><br />No strengths. <span class='weakness'>Smudge sticks will pacify it for a while.</span>",
    },
    {
        name: "wraith",
        evidences: [0, 1, 6],
        description:
            "<b>EMF Level 5 + Spiritbox + Projector</b><br />Floats, footsteps rare. <span class='weakness'>Has toxicity to salt.</span>",
    },
    {
        name: "phantom",
        evidences: [1, 2, 6],
        description:
            "<b>Spiritbox + Fingerprints + Projector</b><br />Seeing it drops sanity fast. <span class='weakness'>Taking its photo makes it hide for a while.</span>",
    },
    {
        name: "poltergeist",
        evidences: [1, 2, 4],
        description:
            "<b>Spiritbox + Fingerprints + Writings</b><br />Can throw objects around. <span class='weakness'>Ineffective in empty rooms.</span>",
    },
    {
        name: "banshee",
        evidences: [2, 3, 6],
        description:
            "<b>Fingerprints + Orbs + Projector</b><br />Targets lone individuals. <span class='weakness'>Fears crucifix & less aggressive near them.</span>",
    },
    {
        name: "jinn",
        evidences: [0, 2, 5],
        description:
            "<b>EMF Level 5 + Fingerprints + Freezing temps</b><br />Travels fast if victim is far. <span class='weakness'>Kill electricity to stop its powers.</span>",
    },
    {
        name: "mare",
        evidences: [1, 3, 4],
        description:
            "<b>Spiritbox + Orbs + Writings</b><br />More chances to attack in darkness. <span class='weakness'>Turn lights on to reduce aggression.</span>",
    },
    {
        name: "revenant",
        evidences: [3, 4, 5],
        description:
            "<b>Orbs + Writings + Freezing temps</b><br />Travels fast when hunting. <span class='weakness'>Moves slowly if it can't see humans.</span>",
    },
    {
        name: "shade",
        evidences: [0, 4, 5],
        description:
            "<b>EMF Level 5 + Writings + Freezing temps</b><br />Shy/hard to find. Less activity around groups. <span class='weakness'>Can't hunt if multiple people around.</span>",
    },
    {
        name: "demon",
        evidences: [2, 4, 5],
        description:
            "<b>Fingerprints + Writings + Freezing temps</b><br />Very aggressive. Attacks often. <span class='weakness'>Ouija board use won't affect sanity.</span>",
    },
    {
        name: "yurei",
        evidences: [3, 5, 6],
        description:
            "<b>Orbs + Freezing temps + Projector</b><br />Strong effect on sanity. <span class='weakness'>Smudging its room contains it to that room for a while.</span>",
    },
    {
        name: "oni",
        evidences: [0, 5, 6],
        description:
            "<b>EMF Level 5 + Freezing temps + Projector</b><br />More active with people nearby. <span class='weakness'>High activity makes it easier to find and identify.</span>",
    },
    {
        name: "hantu",
        evidences: [2, 3, 5],
        description:
            "<b>Fingerprints + Orbs + Freezing temps</b><br />Lower temperatures can cause the Hantu to move at faster speeds. <span class='weakness'>A Hantu will move slower in warmer areas.</span>",
    },
    {
        name: "yokai",
        evidences: [1, 3, 6],
        description:
            "<b>Spiritbox + Orbs + Projector</b><br />Talking near a Yokai will anger it and increase it's chance of attacking. <span class='weakness'>When hunting a Yokai can only hear voices close to it.</span>",
    },
    {
        name: "Goryo",
        evidences: [0, 2, 6],
        description:
            "<b>EMF Level 5 + Fingerprints + D.O.T.S Projector</b><br />Will only show itself on camera when no people are there. <span class='weakness'>Rarely seen far from place of death</span>"
    },
    {
        name: "Myling",
        evidences: [0, 2, 4],
        description:
            "<b>EMF Level 5 + Fingerprints + Ghost Writing</b><br />Quiter when hunting <span class='weakness'>More paranormal sound</span>"
    }
];