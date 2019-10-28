let samplers = [];
samplers.push(
    new Tone.Sampler({
        C2: "../casio/C2.mp3"
    }).toMaster()
);
samplers.push(
    new Tone.Sampler({
        C3: "../casio/thud.mp3"
    }).toMaster()
);
samplers.push(
    new Tone.Sampler({
        C3: "../casio/ECSTone21.wav"
    }).toMaster()
);
samplers.push(
    new Tone.Sampler({
        C3: "../casio/G2.mp3"
    }).toMaster()
);

let chords = [["C3", "C4", "G3"], ["C0", "C1", "G3"], ["E4", "G4", "E5"], ["C6", "G5", "C4"]];

const loop = new Tone.Loop(function(time) {
    for (let s = 0; s<samplers.length; s++){
        samplers[s].triggerAttackRelease(chords[s], "64n");
    }
}, "16n");

loop.start(0);

// requires user input to init audio context
document.querySelector("html").addEventListener("click", ()=>{
    Tone.Transport.toggle();
});