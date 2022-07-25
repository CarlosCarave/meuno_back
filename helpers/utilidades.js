const { Router } = require("express");

const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

function executeQuery(sql, values = []) {

    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

function executeQueryOne(sql, values = []) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return resolve(null);
            resolve(result[0]);
        });
    });
}

function createToken(user) {
    const obj = {
        userId: user.id,
        expDate: dayjs().add(5, 'minutes').unix(),

    }
    return jwt.sign(obj, 'en un lugar de la mancha');
}

module.exports = {
    executeQuery, executeQueryOne, createToken
}