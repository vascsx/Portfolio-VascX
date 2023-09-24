document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('video');
    const text = document.querySelector('.container-text p');
    const image1Link = document.getElementById('image1Link');
    const image2Link = document.getElementById('image2Link');
    const image3Link = document.getElementById('image3Link');
    const image4Link = document.getElementById('image4Link');
    const siteLink = document.getElementById('site-link');
    const repoLink = document.getElementById('repo-link');

    const videos = [
        './video/CALCULADORA-VASC.mkv',
        './video/form-contact.mp4',
        './video/pokeApi.mp4',
        './video/embreve.mp4'
    ];
    const texts = [
        "Calculadora\n",
        "Formulario de Contato\n",
        "Pokédex ApiFetch\n",
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
        siteLink.href = "https://calculadoravasc.netlify.app/";
        repoLink.href = "https://github.com/vascsx/Calculadora";
    });

    image2Link.addEventListener('click', () => {
        changeVideoAndText(1);
        siteLink.href = "https://form-contact-vasc.netlify.app";
        repoLink.href = "https://github.com/vascsx/FORMULARIO-DE-CONTATO";
    });

    image3Link.addEventListener('click', () => {
        changeVideoAndText(2);
        siteLink.href = "https://pokedex-fetch-api.netlify.app";
        repoLink.href = "https://github.com/vascsx/pokedexApiFetch";
    });

    image4Link.addEventListener('click', () => {
        changeVideoAndText(3);
        siteLink.href = "Em-breve-sera-feito";
        repoLink.href = "Em-breve-sera-feito";
    }); 
    



    const textElement = document.getElementById("typed-text");
    const textToType = "FULL STACK DEVELOPER";

    function typeText() {
        let index = 0;
        const typingSpeed = 120;

        function typeCharacter() {
            textElement.textContent += textToType[index];
            index++;

            if (index < textToType.length) {
                setTimeout(typeCharacter, typingSpeed);
            }
        }

        typeCharacter();
    }

    window.addEventListener("load", typeText);
});
