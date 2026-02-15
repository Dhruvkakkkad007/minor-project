const express=require("express")
const { getAllMovieRattings,getMovieRattingByID,insertMovieRatting,updateMovieRatting,deleteMovieRatting } = require("../services/movie_rating.service")

const routeMovieRatting=express.Router()

routeMovieRatting.get("/",async(req,res)=>{
    try{
        const data=await getAllMovieRattings()
        return res.status(200).json(data)
    }catch(err){
        return res.status(500).json({error:true,message:err.message||'Server error'})
    }
})

routeMovieRatting.get("/:id",async(req,res)=>{
    try{
        const data=await getMovieRattingByID(req.params.id)
        return res.status(200).json(data)
    }catch(err){
        return res.status(500).json({error:true,message:err.message||'Server error'})
    }
})

routeMovieRatting.post("/add",async(req,res)=>{
    try{
        const data=await insertMovieRatting(req.body)
        return res.status(201).json(data)
    }catch(err){
        return res.status(500).json({error:true,message:err.message||'Server error'})
    }
})

routeMovieRatting.patch("/:id",async(req,res)=>{
    try{
        const data=await updateMovieRatting(req.params.id,req.body)
        return res.status(200).json(data)
    }catch(err){
        return res.status(500).json({error:true,message:err.message||'Server error'})
    }
})

routeMovieRatting.delete("/:id",async(req,res)=>{
    try{
        const data=await deleteMovieRatting(req.params.id)
        return res.status(200).json(data)
    }catch(err){
        return res.status(500).json({error:true,message:err.message||'Server error'})
    }
})

module.exports=routeMovieRatting