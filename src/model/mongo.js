const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://liji:abc@cluster0.n8yaa.mongodb.net/library");
const schema =mongoose.Schema;
const blogschema = new schema({
    name:String,
    authorname:String,
    image:String,
    price:String,
    starRating:String
});
var blog =mongoose.model("authors",blogschema);
module.exports=blog;









