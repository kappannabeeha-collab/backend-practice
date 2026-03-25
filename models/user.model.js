const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email:
    {
        unique: true,
        type : String,
        required : true
    },
    password:
    {
       required : true,
       type : String
    }
});
userSchema.index({email : 1}, {unique : true});
module.exports = mongoose.model("User", userSchema);