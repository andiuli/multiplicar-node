const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============='.green);
    console.log(`==tabla de ${base}==`.red);
    console.log('==============='.blue);



    for (let i = 1; i <= limite; i++) {

        console.log(`${base}*${i} es igual a${base*i}`);

    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${base} no es un Fucking number asshole JSFBGIN`)
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {



            data += `${base}*${i} es igual a${base*i}\n`;



        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`Tabla-${base}.txt`);

        });


    });

}
module.exports = {

    crearArchivo,
    listarTabla

}