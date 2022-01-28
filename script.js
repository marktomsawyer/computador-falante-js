var voices = speechSynthesis.getVoices();
const voice = voices.filter((voice) => voice.lang.includes("BR"))[0];

function addPlayButton() {
  const paragrafos = document.querySelectorAll("p");
  paragrafos.forEach(p => {
    const paragrafo = {
      text: p.innerText,
      ouvir: function () {
        const utterance = new SpeechSynthesisUtterance(this.text);
        utterance.voice = voice;
        speechSynthesis.speak(utterance);
      },
    };
    const button = document.createElement("button")
    button.innerText = "Ouvir"
    button.addEventListener("click", () => { paragrafo.ouvir()})
    p.appendChild(button)
  });
}

addPlayButton()

function play() {
    const frase = document.getElementById("frase").innerText;
    const utterance = new SpeechSynthesisUtterance(frase);
    utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }

