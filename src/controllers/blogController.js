const Blog=require("../models/Blog")

const getAllBlogs=async(req,res)=>{
    try{
        const blogs=await Blog.find();
        res.json({message:"blogs",blogs});
    } catch(err){
        console.log("Error ",err.message);
        res.status(500).json({message:err.message});
    }
}

const getBlogById=async(req,res)=>{
    try{
        const id=req.params.id;
        console.log(id);
        const blog=Blog.find(id);
        res.json({});

    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports={getAllBlogs,}