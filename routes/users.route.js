const express = require('express')
const jwt = require('jsonwebtoken')
const { getAllUser, getUserById, insertUser, updateUser, deleteuser, checkLogin } = require('../services/users.services')


const routeUser = express.Router()
//getall
routeUser.get('/', (req, res, next) => {
    try {
        const auth = req.headers.authorization
        if (!auth) return res.status(401).send({ err: true, message: 'Unauthorized' })
        const token = auth.split(' ')[1]
        var decoded = jwt.verify(token, 'shhh')
        req.user = decoded
        next();
    }
    catch (err) {
        res.status(401).send({ err: true, message: 'Unauthorized' })
    }
}, async (req, res) => {
    const data = await getAllUser()
    res.send(data)
})

//getbyid
routeUser.get('/:id', async (req, res) => {
    const data = await getUserById(req.params.id)
    res.send(data)
})


//Login
routeUser.post('/login', async (req, res) => {
    const data = await checkLogin(req.body)
    res.send(data)
})


//insert
routeUser.post('/add', async (req, res) => {
    const data = await insertUser(req.body)
    res.send(data)
})

//edit
routeUser.put('/:id', async (req, res) => {
    const data = await updateUser(req.params.id, req.body)
    res.send(data)
})

//delete
routeUser.delete('/:id', async (req, res) => {
    const data = await deleteuser(req.params.id)
    res.send(data)
})

module.exports = routeUser