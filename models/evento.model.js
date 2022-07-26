const { executeQuery, executeQueryOne } = require('../helpers/utilidades');

const getAll = () => {

    const prom = new Promise((resolve, reject) => {
        db.query('select * from eventos', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });

    return prom;
}

const create = ({ titulo, fecha, descripcion, imagen, lugar }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into eventos (titulo, fecha, descripcion, imagen, lugar) values (?,?,?,?,?)',
            [titulo, fecha, descripcion, imagen, lugar],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
}

const getById = (eventoId) => {
    return executeQueryOne('select * from eventos where id=?',
        [eventoId]);
}

const deleteById = (eventoId) => {
    return executeQuery('delete from eventos where id=?', [eventoId]);
};

const update = (eventoId, { titulo, descripcion, imagen, fecha, lugar }) => {
    return executeQuery('update eventos set titulo = ?, descripcion = ?, imagen = ?, fecha = ?, lugar = ?',
        [titulo, descripcion, imagen, fecha, lugar]
    );
}



module.exports = {
    getAll, create, executeQuery, getById, deleteById, update
}