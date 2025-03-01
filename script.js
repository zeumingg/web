// Música de fondo
const music = document.getElementById('background-music');
const volumeControl = document.getElementById('volume-control');

// Reproducir la música después de la primera interacción del usuario
document.body.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

// Control de volumen
volumeControl.addEventListener('input', () => {
    music.volume = volumeControl.value;
});

// Función para comenzar la experiencia
function startExperience() {
    document.querySelector('.hero-section').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
    showSection('our-story');
}

// Función para mostrar secciones
function showSection(sectionId) {
    document.querySelectorAll('.container > div').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Función para iniciar los fuegos artificiales
function startFireworks() {
    const container = document.querySelector('.container');
    const fireworks = new Fireworks(container, {
        hue: { min: 0, max: 360 },
        acceleration: 1.05,
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        delay: { min: 30, max: 60 },
        rocketsPoint: { min: 50, max: 50 },
        lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
        lineStyle: 'round',
        sound: { enable: false },
    });
    fireworks.start();
}

// Función para reproducir el sonido de celebración
function playCelebrationSound() {
    const celebrationSound = document.getElementById('celebration-sound');
    celebrationSound.volume = 0.5;
    celebrationSound.play();
}
