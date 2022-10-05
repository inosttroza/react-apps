//Msjes información. Es posible imprimir valores separados por comas.
let name = "Ale";
let last_name = "Inostroza";
console.log(`Hola, soy ${name} ${last_name}`); 

//Muestra un mensaje de advertencia.
console.warn("Base de datos no respaldada, cuidado!");

//Muestra un mensaje de información.
console.info("Usuario creado satisfactoriamente.");

//Muestra un mensaje de error.
console.error("No se pudo eliminar el registro");


//Crea un nuevo grupo, se add mensajes subsecuentes en un nivel. 
//groupEnd() para terminar el grupo.
console.group("Listado de paises");
  console.log("--Listado de paises--");
  console.log("Bolivia");
  console.log("Peru");
  console.log("Brasil");
  console.log("Francia");
  console.log("Alemania");
console.groupEnd();