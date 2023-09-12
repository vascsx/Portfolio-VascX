const video = document.getElementById('video');
const text = document.querySelector('.container-text p');
const image1Link = document.getElementById('image1Link');
const image2Link = document.getElementById('image2Link');
const image3Link = document.getElementById('image3Link');
const image4Link = document.getElementById('image4Link');

const videos = ['./video/impulso-jett.mp4', './video/dash-jett.mp4', './video/smoke-jett.mp4', './video/ult-jett.mp4'];
const texts = [
    "PLAYSTATION STORE\n",
    "Calculadora\n",
    "Formulario de Contato\n",
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
