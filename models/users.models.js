const db = require('../db/mysql')

async function getAll() {
    try {
        const [data, fields] = await db.query('SELECT * FROM `users`')
        return data
    } catch (err) {
        return false
    }
}

async function getbyid(id) {
    try {
        const [data,fields] = await db.query('SELECT * FROM `users` where UserID = '+id)
        return data
    } catch (err) {
        return false
    }
}


module.exports = { getAll,getbyid }







