const db = require("../db/mysql")

async function getAll(){
    try{
        const [data] = await db.query("SELECT * FROM movie_rating")
        return data;
    }catch(err){
        throw err
    }
}

async function getByID(id){
    try{
        const [data, field] = await db.query("SELECT * FROM movie_rating WHERE RatingID = ?", [id])
        return data[0];
    }catch(err){
        throw err
    }
}

async function insert(formdata){
    try{
        const [data, field] = await db.query(
            `INSERT INTO movie_rating (MovieID, UserID, RatingStar, RatingComment) 
             VALUES (?, ?, ?, ?)`,
            [formdata.MovieID, formdata.UserID, formdata.RatingStar, formdata.RatingComment]
        )
        return data;
    }catch(err){
        throw err
    }
}

async function update(id, formdata){
    try{
        const [data, field] = await db.query(
            `UPDATE movie_rating 
             SET MovieID = ?, 
                 UserID = ?, 
                 RatingStar = ?, 
                 RatingComment = ? 
             WHERE RatingID = ?`,
            [formdata.MovieID, formdata.UserID, formdata.RatingStar, formdata.RatingComment, id]
        )
        return data;
    }catch(err){
        throw err
    }
}

async function deleteById(id){
    try{
        const [data, field] = await db.query(`DELETE FROM movie_rating WHERE RatingID = ?`, [id])
        return data;
    }catch(err){
        throw err
    }
}

module.exports = { getAll, getByID, insert, update, deleteById }
