const { getAll,getbyid } = require("../models/users.models")

async function getAllUser() {
    const data = await getAll()
    if (data) {
        return {
            error: false,
            data:data,
            message: "User Fetched Successfully 100%"
        }
    }
    else {
        return {
            error: false,
            message: "User Fetched Unsuccessfull"
        }
    }
}


async function getUserById(id) {
    const data = await getbyid(id)
    if(data){
        return {
            error:false,
            data:data,
            message:"User Fetched Successfully By ID"
        }
    }
    else{
        return{
            error:true,
            message:"User Fetched Unsuccessfull By ID"
        }
    }
}


function insertUser(formData) {
    return "insert user by id Service Called"
}

function updateUser(id, formData) {
    return "update user by id Service Called" + id
}

function deleteuser(id) {
    return "get user by id Service Called" + id
}

module.exports = { getAllUser, getUserById, insertUser, deleteuser, updateUser }