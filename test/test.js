//Test

const botonIdioma = document.querySelector(".btn__cambios--idiomaT");
botonIdioma.addEventListener('click', () => 
{
    if (window.location.href.includes("test-es.html")) {
        window.location.href = "test-en.html";
    } else {
        window.location.href = "test-es.html";
    }
});

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
        imageGenerada.src = '../ImageNB/camisetaCompra1.png';
        textGenerado.textContent = '';
    } else if (cantidad_puntos <= 24) {
        imageGenerada.src = '../ImageNB/SudaderaCompra1.png';
        textGenerado.textContent = '';
    } else if (cantidad_puntos <= 34){
        imageGenerada.src = '../ImageNB/SudaderaCompra3.png';
        textGenerado.textContent = '';
    } else if (cantidad_puntos <= 44){
        imageGenerada.src = '../ImageNB/camisetaCompra4.png';
        textGenerado.textContent = '';
    } else if (cantidad_puntos <= 44){
        imageGenerada.src = '../ImageNB/camisetaCompra5.png';
        textGenerado.textContent = '';
    } else {
        imageGenerada.src = 'pxfuel.jpg';
        textGenerado.textContent = '!';
    }

    resultDiv.style.display = 'block';

}
