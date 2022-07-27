const { executeQuery, executeQueryOne } = require('../helpers/utilidades');

const getAll = () => {
    return executeQuery('select * from usuarios');
}

const create = ({ username, email, password }) => {

    return executeQuery('insert into usuarios (username, email, password) values (?,?,?)', [username, email, password]);
}

const getById = (usuarioId) => {
    return executeQuery('select * from usuarios where id = ?', [usuarioId])
}


const getByUsername = (username) => {
    return executeQueryOne('select * from usuarios where username = ?', [username]);
}

const getEventosUser = (user) => {
    
    return executeQuery('select eventos.* from usuarios_has_eventos join usuarios on usuarios.id = usuarios_has_eventos.usuarios_id join eventos on eventos.id = usuarios_has_eventos.eventos_id where usuarios.id = ?', [user[0].id])
}



module.exports = {
    getAll, create, getById, getByUsername, getEventosUser
};