const { getAll,getbyid, addUser, editUser,deleteu,getbyUsername } = require("../models/users.models")

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
            data:data[0],
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


async function checkLogin(formData) {
    const data = await getbyUsername(formData.UserName)

    if(data){
        return {
            error:false,
            data:data,
            message:"User Login"
        }
    }
    else{
        return{
            error:true,
            message:"Login Unsuccessfull"
        }
    }
}


async function insertUser(formData) {
    const data = await addUser(formData)
    if(data){
        return {
            error:false,
            data:data,
            message:"User Inserted Successfully"
        }
    }
    else{
        return{
            error:true,
            message:"User Inserted Unsuccessfull "
        }
    }
}

async function updateUser(id, formData) {
       const data = await editUser(id,formData)
    if(data){
        return {
            error:false,
            data: data,
            message:"User updated Successfully"
        }
    }
    else{
        return{
            error:true,
            message:"User updated Unsuccessfull "
        }
    }
}

async function deleteuser(id) {
       const data = await deleteu(id)
    if(data){
        return {
            error:false,
            data:data,
            message:"User Deleted Successfully"
        }
    }
    else{
        return{
            error:true,
            message:"User Deleted Unsuccessfull"
        }
    }
}

module.exports = { getAllUser, getUserById, insertUser, deleteuser, updateUser,checkLogin}