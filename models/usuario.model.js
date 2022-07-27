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


const getByEmail = (email) => {
    return executeQueryOne('select * from usuarios where email = ?', [email]);
}




module.exports = {
    getAll, create, getById, getByEmail
};