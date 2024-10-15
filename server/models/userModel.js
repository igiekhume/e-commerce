import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : String, 
    email : {
        type : String,
        unique : true,
        require : true,
    },
    password: String,
    profilePic: String,
}, {
    timestamps: true
})

const userModel = mongoose.model('User', userSchema)

export default userModel