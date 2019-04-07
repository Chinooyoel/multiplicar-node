//importamos el archivo
//const archivoImportado = require(`./multiplicar/multiplicar.js`);

//Destructuramos el objeto
const { crearArchivo, saludar } = require(`./Multiplicar/multiplicar.js`);
let base = 'b';

saludar();
//usamos la funcion
crearArchivo(base)
    .then((nombreArchivo) => console.log(`se ha creado el archivo ${nombreArchivo}`))
    .catch((err) => console.log(err));



//console.log(module)