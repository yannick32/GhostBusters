// 0 = EMF level 5
// 1 = Spirit Box
// 2 = Fingerprints
// 3 = Ghost Orbs
// 4 = Ghost Writings
// 5 = Freezing Temperatures
// 6 = D.O.T.S Projector

const evidenceTypes = [
    { // 0
        name: "EMF Level 5",
        id: "emf"
    },
    { // 1
        name: "Spirit Box",
        id: "spiritbox"
    },
    { // 2
        name: "Fingerprints",
        id: "fingerprints"
    },
    { // 3
        name: "Ghost Orbs",
        id: "ghostorbs"
    },
    { // 4
        name: "Ghost Writings",
        id: "ghostwritings"
    },
    { // 5
        name: "Freezing Temps",
        id: "freezingtemperatures"
    },
    { // 6
        name: "D.O.T.S Projector",
        id: "dotsProjector"
    }
];

const ghostInfos = [
    {
        name: "Spirit",
        evidences: [0, 1, 4],
        description:
            "<b>EMF Level 5 + Spirit Box + Writings</b><br />No strengths.<br /><span class='weakness'>Smudge sticks will pacify it for a while.</span>",
    },
    {
        name: "Wraith",
        evidences: [0, 1, 6],
        description:
            "<b>EMF Level 5 + Spirit Box + Projector</b><br />Floats, footsteps rare.<br /><span class='weakness'>Has toxicity to salt.</span>",
    },
    {
        name: "Phantom",
        evidences: [1, 2, 6],
        description:
            "<b>Spirit Box + Fingerprints + Projector</b><br />Seeing it drops sanity fast.<br /><span class='weakness'>Taking its photo makes it hide for a while.</span>",
    },
    {
        name: "Poltergeist",
        evidences: [1, 2, 4],
        description:
            "<b>Spirit Box + Fingerprints + Writings</b><br />Can throw objects around.<br /><span class='weakness'>Ineffective in empty rooms.</span>",
    },
    {
        name: "Banshee",
        evidences: [2, 3, 6],
        description:
            "<b>Fingerprints + Orbs + Projector</b><br />Targets lone individuals.<br /><span class='weakness'>Fears crucifix & less aggressive near them.</span>",
    },
    {
        name: "Jinn",
        evidences: [0, 2, 5],
        description:
            "<b>EMF Level 5 + Fingerprints + Freezing temps</b><br />Travels fast if victim is far.<br /><span class='weakness'>Kill electricity to stop its powers.</span>",
    },
    {
        name: "Mare",
        evidences: [1, 3, 4],
        description:
            "<b>Spirit Box + Orbs + Writings</b><br />More chances to attack in darkness.<br /><span class='weakness'>Turn lights on to reduce aggression.</span>",
    },
    {
        name: "Revenant",
        evidences: [3, 4, 5],
        description:
            "<b>Orbs + Writings + Freezing temps</b><br />Travels fast when hunting.<br /><span class='weakness'>Moves slowly if it can't see humans.</span>",
    },
    {
        name: "Shade",
        evidences: [0, 4, 5],
        description:
            "<b>EMF Level 5 + Writings + Freezing temps</b><br />Shy/hard to find. Less activity around groups.<br /><span class='weakness'>Can't hunt if multiple people around.</span>",
    },
    {
        name: "Demon",
        evidences: [2, 4, 5],
        description:
            "<b>Fingerprints + Writings + Freezing temps</b><br />Very aggressive. Attacks often.<br /><span class='weakness'>Ouija board use won't affect sanity.</span>",
    },
    {
        name: "Yurei",
        evidences: [3, 5, 6],
        description:
            "<b>Orbs + Freezing temps + Projector</b><br />Strong effect on sanity.<br /><span class='weakness'>Smudging its room contains it to that room for a while.</span>",
    },
    {
        name: "Oni",
        evidences: [0, 5, 6],
        description:
            "<b>EMF Level 5 + Freezing temps + Projector</b><br />More active with people nearby.<br /><span class='weakness'>High activity makes it easier to find and identify.</span>",
    },
    {
        name: "Hantu",
        evidences: [2, 3, 5],
        description:
            "<b>Fingerprints + Orbs + Freezing temps</b><br />Lower temperatures can cause the Hantu to move at faster speeds.<br /><span class='weakness'>A Hantu will move slower in warmer areas.</span>",
    },
    {
        name: "Yokai",
        evidences: [1, 3, 6],
        description:
            "<b>Spirit Box + Orbs + Projector</b><br />Talking near a Yokai will anger it and increase it's chance of attacking.<br /><span class='weakness'>When hunting a Yokai can only hear voices close to it.</span>",
    },
    {
        name: "Goryo",
        evidences: [0, 2, 6],
        description:
            "<b>EMF Level 5 + Fingerprints + D.O.T.S Projector</b><br />Will only show itself on camera when no people are there.<br /><span class='weakness'>Rarely seen far from place of death</span>"
    },
    {
        name: "Myling",
        evidences: [0, 2, 4],
        description:
            "<b>EMF Level 5 + Fingerprints + Ghost Writing</b><br />Quiter when hunting<br /><span class='weakness'>More paranormal sound</span>"
    },
    {
        name: "Onryo",
        evidences: [1, 3, 5],
        description:
            "<b>Spirit Box + Orbs + Freezing temps</b><br />Can attack after extinguishing a flame<br /><span class='weakness'>Less likely to hunt when threatened</span>"
    },
    {
        name: "The Twins",
        evidences: [0, 1, 5],
        description:
            "<b>EMF Level 5 + Spirit Box + Freezing temps</b><br />Either Twin can be angered and initiate an attack<br /><span class='weakness'>The Twins will often interact with the environment at the same time</span>"
    },
    {
        name: "Raiju",
        evidences: [0, 3, 6],
        description:
            "<b>EMF Level 5 + Orbs + D.O.T.S Projector</b><br />Can siphon power from nearby electrical devices to move faster<br /><span class='weakness'>Easier to track because of the electrical interferance</span>"
    },
    {
        name: "Obake",
        evidences: [0, 2, 3],
        description:
            "<b>EMF Level 5 + Fingerprints + Orbs</b><br />Rarely leaves traces on interaction<br /><span class='weakness'>Might shapeshift leaving behind unique evidence</span>"
    },
];