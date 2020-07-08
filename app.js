// requireds

const argv = require('./config/yargs').argv;

const colors = require('colors');

//const fs = require('express');
//const fs = require('./ fs');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite);


        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => console.log('archivo creado:', `${archivo}`.green))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');


}



//console.log('limite', argv.limite);
//let parametro = argv[2];
//let base = parametro.split('=')[1]


//console.log(multiplicar);
/*
 */