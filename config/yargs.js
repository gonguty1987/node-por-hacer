const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear elemento', { descripcion })
    .command('actualizar', 'actualizar elemento', { descripcion, completado })
    .command('borrar', 'borrar elemento', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}