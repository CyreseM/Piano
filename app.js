const pianoKeys = document.querySelectorAll('.key');
function playSound(newurl) {
    new Audio(newurl).play();
}
pianoKeys.forEach((pianoKey, i) =>{
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    const newurl = '24-piano-keys/key' + number + '.mp3';
    pianoKey.addEventListener('click', () => playSound(newurl));
})