const db = require('../db/mysql');


async function getAll() {
    try {
        const [data, fields] = await db.query("SELECT * FROM movies")
        return data
    }
    catch (err) {
        throw err;
    }
}

async function getbyid(id) {
    try {
        const [data, fields] = await db.query("SELECT * FROM movies WHERE MovieID = ?", [id])
        return data[0]
    }
    catch (err) {
        throw err;
    }
}

async function addMovie(formData) {
    try {
        const [data, fields] = await db.query(
            `INSERT INTO movies (MovieName, Movieimage) VALUES (?, ?)`,
            [formData.MovieName, formData.Movieimage]
        )
        return data;
    }
    catch (err) {
        throw err;
    }

}

async function updateMovie(id, formData) {
    try {
        const [data, fields] = await db.query(
            `UPDATE movies SET MovieName = ?, Movieimage = ? WHERE MovieID = ?`,
            [formData.MovieName, formData.Movieimage, id]
        )
        return data;
    }
    catch (err) {
        throw err;
    }
}


async function deleteMovie(id) {
    try {
        const [data, fields] = await db.query(`DELETE FROM movies WHERE MovieID = ?`, [id])
        return data;
    }
    catch (err) {
        throw err;
    }
}

module.exports = { getAll, getbyid, addMovie, updateMovie, deleteMovie }