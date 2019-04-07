const fs = require('fs');
var colors = require("colors");

let listarTabla = (base, limite = 10) => {
    console.log("================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`.red);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let contenido = "";

        //si base no es un numero
        if (!Number(base)) {
            rejecte("No es un numero la base");
            return; //ya que el rejecte no corta la funcion
        }
        for (let i = 1; i <= limite; i++) {
            contenido += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tabla/tabla-del-${ base }-al-${ limite }.txt`, contenido, (err) => {
            //si lanza un error retorna
            if (err) {
                reject("No se ha podido crear el archivo")
            } else { //si no hay error
                resolve(`tabla${base}.txt`)
            }
        })
    });

}

let saludar = () => console.log("hola prro");
//exportamos las funciones
module.exports = {
    crearArchivo,
    saludar,
    listarTabla
}