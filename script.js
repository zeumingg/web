// Música de fondo
const music = document.getElementById('background-music');
const volumeControl = document.getElementById('volume-control');

// Reproducir la música automáticamente al cargar la página
window.addEventListener('load', () => {
    music.play();
});

// Ajustar el volumen inicial
music.volume = 0.5;

// Controlar el volumen
volumeControl.addEventListener('input', () => {
    music.volume = volumeControl.value;
});

// Función para mostrar el mensaje de "No"
function showNoResponse() {
    document.querySelectorAll('.proposal-card').forEach(card => {
        card.classList.add('hidden');
    });
    document.getElementById('no-response').classList.remove('hidden');
}

// Función para avanzar a la siguiente pregunta
function nextQuestion(currentQuestion, response) {
    // Oculta la pregunta actual
    document.getElementById(`question-${currentQuestion}`).classList.add('hidden');

    // Muestra la siguiente pregunta o el mensaje final
    if (currentQuestion < 4) {
        document.getElementById(`question-${currentQuestion + 1}`).classList.remove('hidden');
    } else {
        document.getElementById('final-message').classList.remove('hidden');

        // Si la respuesta es "Sí" en la última pregunta, activa los fuegos artificiales y el sonido
        if (response === 'Sí') {
            startFireworks();
            playCelebrationSound();
        }
    }

    // Aquí puedes agregar lógica para enviar la respuesta a tu backend
    console.log(`Respuesta a la pregunta ${currentQuestion}: ${response}`);
}

// Función para iniciar los fuegos artificiales
function startFireworks() {
    const container = document.querySelector('.container');
    const fireworks = new Fireworks(container, {
        // Configuración de los fuegos artificiales
        hue: { min: 0, max: 360 },
        acceleration: 1.05,
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        delay: { min: 30, max: 60 },
        rocketsPoint: { min: 50, max: 50 },
        lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
        lineStyle: 'round',
        sound: {
            enable: false, // Desactiva el sonido de la librería (usaremos nuestro propio sonido)
        },
    });
    fireworks.start();
}

// Función para reproducir el sonido de celebración
function playCelebrationSound() {
    const celebrationSound = document.getElementById('celebration-sound');
    celebrationSound.volume = 0.5; // Ajusta el volumen del sonido
    celebrationSound.play();
}
