// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con cada línea, su tiempo de aparición y duración
var lyricsData = [
  { text: "Quiero que vengas a despertarme, pero no me levantes", time: 34, duration: 8 },
  { text: "acuestate acá", time: 42, duration: 5 },
  { text: "dejemonos de añorar tanto.", time: 46, duration: 6 },
  { text: "Quiero que vengas a despertarme, pero no me levantes", time: 84, duration: 8 },
  { text: "acuestate acá", time: 92, duration: 5 },
  { text: "quedate siempre acá, acá, acá.", time: 96, duration: 7 },
  { text: "Quiero perdurar acá acostado", time: 134, duration: 5 },
  { text: "unos mil años con vos", time: 138, duration: 6 },
  { text: "quiero perdurar acá acostado", time: 142, duration: 6 },
  { text: "unos mil años con vos", time: 146, duration: 6 },
  { text: "quiero perdurar acá acostado", time: 150, duration: 6 },
  { text: "unos mil años con vos", time: 154, duration: 6 },
  { text: "quiero perdurar acá acostado", time: 158, duration: 6 },
  { text: "unos mil años con vos.", time: 162, duration: 6 },
];

// Función para actualizar los subtítulos en sincronización con la canción
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    var fadeInDuration = 0.5; // Efecto de aparición en segundos
    var fadeOutStart = currentLine.time + currentLine.duration - fadeInDuration;

    var opacity = 1;
    if (time < currentLine.time + fadeInDuration) {
      opacity = (time - currentLine.time) / fadeInDuration; // Se desvanece al inicio
    } else if (time >= fadeOutStart) {
      opacity = 1 - (time - fadeOutStart) / fadeInDuration; // Se desvanece al final
    }

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualiza los subtítulos cada 100ms para mayor precisión
setInterval(updateLyrics, 100);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  var mensaje = document.querySelector(".mensaje");

  // Aplicar fadeOut al h1
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";

  // Esperar 3 segundos para asegurarse de que el h1 se ocultó antes de mostrar el h2
  setTimeout(function () {
    titulo.style.display = "none"; // Oculta el h1 completamente
    mensaje.style.display = "block"; // Hace que el h2 sea visible
    mensaje.style.animation = "fadeIn 3s ease-in-out forwards"; // Aparece con animación
  }, 2500); // Espera los 3 segundos que dura el fadeOut del h1
}

// Llama a la función después de 25 segundos
setTimeout(ocultarTitulo, 25000);