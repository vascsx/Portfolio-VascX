const video = document.getElementById('video');
const text = document.querySelector('.container-text p');
const image1Link = document.getElementById('image1Link');
const image2Link = document.getElementById('image2Link');
const image3Link = document.getElementById('image3Link');
const image4Link = document.getElementById('image4Link');

const videos = ['./video/CALCULADORA-VASC.mkv', './video/video-embreve.mp4', './video/video-embreve.mp4', './video/video-embreve.mp4'];
const texts = [
    "Calculadora\n",
    "Formulario de Contato\n",
    "Playstation Store\n",
    "Spotify\n"
];

function convertNewlinesToBreaks(text) {
    return text.replace(/\n/g, '<br>');
}

function changeVideoAndText(index) {
    video.src = videos[index];
    text.innerHTML = convertNewlinesToBreaks(texts[index]);
    video.load();
    video.play();
}


image1Link.addEventListener('click', () => {
    changeVideoAndText(0);
});

image2Link.addEventListener('click', () => {
    changeVideoAndText(1);
});

image3Link.addEventListener('click', () => {
    changeVideoAndText(2);
});

image4Link.addEventListener('click', () => {
    changeVideoAndText(3);
});






const textElement = document.getElementById("typed-text");
const textToType = "FULL STACK DEVELOPER";

function typeText() {
    let index = 0;
    const typingSpeed = 120; // Velocidade de digitação em milissegundos

    function typeCharacter() {
        textElement.textContent += textToType[index];
        index++;

        if (index < textToType.length) {
            setTimeout(typeCharacter, typingSpeed);
        }
    }

    typeCharacter();
}

// Iniciar a digitação quando a página é carregada
window.addEventListener("load", typeText);







