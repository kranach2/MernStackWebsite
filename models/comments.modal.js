const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
blogId:{type:String, required:true},
comment:{type:String, required:true},
name:{type:String, required:true},
commentDate:{type:Date, default:Date.now}
});

const Comment= mongoose.model("Comment", commentSchema);
 

module.exports = Comment;