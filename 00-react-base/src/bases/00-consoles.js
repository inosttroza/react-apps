//Msjes información. Es posible imprimir valores separados por comas.
let name = "Ale";
let last_name = "Inostroza";
console.log(`Hola, soy ${name} ${last_name}`);

//Muestra un mensaje de información.
console.info("Usuario creado satisfactoriamente.");

//Muestra un mensaje de advertencia.
console.warn("Base de datos no respaldada, cuidado!");

//Muestra un mensaje de error.
console.error("No se pudo eliminar el registro");

//Método consta de dos parámetros, 1ero indica la condición y el 2do el mensaje de error que imprimirá en consola si la condición se evalúa como false.
console.assert(10 < 5, "10 no es menor que 5");


//muestra el tiempo que tarda en realizar un bucle x veces
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();


//muestra tabla de información de un objeto o array cuando contienen data similar.
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// var john = new Person("John", "Smith");
// var jane = new Person("Jane", "Doe");
// var emily = new Person("Emily", "Jones");
// console.table([john, jane, emily]);

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);


//método registra la cantidad de veces que se ha llamado count() con la etiqueta especificada.
function hello(name) {
    console.count("Hola " + name);
}
hello("Alejandro");
hello("Alejandro");
hello("Alejandro");
hello("Comunidad EDteam");
hello("Alejandro");
hello("Comunidad EDteam");



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


//Crea un nuevo grupo, se add mensajes subsecuentes en un nivel. 
//groupEnd() para terminar el grupo.
//muestra grupo cerrado
console.groupCollapsed("Listado de paises");
console.log("--Listado de paises--");
console.log("Bolivia");
console.log("Peru");
console.log("Brasil");
console.log("Francia");
console.log("Alemania");
console.groupEnd();


//muestra listato de árbol de las propiedades de un objeto
//console.dir(document.head);
console.dir(document.body);


//muestra un seguimiento de cómo terminó el código en un punto determinado .
function myFunction() {
    myOtherFunction();
}
function myOtherFunction() {
    console.trace();
}
console.trace(myFunction)
