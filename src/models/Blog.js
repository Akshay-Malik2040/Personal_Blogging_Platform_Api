const mongoose=require('mongoose');

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    published:{
        type:Date,
        default:Date.now
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        default:"Admin"
    },
    status:{
        type:String,
        enum:["draft","published"],
        default:"draft"
    }

},{timeStamps:true});

module.exports=mongoose.model("Blog",BlogSchema);