import bcrypt from 'bcryptjs'
import userModel from '../models/userModel';

export const userSignupController = async(req, res) => {
    try{
        const {email, password, name} = req.body;

        const user = await userModel.findOne({email})

        if(user){
            throw new Error("User already exist")
        }

        if(!email || !password ||  !name){
            throw new Error("Please provide email, password, and name");
        };
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcryptSync(password, salt);

        if(!hashPassword) {
            throw new Error("Someting went wrong with the password hashing")
        }

        const payload = {
            ...req.body,
            password: hashPassword
        }

        const userData = userModel(payload)

        const saveUser = await userData.save();

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User Created Successfully"
        })
        
    }catch(err){
        resizeBy.status(500).json({
            message: err || err. message,
            error: true,
            success: false
        })
    }
}