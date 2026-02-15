const { getAll, getByID, insert, update, deleteById } = require("../models/movie_rating.model")

async function getAllMovieRattings(){
    const data=await getAll()
    if(data){
        return {
            error:false,
            data,
            message:"MovieRattings Fetched success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function getMovieRattingByID(id){
    const data=await getByID(id)
    if(data){
        return {
            error:false,
            data,
            message:"MovieRatting Fetched success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function insertMovieRatting(formdata){
    const data=await insert(formdata)
    if(data){
        return {
            error:false,
            data,
            message:"MovieRatting insert success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function updateMovieRatting(id,formdata){
    const data=await update(id,formdata)
    if(data){
        return {
            error:false,
            data,
            message:"MovieRatting update success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function deleteMovieRatting(id){
    const data=await deleteById(id)
        if(data){
            return {
                error:false,
                data,
                message:"MovieRatting delete success"
            }
        }
        else{
            return {
                error:true,
                message:"Some error occured"
            }
        }
}

module.exports={getAllMovieRattings,getMovieRattingByID,insertMovieRatting,updateMovieRatting,deleteMovieRatting}