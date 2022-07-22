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

module.exports = {
    getAll, create
}