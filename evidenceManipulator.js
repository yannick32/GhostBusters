// Do not touch v
function getGhostInfoMatches(present, notPresent) {
    return Object.values(
        _.pickBy(
            _.omitBy(ghostInfos, (ghost) =>
                ghost.evidences.some((r) => notPresent.indexOf(r) >= 0)
            ),
            (ghost) => present.every((r) => ghost.evidences.indexOf(r) >= 0)
        )
    );
}

function getRemainingEvidenceIds(present, notPresent) {
    return _.difference(
        _.flatMap(
            getGhostInfoMatches(present, notPresent),
            (gi) => gi.evidences
        ),
        present
    );
}

// Do not touch ^
let evidenceArray = [];

function toggleEvidence(evidence) {
    // console.clear();
    // if that evidence doesn't exist in the array (-1)
    if (evidenceArray.indexOf(evidence) === -1) {
        evidenceArray.push(evidence);
    } else {
        evidenceArray.splice(evidenceArray.indexOf(evidence), 1);
    }

    // get ghost matches according to entered evidence
    document.getElementById("possibleGhosts").innerHTML = "";

    getGhostInfoMatches(evidenceArray, []).forEach((ghostInfo) => {
        // getGhostMatches([foundEvidence], [missingEvidence])
        document.getElementById("possibleGhosts").innerHTML +=
            "<li>" + ghostInfo.name + "</li> <p>" + ghostInfo.description;
    });

    if (evidenceArray.length == 0) {
        document.getElementById("possibleGhosts").innerHTML =
            "<br /><p>We need tangible evidence. I should check rooms with an EMF reader for activity, or a thermometer for sub-zero temperatures.</p>";
    }

    let remainingEvidence = getRemainingEvidenceIds(evidenceArray, []);
    evidenceTypes.forEach((value, i) => {
        if (evidenceArray.indexOf(i) >= 0)
            setState(i, 2);
        else if (remainingEvidence.indexOf(i) < 0)
            setState(i, 3);
        else
            setState(i, 1);
    });
}

function setState(evidenceKey, state) {
    let classList = document.getElementById(evidenceTypes[evidenceKey].id).classList;
    switch (state) {
        case 1: // open
        default:
            classList.remove("checked");
            classList.remove("disabled");
            break;
        case 2: //checked
            classList.add("checked");
            classList.remove("disabled");
            break;
        case 3: // disabled
            classList.remove("checked");
            classList.add("disabled");
            break;
    }
}

function resetEvidence() {
    evidenceArray = [];
    evidenceTypes.forEach((_, i) => setState(i, 1));
}