const activo = true;
const nombre = 'pavlo';

// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; 
// const mensaje = ( activo ) ? 'Activo' : null; 
//const mensaje = activo && 'Activo';
const mensaje = (activo && nombre === 'pavlo') ? 'cumple' : 'no cumple'

console.log(mensaje);