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
        const [data, fields] = await db.query('SELECT * FROM `users` where UserID = ' + id)
        return data
    } catch (err) {
        return false
    }
}

async function addUser(formData) {
    try {
        const [data, fields] = await db.query(`INSERT INTO users(UserID, UserName, Password) VALUES (NULL,'${formData.UserName}','${formData.Password}');`)
        return data
    } catch (err) {
        return false
    }
}

async function editUser(id, formData) {
    try {
        const [data, fields] = await db.query(`UPDATE users SET UserName = '${formData.UserName}', Password = '${formData.Password}' WHERE users.UserID = ${id};`)
        return data
    } catch (err) {
        return false
    }
}

async function deleteu(id) {
    try {
        const [data, fields] = await db.query(`DELETE FROM users WHERE users.UserID = ${id}`)
        return data
    } catch (err) {
        return false
    }
}






module.exports = { getAll, getbyid, addUser, editUser, deleteu }







