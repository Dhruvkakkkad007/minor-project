const { getAll, getbyid, addMovie, updateMovie, deleteMovie } = require("../models/movies.model");



async function getAllMovies() {
    const data = await getAll()

    if (data) {
        return {
            error: false,
            data: data,
            message: "Movies Fetched Successfully"
        }
    }
    else {
        return {
            error: true,
            message: "Some error Occured"
        }
    }
}

async function getMovieByID(id) {
    const data = await getbyid(id)
    if (data) {
        return {
            error: false,
            data: data,
            message: "Movie Fetched By ID"
        }
    }
    else {
        return {
            error: true,
            message: "Error occurred or movie not found"
        }
    }
}

async function insertMovie(formData) {
    const data = await addMovie(formData)

    if (data) {
        return {
            error: false,
            data: data,
            message: "Movie Inserted Successfully"
        }
    }
    else {
        return {
            error: true,
            message: "Error occurred while inserting movie"
        }
    }

}

async function editMovie(id, formData) {
    const data = await updateMovie(id, formData);
    if (data) {
        return {
            error: false,
            data: data,
            message: "Movie Updated Successfully"
        }
    }
    else {
        return {
            error: false,
            message: "Some Error Occured"
        }
    }
}


async function removeMovie(id) {
    const data = await deleteMovie(id);
    if (data) {
        return {
            error: false,
            data: data,
            message: "Movie Deleted Successfully"
        }
    }

    else {
        return {
            error: true,
            message: "Some Error Occured"
        }
    }
}

module.exports = {getAllMovies,getMovieByID,insertMovie,editMovie,removeMovie}