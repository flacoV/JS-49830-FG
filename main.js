function calcularCotizacion(ancho, largo, tela) {
  //Funcion
  let precioBase = 5000;
  let precio;

  // 35% de descuento si es menor o igual a 150cm
  if (ancho <= 150) {
    //Condicional
    precio = precioBase - 1750;
  } else {
    precio = precioBase;
  }

  // Precios segun medidas del largo usando un arreglo
  const precioPorLargo = [0, 2000, 3500, 5000, 7200, 9000];

  if (largo <= 100) {
    precio += precioPorLargo[1];
  } else if (largo <= 150) {
    precio += precioPorLargo[2];
  } else if (largo <= 220) {
    precio += precioPorLargo[3];
  } else if (largo <= 300) {
    precio += precioPorLargo[4];
  } else {
    precio += precioPorLargo[5];
  }

  // Precio segun tipo de tela usando un arreglo.
  //Declaro un array con sus respectivos objetos dentro
  const telas = [
    { nombre: "screen", precio: 15000 },
    { nombre: "blackout", precio: 11500 },
    { nombre: "lino", precio: 8500 },
  ];

  //Utilizo find para que recorra el array item por item,
  //buscando que el prompt ingresado por el cliente sea valido.
  const tipoDeTela = telas.find(
    (t) => t.nombre.toLowerCase() === tela.toLowerCase()
  );

  //Utilizo un condicional y le digo al programa basicamente que si el find encontro un objeto dentro
  //del array(telas) que fue ingresado por el cliente que le sume el precio de la tela a lo ya
  // calculado segun las medidas ingresadas anteriormente.
  if (tipoDeTela) {
    precio += tipoDeTela.precio;
  } else {
    alert("El cliente esta ingresando una tela no valida!");
  }

  return precio;
}

// Alertas de bienvenida
alert("Bienvenido Usuari@, cotizamos tu cortina roller en 3 simples pasos!");
alert(
  "Tenga en cuenta que hay un DESCUENTO del 35% en cortinas de menos de 150cm de ancho!"
);

// Prompts para ingresar la informacion con la que interactua el cotizador.
let nombre = prompt("Ingrese su Nombre");
let ancho = parseInt(prompt("Ingrese el ancho de la cortina (en centimetros)"));
let largo = parseInt(prompt("Ingrese el largo de la cortina (en centimetros)"));
let tela = prompt(
  "Ingrese el tipo de tela que desea para su cortina (Screen - BlackOut - Lino)"
);
let cotizacion = calcularCotizacion(ancho, largo, tela);

console.log(
  `Cotizacion para ${nombre}, medidas de la cortina (ancho: ${ancho}cm x ${largo}cm) en tela ${tela} valor total= ${cotizacion}`
);
do {
  if (ancho <= 150) {
    console.log(
      `Se ha aplicado el descuento del 35% correctamente al pedido de ${nombre}.`
    );
  }
} while (false);

if (ancho < 50) {
  alert("Por favor, ingrese una medida valida");
}

alert(
  `La cotización para ${nombre} es: $${cotizacion}. ¡Gracias por utilizar nuestros servicios!`
);
