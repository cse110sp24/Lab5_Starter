// expose.js

window.addEventListener('DOMContentLoaded', init);
const confetti = new JSConfetti();

function init() {
  const hornImage = document.querySelector('img[src="assets/images/no-image.png"]');
  const hornSelect = document.getElementById('horn-select');
  const hornAudio = document.getElementsByClassName('hidden')[0];
  
  let haveConfetti = false;
  let somethingSelected = false;

  hornSelect.addEventListener('change', () => {
    hornImage.src = 'assets/images/' + hornSelect.value + '.svg';
    // console.log(hornAudio)
    // console.log('assets/images/' + hornSelect.value + '.svg')
    hornAudio.src = 'assets/audio/' + hornSelect.value + '.mp3';
    // console.log(hornAudio.src)
    haveConfetti = (hornSelect.value === 'party-horn') ? true : false;
    somethingSelected = true;
  })

  const volume = document.getElementById('volume');
  const audioImage = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');

  volume.addEventListener('input', () => {
    console.log(volume.value / 100)

    hornAudio.volume = volume.value / 100;
    if (volume.value / 100 < .33) {
      audioImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volume.value / 100 < .67) {
      audioImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      console.log('else')
      audioImage.src = 'assets/icons/volume-level-3.svg';
    }
  })

  const playButton = document.getElementsByTagName('button')[0]
  // console.log(playButton)
  playButton.addEventListener('click', () => {
    if (somethingSelected) {
      hornAudio.play();
    }
    if (haveConfetti) {
      confetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      })
    }
  })
}