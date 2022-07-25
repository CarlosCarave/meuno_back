const { executeQuery } = require('../helpers/utilidades');

const getAll = () => {
    return executeQuery('select * from usuarios');
}

const create = ({ username, email, password }) => {
    return executeQuery('insert into usuarios (username, email, password) values (?,?,?)', [username, email, password]);
}





module.exports = {
    getAll, create
};