var { crearArchivo } = require("./Multiplicar/multiplicar");
//para saber las especificaciones del archivo actual
//console.log(process);

let argv = process.argv; //esto devuelve una matriz
let elemento2 = argv[2]; //le asignamos el elemento 2, qe serian un argumento
let base = elemento2.split("=")[1]; //separamos al elemento y lo transformamos en matriz

console.log(base);

crearArchivo(base)
    .then((nombreArchivo) => ("se ha creado correcto"))
    .catch((err) => console.log(err))