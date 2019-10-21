// init

document.querySelector("body").addEventListener("click", (e)=>{
    if (!e.target.classList.contains("seq-switch")) {
        return false;
    }
    if (e.target.classList.contains("switch-active")){
        e.target.classList.remove("switch-active");
    }
    else { e.target.classList.add("switch-active"); }
})

// setup tone

//var synth = new Tone.MembraneSynth().toMaster()
var synth = new Tone.PolySynth(5, Tone.Synth, {
    oscillator : {
          type : "square"
      }
  }).toMaster();
Tone.Transport.bpm.value = 80;
//Tone.Transport.latencyHint = 'fastest';
var division = 1;

//create a loop
var loop = new Tone.Loop(function(time){
    let chord = ["C3", "E3", "G3"];
    synth.triggerAttackRelease(chord, "64n")
    division %= 16;
    division++;

    Tone.Draw.schedule(function(time) {
        //the callback synced to the animation frame
        const column = document.querySelector("#sq1-" + division);
        column.classList.add("col-active");
        setTimeout(() => {
            column.classList.remove("col-active");
        }, 100);
    });

}, "16n")

//play the loop between 0-2m on the transport
loop.start(0);
document.querySelector('#tone-toggle').addEventListener('click', e =>  { Tone.Transport.toggle()})