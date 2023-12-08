function calcularCotizacion(ancho, largo, tela) {
    let precioBase = 5000;
    let precio;

    //Descuento aplicable para cortinas que tengan menos de 150cm de ancho
    if (ancho <= 150) {
        precio = precioBase - 1700;
    } else {
        precio = precioBase;
        }

      //Precio segun el tipo de tela 
    switch (tela) {
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

alert('Bienvenido Usuari@, cotizamos tu cortina roller en 3 simples pasos!');
alert('Tenga en cuenta que hay un DESCUENTO del 35% en cortinas de menos de 150cm de ancho!');

let nombre = prompt('Ingrese su Nombre');
let ancho = parseInt(prompt('Ingrese el ancho de la cortina (en centimetros)'));
let largo = parseInt(prompt('Ingrese el largo de la cortina (en centimetros)'));
let tela = prompt('Ingrese el tipo de tela que desea para su cortina (Screen - BlackOut - Lino)');
let cotizacion = calcularCotizacion(ancho, largo, tela,);

console.log(`Cotizacion para ${nombre}, medidas de la cortina (ancho: ${ancho}cm x ${largo}cm) en tela ${tela} valor total= ${cotizacion}`);

if (ancho < 50){
    alert('Por favor, ingrese una medida valida')
} else {
    alert(`La cotización para ${nombre} es: $${cotizacion}. ¡Gracias por utilizar nuestros servicios!`);
}

if (tela != "Screen" && tela != "Lino" && tela != "Blackout" || tela != "screen" && tela != "blackout" && tela != "lino"){
    alert("Tela no valida, presupuesto invalido");
}

if (largo <= 120) {
    precio = calcularCotizacion + 1400;
} else if (largo <= 190) {
    precio = calcularCotizacion + 2000;
} else if (largo <= 250) {
    precio = calcularCotizacion + 3500;
} else {
    alert("medida no valida");
}
