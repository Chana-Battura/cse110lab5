// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const dropdown = document.getElementById("voice-select");
  const playBtn = document.querySelector('button');
  const textArea = document.getElementById("text-to-speak");
  const smiley = document.querySelector('img');

  function populate() {
    const voices = synth.getVoices();
    dropdown.innerHTML = ' ';
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      dropdown.appendChild(option);  
    }
  }
  populate();
  synth.addEventListener("voiceschanged", (event) => populate());

  playBtn.addEventListener("click", (event)=>{
    if (synth.speaking){
      return;
    }
    let utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = dropdown.selectedOptions[0].getAttribute('data-name');
    const voices = synth.getVoices();
    utterance.voice = voices.find(voice => voice.name === selectedOption);
    utterance.addEventListener("start", (event)=> {
      smiley.src = "assets/images/smiling-open.png";
    });  
    utterance.addEventListener("end", (event)=> {
      smiley.src = "assets/images/smiling.png";
    }); 
    synth.speak(utterance);

  });
}