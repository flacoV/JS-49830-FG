function calcularCotizacion(ancho, largo, tela) {  //Funcion
    let precioBase = 5000;
    let precio;

   // 35% de descuento si es menor o igual a 150cm

    if (ancho <= 150) {  //Condicional
       precio = precioBase - 1750;
    } else {
        precio = precioBase;
    }  
    // Precios segun medidas del largo
    if (largo <= 100) {
        precio +=  2000;
    } else if (largo <= 150) {
        precio += 3500;
    } else if (largo <= 220) {
        precio += 5000;
    } else if (largo <= 300) {
        precio += 7200;
    } else {
        precio += 9000;
    }

   //Precio segun el tipo de tela 

    switch (tela.toLowerCase()) {
        case 'screen':
            precio += 15000;
            break;

        case 'blackout':
            precio += 11500;
            break;

        case 'lino':
            precio += 8500;
            break;
        
        default:
            console.log('No comercializamos esa tela!');
            break;
    } 

    return precio;
}

// Alertas de bienvenida
alert('Bienvenido Usuari@, cotizamos tu cortina roller en 3 simples pasos!');
alert('Tenga en cuenta que hay un DESCUENTO del 35% en cortinas de menos de 150cm de ancho!');

// Prompts para ingresar la informacion con la que interactua el cotizador.
let nombre = prompt('Ingrese su Nombre');
let ancho = parseInt(prompt('Ingrese el ancho de la cortina (en centimetros)'));
let largo = parseInt(prompt('Ingrese el largo de la cortina (en centimetros)'));
let tela = prompt('Ingrese el tipo de tela que desea para su cortina (Screen - BlackOut - Lino)');
let cotizacion = calcularCotizacion(ancho, largo, tela,);

console.log(`Cotizacion para ${nombre}, medidas de la cortina (ancho: ${ancho}cm x ${largo}cm) en tela ${tela} valor total= ${cotizacion}`);

do {  // Ciclo
    if (ancho <= 150) {
        console.log(`Se ha aplicado el descuento del 35% correctamente al pedido de ${nombre}`);
    }
} while (false);


if (ancho < 50){
    alert('Por favor, ingrese una medida valida')
} else {
    alert(`La cotización para ${nombre} es: $${cotizacion}. ¡Gracias por utilizar nuestros servicios!`);
}
