const boton1 = document.getElementById("boton_goTo_Tienda");
const boton2 = document.getElementById("boton_goTo_Cesta");
const boton3 = document.getElementById("boton_unete__enviar");
const boton4 = document.getElementById("btn_goTo_compra");
const boton5 = document.getElementById("btn_delete_product");
const boton6 = document.getElementById("socio");
const boton7 = document.getElementById("submit_compra");


document.addEventListener('DOMContentLoaded', () => {
boton1.addEventListener('click', () =>
{
    const tiendaPagina = "pages/tienda.html";
    window.location.href = "pages/tienda.html"
})
});


document.addEventListener('DOMContentLoaded', () => {
const indexPage = "index.html";
boton2.addEventListener('click', () =>
{
    if(window.location.href.includes("index.html"))
    {
        window.location.href = "pages/cesta.html";
    }
    else
    {
        window.location.href = "cesta.html"
    }
    
})
});

document.addEventListener('DOMContentLoaded', () => {
boton3.addEventListener('click',() =>
{
    alert("Formulario enviado, ¡muchas gracias!");
})
});

document.addEventListener('DOMContentLoaded', () =>
{
    //no funciona si no hay nada en la cesta
    boton4.addEventListener('click',() =>
    {
        window.location.href = "compra.html";
    })
});

document.addEventListener('DOMContentLoaded', () =>
{
    boton5.addEventListener('click', () =>
    {
        const productoCesta = document.getElementById("producto_cesta");
        //productoCesta va a estar oculto hasta que se meta un producto en la cesta,
        //una vez sea visible, el boton "producto_cesta" va a poder eliminarlo aqui.
        //Así se evita que aparezca la plantilla al refrescar la pagina.
        productoCesta.remove();
    })
});

document.addEventListener('DOMContentLoaded', () => {
boton6.addEventListener('click',() =>
{
    alert("Se enviará un correo a la dirección especificada con todos los detalles.");
})
});

document.addEventListener('DOMContentLoaded', () => {
boton7.addEventListener('click',() =>
{
    window.location.href = "pagoCompletado.html";
})
});



//items
const botonItem = document.getElementById("boton_goTo_Item");

document.addEventListener('DOMContentLoaded', () => {
botonItem.addEventListener('click', () =>
{
    window.location.href = "producto.html";
})
})