const express = require('express')
const jwt = require('jsonwebtoken')
const { getAllUser, getUserById, insertUser, updateUser, deleteuser, checkLogin } = require('../services/users.services')
const { authMiddleware } = require('../middleware/auth.middleware')


const routeUser = express.Router()

routeUser.use(authMiddleware)  // middleWare
//getall
routeUser.get('/', async (req, res) => {
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