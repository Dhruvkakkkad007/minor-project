const express = require('express')
const routeUser = require('./routes/users.route')

const app = express()
app.use(express.json())
app.use('/users',routeUser)

app.listen(3000,()=>{
    console.log("Server Started at 3000")
})
