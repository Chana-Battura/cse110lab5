// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropDown = document.getElementById("horn-select");
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const hornAudio = document.querySelector("audio");
  const volSlider = document.getElementById("volume");
  const volImage = document.querySelector('img[alt="Volume level 2"]');
  const playBtn = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  dropDown.addEventListener("change", (event) => {
    hornImage.src = "assets/images/" + event.target.value + ".svg";
    hornAudio.src =  "assets/audio/" + event.target.value + ".mp3";
  });

  volSlider.addEventListener("input", (event) => {
    const vol = event.target.value;
    if (vol == 0){
      volImage.src = "assets/icons/volume-level-0.svg";
    } else if (vol < 33) {
      volImage.src = "assets/icons/volume-level-1.svg";
    } else if (vol < 67) {
      volImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volImage.src = "assets/icons/volume-level-3.svg";
    }
    
    hornAudio.volume = vol/100.0;
  });

  playBtn.addEventListener("click", (event) => {
    if (dropDown.value == "party-horn"){
      jsConfetti.addConfetti();
    }
    hornAudio.play();
  });

}