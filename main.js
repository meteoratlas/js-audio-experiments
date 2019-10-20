//import Tone from "./node_modules/tone/Tone";

var synth = new Tone.MembraneSynth().toMaster()
var division = 1;

//create a loop
var loop = new Tone.Loop(function(time){
    synth.triggerAttackRelease("C4", "8n", time)
    division %= 16;
    division++;

    Tone.Draw.schedule(function(time) {
        //the callback synced to the animation frame
        const column = document.querySelector("#sq1-" + division);
        column.classList.add("active");
        setTimeout(() => {
            column.classList.remove("active");
        }, 100);
    });

}, "16n")

//play the loop between 0-2m on the transport
loop.start(0.1);
document.querySelector('#tone-toggle').addEventListener('click', e =>  { Tone.Transport.toggle()})