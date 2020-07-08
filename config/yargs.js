const opt = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {

        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('crear', 'imprime en consola la tambla de multiplicar', opt)
    .command('listar', 'WTF en consola la tambla de multiplicar', opt)
    .help()
    .argv;



module.exports = {
    argv
}