//optimazando
const opts = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require("yargs")
    .command("listar", "imprime en consola la tabla de multiplicar", opts)
    .command("crear", "crea un archivo que contiene la tabla", opts)
    .argv;

//exportando archivo
module.exports = {
    argv,
}