//import Tone from "./node_modules/tone/Tone";

var synth = new Tone.MembraneSynth().toMaster()

//create a loop
var loop = new Tone.Loop(function(time){
	synth.triggerAttackRelease("C1", "8n", time)
}, "4n")

//play the loop between 0-2m on the transport
loop.start(0).stop('2m')
document.querySelector('#tone-toggle').addEventListener('click', e =>  { Tone.Transport.toggle()})