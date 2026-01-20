const express = require('express')
const { getAllUser, getUserById, insertUser, updateUser, deleteuser } = require('../services/users.services')


const routeUser = express.Router()
//getall
routeUser.get('/', async(req, res) => {
    const data = await getAllUser()
   res.send( data)
})

//getbyid
routeUser.get('/:id', async(req, res) => {
    const data = await getUserById(req.params.id)
    res.send(data)
})

//insert
routeUser.post('/add', async(req, res) => {
    const data = await insertUser(req.body)
    res.send(data)
})

//edit
routeUser.patch('/edit/:id', async(req, res) => {
    const data = await updateUser(req.params.id,req.body)
    res.send(data)
})

//delete
routeUser.delete('/:id', async(req, res) => {
    const data = await deleteuser(req.params.id)
    res.send(data)
})

module.exports = routeUser