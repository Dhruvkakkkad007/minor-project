const express = require('express')
const { getAllMovies, insertMovie, getMovieByID, editMovie, removeMovie } = require('../services/movies.service')



const routeMovie = express.Router()

routeMovie.get('/', async (req, res) => {
    try {
        const data = await getAllMovies();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message || 'Server error' });
    }
})

routeMovie.get('/:id', async (req, res) => {
    try {
        const data = await getMovieByID(req.params.id);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message || 'Server error' });
    }
})

routeMovie.post('/add', async (req, res) => {
    try {
        const data = await insertMovie(req.body);
        return res.status(201).json(data);
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message || 'Server error' });
    }
})

routeMovie.put('/:id', async (req, res) => {
    try {
        const data = await editMovie(req.params.id, req.body);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message || 'Server error' });
    }
})

routeMovie.delete('/:id', async (req, res) => {
    try {
        const data = await removeMovie(req.params.id);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message || 'Server error' });
    }
})

module.exports = routeMovie;