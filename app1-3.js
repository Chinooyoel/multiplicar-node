var { crearArchivo, listarTabla } = require("./Multiplicar/multiplicar");
var argv = require("./config/yargs").argv;


console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log("listar");
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((nombreArchivo) => console.log("se ha creado correcto".magenta))
            .catch((err) => console.log(err))
        break;
    default:
        console.log("comando no reconocido");

}
//let argv2 = process.argv;

/*
console.log(argv);
console.log(argv.base);
console.log(argv.limite);
*/