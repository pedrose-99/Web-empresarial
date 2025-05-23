document.addEventListener('DOMContentLoaded', () => {
    const boton1 = document.querySelector(".inicio__shop");
    const boton2 = document.getElementById("boton_goTo_Cesta");
    const boton3 = document.querySelector(".unete__envio");
    const boton4 = document.querySelector(".cesta__boton");
    const boton5 = document.querySelector(".cesta__botonD");
    const boton6 = document.querySelector(".compra__socio");
    const boton7 = document.querySelector(".compra__submit");
    
//Botones cambios de página/alertas
    if (boton1) 
    {
        boton1.addEventListener('click', () => 
        {
            window.location.href = "pages/tienda.html";
        });
    }

    if (boton2) 
    {
        boton2.addEventListener('click', () => 
        {
            if (window.location.href.includes("index.html")) {
                window.location.href = "pages/cesta.html";
            } else {
                window.location.href = "cesta.html";
            }
        });
    }

    //botón alerta formulario enviado
    if (boton3) 
    {
        boton3.addEventListener('click', () => 
        {
            alert("Formulario enviado, ¡muchas gracias!");
        });
    }

    if (boton4) 
    {
        boton4.addEventListener('click', () => 
        {
            window.location.href = "compra.html";
        });
    }

    if (boton5) 
    {
        boton5.addEventListener('click', () => 
        {
            const productoCesta = document.getElementById("producto_cesta");
            if (productoCesta) {
                productoCesta.remove();
            }
        });
    }

    //Botón alerta suscripción
    if (boton6) 
    {
        boton6.addEventListener('click', () => 
        {
            alert("Se enviará un correo a la dirección especificada con todos los detalles.");
        });
    }

    if (boton7) 
    {
        boton7.addEventListener('click', () => 
        {
            window.location.href = "pagoCompletado.html";
        });
    }
});



//items
document.addEventListener("DOMContentLoaded", () => 
{
    //Funcionamiento de todos los botones de la página de tienda
    const botones = document.querySelectorAll(".btn__item");
    botones.forEach((boton) => 
    {
        boton.addEventListener("click", () => 
        {
            const id = boton.getAttribute("data-id");
            if (id) 
            {
                window.location.href = `producto.html?id=${id}`;
            }
        });
    });
});


let currentLang = 'es';

//Todos los productos posibles en la página de producto
const productos = 
{
    "camiseta-billar": 
    {
        nombre:{es: "Camiseta billar",
                en: "Pool shirt"},
        imagen:"../Image/1.png",
        precio: 39.99,
    },
    "camiseta-tigre": 
    {
        nombre:{es: "Camiseta tigre",
                en: "Tiger shirt"},
        imagen:"../Image/2.png",
        precio: 39.99,
    },
    "camiseta-basica-spicy": 
    {
        nombre:{es: "Camiseta básica spicy",
                en: "Basic Spicy shirt"},
        imagen:"../Image/3.png",
        precio: 25,
    },
    "camiseta-mechero": 
    {
        nombre:{es: "Camiseta mechero",
                en: "Lighter shirt"},
        imagen:"../Image/4.png",
        precio: 29.99,
    },
    "sudadera-basica-spicy": 
    {
        nombre:{es: "Sudadera básica spicy",
                en: "Basic Spicy hoodie"},
        imagen:"../Image/5.png",
        precio: 59.99,
    },
    "camiseta-pantera": 
    {
        nombre:{es: "Camiseta pantera",
                en: "Panther shirt"},
        imagen:"../Image/7.png",
        precio: 49.99,
    },
    "sudadera-estampada-logo": 
    {
        nombre:{es: "Sudadera estampada logo",
                en: "Stamped logo hoodie"},
        imagen:"../Image/8.png",
        precio: 55,
    },
    "sudadera-billar": 
    {
        nombre:{es: "Sudadera billar",
                en: "Pool hoodie"},
        imagen:"../Image/9.png",
        precio: 59.99,
    },
    "sudadera-tigre": 
    {
        nombre:{es: "Sudadera tigre",
                en: "Tiger hoodie"},
        imagen:"../Image/10.png",
        precio: 59.99,
    },
    "top-spicy-azul": 
    {
        nombre:{es: "Top Spicy azul",
                en: "Spicy blue top"},
        imagen:"../Image/14.png",
        precio: 25,
    },
    "top-spicy-rojo": 
    {
        nombre:{es: "Top Spicy rojo",
                en: "Spicy red top"},
        imagen:"../Image/15.png",
        precio: 25,
    },
    "chaqueta-spicy": 
    {
        nombre:{es: "Chaqueta spicy",
                en: "Spicy jacket"},
        imagen:"../Image/17.png",
        precio: 99.99,
    },

};

//Se muestra el producto en la plantilla
function mostrarProducto(idProducto) 
{
    const producto = productos[idProducto];

    const imagenEl = document.getElementById("imagen-producto");
    const nombreEl = document.getElementById("nombre-producto");
    const precioEl = document.getElementById("precio-producto");

    if (imagenEl) imagenEl.src = producto.imagen;
    if (nombreEl) nombreEl.textContent = producto.nombre[currentLang];
    if (precioEl) precioEl.textContent = producto.precio.toFixed(2) + " €";
} 

document.addEventListener('DOMContentLoaded', () => 
{
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    if (productId) 
    {
        mostrarProducto(productId);
    }
});


//cambio de idioma
//Traducciones
const data = 
{
    //español
    es: 
    {
        "nav-item1": "Inicio",
        "nav-item2": "Tienda",
        "nav-item3": "Trabaja con nosotros",

        "visitShop": "Visita nuestra tienda",

        "About-us-title" : "Sobre nosotros",

        "About-us": "Spicy Gallery es mucho más que una simple tienda de ropa. Somos un estilo de vida. Nuestra pasión por el estilo y la moda urbana nos impulsa a ofrecer prendas únicas para jóvenes de mente libre.",
        "About-us2": "Spicy Gallery no se trata solo de ropa; es para quienes tienen el valor de mezclar cualquier estilo que les guste sin importar lo que digan los demás o las opiniones ajenas. En un mundo donde todos quieren encajar, Spicy Gallery es una marca que pretende romper con lo establecido, una marca pensada para el mundo.",

        "Our-objectives-title" : "Nuestros objetivos",
        "Our-objectives": "Spicy Gallery aspira a ser un referente global, conectando con una comunidad apasionada por el arte, la música y el estilo de vida urbano, mientras busca aumentar la sostenibilidad e innovación en cada colección.",
        "Our-objectives2": "Nuestro propósito es que cada prenda logre transmitir confianza y valentía, motivando al consumidor a cruzar límites y construir su propio camino en este mundo. Queremos convertir esta marca en una de las más icónicas del mercado de la moda urbana, inspirando a una comunidad global y a marcas emergentes mientras desafiamos las normas.",
        "Our-objectives3": "Spicy Gallery busca convertirse en un movimiento cultural que promueva la creatividad y la diversidad. Queremos expandirnos a nivel internacional y colaborar con artistas y diseñadores cuyos valores y pensamientos coincidan con los de nuestra marca.",

        "Dare-to-be-spicy": "El nombre de nuestra marca nace de la idea de dar intensidad y fuerza. Así como una especia intensifica y mejora el sabor de cualquier plato, los diseños de Spicy Gallery buscan realzar la personalidad de quien los lleva, transmitiendo una vibra única. 'Spicy' representa energía y una perspectiva audaz, desafiando los límites y barreras de la moda tradicional.",
        "Dare-to-be-spicy2": "'Atrévete a ser Spicy' resume los valores de la marca en una frase simple y directa: la valentía de ser diferente, destacar y vivir sin miedo a expresarse. Promovemos abrazar el estilo urbano sin límites. Spicy Gallery es un desafío para dejar atrás lo aburrido y lograr una versión más vibrante de uno mismo.",


        "shop": "Nuestro catálogo",
        "shop-item1": "Camiseta billar",
        "shop-item2": "Camiseta tigre",
        "shop-item3": "Camiseta básica Spicy",
        "shop-item4": "Camiseta Lighter",
        "shop-item5": "Sudadera básica Spicy",
        "shop-item6": "Camiseta pantera",
        "shop-item7": "Sudadera logotipo estampado",
        "shop-item8": "Sudadera Pool",
        "shop-item9": "Sudadera Tigre",
        "shop-item10": "Top azul spicy",
        "shop-item11": "Top rojo spicy",
        "shop-item12": "Chaqueta spicy",

        "size": "Selecciona una talla",
        "quantity": "Selecciona una cantidad",
        "add": "Añadir a la cesta",

        "card-title": "Tu cesta",
        "card-delete": "Eliminar",
        "card-finish": "Finalizar compra",

        "purchase-address": "Dirección",
        "purchase-address-city": "Ciudad",
        "purchase-address-street": "Calle",
        "purchase-address-number": "Número",
        "purchase-address-floor": "Piso",
        "purchase-address-letter": "Letra",

        "purchase-data": "Datos personales",
        "purchase-data-name": "Nombre",
        "purchase-data-surname": "Apellido",
        "purchase-data-email": "Correo electrónico",

        "subscribe": "Suscribirse",
        "subscribe-message": "Se enviará un mensaje al correo especificado con más detalles.",
        "purchase-confirmation": "Confirmar",

        "purchase-done-message": "¡Compra realizada, gracias!",
        "purchase-home": "Ir a inicio"
    },
    
    //Inglés
    en: {
    
        "nav-item1" : "Home",
        "nav-item2" : "Shop",
        "nav-item3" : "Work with us",

        "visitShop" : "Visit our shop",

        "About-us-title" : "About us",

        "About-us" : "Spicy Gallery is much more than a simple clothes store. We are a lifestyle. Our passion for style and urban fashion encourages us to offer unique clothes for free minded Young people.",
        "About-us2" : "Spicy gallery isn´t only about clothes; it´s for whoever is brave enough to mix any style they like without caring about what anyone says or other´s opinions. In a world in where everyone wants to fit in, Spicy gallery is a Brand that pretends going out of the norm, a Brand designed for the world.",

        "Our-objectives-title" : "Our goals",
        "Our-objectives" : "Spicy gallery aims to be a global reference, connecting with a community passionate for art, music, and urban lifestyle while trying to increase sustainability and innovation in every collection.",
        "Our-objectives2" : "Our purpose is that every piece of clothing manages to show confidence and encouragement, motivating the consumer to cross the Edge and build their own Trail in this world. We´d like to make this Brand one of the most iconic in the urban fashion market, having an inspirative role for a global community and emerging brands while defying the norm.",
        "Our-objectives3" : "Spicy Gallery tries to turn into a cultural movement that promotes creativity and diversity. We want to expand to an international level and collab with artists and designers whose values and thoughts are similar to our brand ones.",

        "Dare-to-be-spicy" : "The name of our Brand comes from the idea of giving a bit of intensity and strenght to the Brand. As a spice intensifies and improves any dish taste, Spicy Gallery designs aim to enhance whoever wears them personality, giving each user a different vibe. Spicy represents energy and a bold perspective, defying any limits and barriers that the traditional fashion has.",
        "Dare-to-be-spicy2" :     "'Dare to be spicy' keeps the brand´s values in a simple and direct phrase: the boldness to be different, stick out and live without any fear of expressing yourself. We encourage to embrace streetwear style without limits. Spicy Gallery is a challenge to leave behind the boredom and dryness and achieve a more vibrant version of yourself.",
    

        "shop" : "Our catalogue",
        "shop-item1" : "Pool shirt",
        "shop-item2" : "Tiger shirt",
        "shop-item3" : "Basic Spicy shirt",
        "shop-item4" : "Lighter shirt",
        "shop-item5" : "Basic Spicy hoodie",
        "shop-item6" : "Panther shirt",
        "shop-item7" : "Stamped logotype hoodie",
        "shop-item8" : "Pool hoodie",
        "shop-item9" : "Tiger hoodie",
        "shop-item10" : "blue spicy top",
        "shop-item11" : "red spicy top",
        "shop-item12" : "spicy jacket",

        "size" : "select your size",
        "quantity" : "select a quantity",
        "add" : "Add to shopping card",

        "work-with-us" : "Work",
        "work-with-us2" : "with us",

        "our-team" : "Our team",
        "members-1" : "E-commerce responsible",
        "members-2" : "Marketing responsible",
        "members-4" : "Design manager",

        "work-with-us3" : "Join Us",

        "form-name" : "Name",
        "form-surname" : "Surname",
        "form-number" : "Phone number",
        "form-date" : "Date",
        "form-cv" : "CV",
        "form-send" : "Send",

        "card-title" : "Your cart",
        "card-delete" : "Delete",
        "card-finish" : "Finish purchase",

        "purchase-address": "Address",
        "purchase-address-city": "City*",
        "purchase-address-street": "Street*",
        "purchase-address-number": "Number*",
        "purchase-address-floor": "Floor",
        "purchase-address-letter": "Letter",

        "purchase-data": "Personal data",
        "purchase-data-name": "Name*",
        "purchase-data-surname": "Surname*",
        "purchase-data-email": "Email*",

        "subscribe" : "Subscribe",
        "purchase-confirmation" : "Confirm",


        "purchase-done-message" : "Purchase done, Thanks!",
        "purchase-home" : "go to homepage"
    }
}


//Funciones para el cambio de idioma en cada página
function changeLanguage1(lang) 
{
    document.getElementById("nav-item1").textContent = data[lang]["nav-item1"];
    document.getElementById("nav-item2").textContent = data[lang]["nav-item2"];
    document.getElementById("nav-item3").textContent = data[lang]["nav-item3"];

    document.getElementById("visitShop").textContent = data[lang]["visitShop"];

    document.getElementById("About-us-title").textContent = data[lang]["About-us-title"];
    document.getElementById("About-us").textContent = data[lang]["About-us"];
    document.getElementById("About-us2").textContent = data[lang]["About-us2"];

    document.getElementById("Our-objectives-title").textContent = data[lang]["Our-objectives-title"];
    document.getElementById("Our-objectives").textContent = data[lang]["Our-objectives"];
    document.getElementById("Our-objectives2").textContent = data[lang]["Our-objectives2"];
    document.getElementById("Our-objectives3").textContent = data[lang]["Our-objectives3"];

    document.getElementById("Dare-to-be-spicy").textContent = data[lang]["Dare-to-be-spicy"];
    document.getElementById("Dare-to-be-spicy2").textContent = data[lang]["Dare-to-be-spicy2"];

}


function changeLanguage2(lang)
{
    document.getElementById("nav-item1").textContent = data[lang]["nav-item1"];
    document.getElementById("nav-item2").textContent = data[lang]["nav-item2"];
    document.getElementById("nav-item3").textContent = data[lang]["nav-item3"];

    document.getElementById("shop").textContent = data[lang]["shop"];
    document.getElementById("shop-item1").textContent = data[lang]["shop-item1"];
    document.getElementById("shop-item2").textContent = data[lang]["shop-item2"];
    document.getElementById("shop-item3").textContent = data[lang]["shop-item3"];
    document.getElementById("shop-item4").textContent = data[lang]["shop-item4"];
    document.getElementById("shop-item5").textContent = data[lang]["shop-item5"];
    document.getElementById("shop-item6").textContent = data[lang]["shop-item6"];
    document.getElementById("shop-item7").textContent = data[lang]["shop-item7"];
    document.getElementById("shop-item8").textContent = data[lang]["shop-item8"];
    document.getElementById("shop-item9").textContent = data[lang]["shop-item9"];
    document.getElementById("shop-item10").textContent = data[lang]["shop-item10"];
    document.getElementById("shop-item11").textContent = data[lang]["shop-item11"];
    document.getElementById("shop-item12").textContent = data[lang]["shop-item12"];

}

function changeLanguage3(lang) {
  currentLang = lang;

  const nav1 = document.getElementById("nav-item1");
  if (nav1) nav1.textContent = data[lang]["nav-item1"];

  const nav2 = document.getElementById("nav-item2");
  if (nav2) nav2.textContent = data[lang]["nav-item2"];

  const nav3 = document.getElementById("nav-item3");
  if (nav3) nav3.textContent = data[lang]["nav-item3"];


  const size = document.getElementById("size");
  if (size) size.textContent = data[lang]["size"];

  const quantity = document.getElementById("quantity");
  if (quantity) quantity.textContent = data[lang]["quantity"];

  const add = document.getElementById("add");
  if (add) add.textContent = data[lang]["add"];

//traducción según el producto que se muestre
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  if (productId) {
    mostrarProducto(productId);
  }

}

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage3(currentLang);
});

function changeLanguage4(lang)
{
    document.getElementById("nav-item1").textContent = data[lang]["nav-item1"];
    document.getElementById("nav-item2").textContent = data[lang]["nav-item2"];
    document.getElementById("nav-item3").textContent = data[lang]["nav-item3"];

    document.getElementById("work-with-us").textContent = data[lang]["work-with-us"];
    document.getElementById("work-with-us2").textContent = data[lang]["work-with-us2"];

    document.getElementById("our-team").textContent = data[lang]["our-team"];
    document.getElementById("members-1").textContent = data[lang]["members-1"];
    document.getElementById("members-2").textContent = data[lang]["members-2"];
    document.getElementById("members-4").textContent = data[lang]["members-4"];

    document.getElementById("work-with-us3").textContent = data[lang]["work-with-us3"];

    document.getElementById("form-name").textContent = data[lang]["form-name"];
    document.getElementById("form-surname").textContent = data[lang]["form-surname"];
    document.getElementById("form-number").textContent = data[lang]["form-number"];
    document.getElementById("form-date").textContent = data[lang]["form-date"];
    document.getElementById("form-cv").textContent = data[lang]["form-cv"];

    document.getElementById("form-send").textContent = data[lang]["form-send"];


}

function changeLanguage5(lang)
{
    document.getElementById("nav-item1").textContent = data[lang]["nav-item1"];
    document.getElementById("nav-item2").textContent = data[lang]["nav-item2"];
    document.getElementById("nav-item3").textContent = data[lang]["nav-item3"];

    document.getElementById("card-title").textContent = data[lang]["card-title"];

    const del = document.getElementById("card-delete");
    if (del) del.textContent = data[lang]["card-delete"];

    const finish = document.getElementById("card-finish");
    if (finish) finish.textContent = data[lang]["card-finish"];


}

function changeLanguage6(lang)
{
    document.getElementById("purchase-address").textContent = data[lang]["purchase-address"];
    document.getElementById("purchase-address-city").textContent = data[lang]["purchase-address-city"];
    document.getElementById("purchase-address-street").textContent = data[lang]["purchase-address-street"];
    document.getElementById("purchase-address-number").textContent = data[lang]["purchase-address-number"];
    document.getElementById("purchase-address-floor").textContent = data[lang]["purchase-address-floor"];
    document.getElementById("purchase-address-letter").textContent = data[lang]["purchase-address-letter"];

    document.getElementById("purchase-data").textContent = data[lang]["purchase-data"];
    document.getElementById("purchase-data-name").textContent = data[lang]["purchase-data-name"];
    document.getElementById("purchase-data-surname").textContent = data[lang]["purchase-data-surname"];
    document.getElementById("purchase-data-email").textContent = data[lang]["purchase-data-email"];

    document.getElementById("subscribe").textContent = data[lang]["subscribe"];
    document.getElementById("purchase-confirmation").textContent = data[lang]["purchase-confirmation"];

}

function changeLanguage7(lang)
{
    document.getElementById("purchase-done-message").textContent = data[lang]["purchase-done-message"];
    document.getElementById("purchase-home").textContent = data[lang]["purchase-home"];


}




//Cesta
function addToCart() 
{
    const nombre = document.getElementById("nombre-producto").textContent;
    const precioText = document.getElementById("precio-producto").textContent;
    const precio = parseFloat(precioText.replace("€", "").trim());
    const imagen = document.getElementById("imagen-producto").src;

    const tallaSeleccionada = document.querySelector('input[name="option"]:checked');
    const cantidad = parseInt(document.querySelector('.cantidad--number').value);

    //Si no es válido
    if (!tallaSeleccionada || isNaN(cantidad) || cantidad <= 0) 
    {
        alert("Por favor, selecciona una talla y una cantidad válida.");
        return;
    }

    const talla = tallaSeleccionada.value;

    const producto = { nombre, precio, imagen, talla, cantidad };

    //guardar producto en la cesta
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert("Producto añadido a la cesta.");
}


function cargarCarrito() {
    const contenedor = document.querySelector(".cesta__productos");
    const totalElemento = document.querySelector(".cesta__total");

    // Solo continúa si los elementos existen
    if (!contenedor || !totalElemento) {
        console.warn("Elementos del carrito no encontrados en esta página.");
        return;
    }

    const productos = JSON.parse(localStorage.getItem('carrito')) || [];

    contenedor.innerHTML = '';
    let total = 0;

    productos.forEach((item, index) => {
        total += item.precio * item.cantidad;

        const productoHTML = `
            <div class="cesta__productos--producto">
                <img class="cesta__productos--img" src="${item.imagen}">
                <div class="cesta__productos--text">
                    <p class="cesta__productos--desc">${item.nombre} (Talla: ${item.talla}) x ${item.cantidad}</p>
                    <p class="cesta__productos--precio">${(item.precio * item.cantidad).toFixed(2)} €</p>
                </div>
                <button class="cesta__botonD" onclick="eliminarProducto(${index})">Eliminar</button>
            </div>
        `;

        contenedor.innerHTML += productoHTML;
    });

    totalElemento.textContent = `Total: ${total.toFixed(2)} €`;
}


function eliminarProducto(index) 
{
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

 document.addEventListener("DOMContentLoaded", cargarCarrito);


 function finalizarCompra() 
 {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    //si el carrito está vacío
    if (carrito.length === 0) 
    {
        alert("Tu cesta está vacía. Añade productos antes de finalizar la compra.");
        window.location.href = "tienda.html";      
        return;
    }
    //si no
    else
    {
        localStorage.removeItem('carrito');
        alert("Cesta confirmada");
        window.location.href = "compra.html";

    }

}
