//Test

let opcion_elegida = [];
let numero_preguntas = 6;

function respuesta(num_pregunta, seleccionada) {
    opcion_elegida[num_pregunta] = seleccionada.value;

    const id = "p" + num_pregunta + "-spicyShop";
    const labels = document.getElementById(id).querySelectorAll('.section-spicyShop__label');

    labels.forEach(label => {
        label.style.backgroundColor = "#2e2e2e"; 
    });

    seleccionada.parentNode.style.backgroundColor = "#4B0002";
}

function mostrarResultado() {
    let cantidad_puntos = 0;
    for (let i = 0; i < numero_preguntas; i++) {
        cantidad_puntos += parseInt(opcion_elegida[i] || 0);
    }

    const imageGenerada = document.getElementById('imagen-spicyShop');
    const textGenerado = document.getElementById('text-spicyShop');
    const resultDiv = document.querySelector('.result-spicyShop');

    if (cantidad_puntos <= 14) {
        imageGenerada.src = 'logo.png';
        textGenerado.textContent = 'Tu est';
    } else if (cantidad_puntos <= 24) {
        imageGenerada.src = 'imagenes/tipos/dragon.png';
        textGenerado.textContent = '¡Tu tipo Pokémon es Dragón!';
    } else if (cantidad_puntos <= 34){
        imageGenerada.src = 'imagenes/tipos/siniestro.png';
        textGenerado.textContent = '¡Tu tipo Pokémon es Siniestro!';
    } else if (cantidad_puntos <= 44){
        imageGenerada.src = 'imagenes/tipos/volador.png';
        textGenerado.textContent = '¡Tu tipo Pokémon es Volador!';
    } else if (cantidad_puntos <= 44){
        imageGenerada.src = 'imagenes/tipos/hielo.png';
        textGenerado.textContent = '¡Tu tipo Pokémon es de Hielo!';
    } else {
        imageGenerada.src = 'pxfuel.jpg';
        textGenerado.textContent = '¡Tu tipo Pokémon es de Planta!';
    }

    resultDiv.style.display = 'block';
}
