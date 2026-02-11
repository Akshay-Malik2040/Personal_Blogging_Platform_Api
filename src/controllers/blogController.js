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
        const blog=await Blog.findById(id);
        res.json(blog);

    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const createBlog=async (req,res)=>{
    try{
        const reqBody=req.body;
        const blog=await Blog.create(reqBody);
        res.status(201).json(blog);
    }catch(err){
        res.status(500).json({ErrorMessage:err.message});
    }
}

module.exports={getAllBlogs,getBlogById,createBlog}