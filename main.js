var startWindow = document.querySelector('[start-window]');

startWindow.addEventListener('click', play, true);

function play() {
    this.classList.add('out');
    this.addEventListener('animationend', () => {
        startWindow.style.display = 'none';
    }, true);
}