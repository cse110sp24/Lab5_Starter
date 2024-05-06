// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  console.log('before')
  const talkButton = document.getElementsByTagName('button')[0];
  console.log(talkButton)
  const faceImage = document.querySelector('img[src="assets/images/smiling.png"]');

  talkButton.addEventListener('click', () => {
    const text = document.getElementById('text-to-speak').value;
    const utterThis = new SpeechSynthesisUtterance(text);
    const voiceSelect = document.getElementById('voice-select');


    const selectedOption = voiceSelect.options[voiceSelect.selectedIndex];
    const name = selectedOption.getAttribute('data-name');

    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === name);

    utterThis.voice = selectedVoice;
    speechSynthesis.speak(utterThis);

    utterThis.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
  
    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  })
}

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    // if (voices[i].default) {
    //   option.textContent += " — DEFAULT";
    // }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}
