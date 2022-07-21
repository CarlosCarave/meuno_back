const getAll = () => {

    const prom = new Promise((resolve, reject) => {
        db.query('select * from eventos', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });

    return prom;
 }

module.exports = {
    getAll
}