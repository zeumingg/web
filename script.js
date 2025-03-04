const envelope = document.getElementById('envelope');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    envelope.classList.toggle('open');
});
