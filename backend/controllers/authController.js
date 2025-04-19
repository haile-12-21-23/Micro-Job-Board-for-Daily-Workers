import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signupUser=async (req, res)=>{
    const{name, phoneNumber, email, password}=req.body;
    try {
console.log('User:',req.body);

        const existingUser= await User.findOne({email});
        if (existingUser) {
            return res.status(201).json({'error': 'Email is already exist.'});
        }
        const hashedPassword= await bcrypt.hash(password,10);
        const user=await User.create({name, phoneNumber, email, password:hashedPassword});
        res.status(200).json({message:"User crated successfully!"});
    } catch (error) {
        res.status(500).json({error:error.toString()});
    }
};

export const loginUser=async (req,res)=>{
    const {email,password}=req.body;
    console.log('user:',req.body);

    try {
        const user=await User.findOne({email});
        if (!user) {
            console.log('User not found', user);

            return res.status(201).json({error:'User not found.'});
        }
        const loginMatch=await bcrypt.compare(password, user.password);
        if (!loginMatch) {
            return res.status(201).json({
                error:"Invalid credentials."
            });
        }
        const token= await jwt.sign({id:user._id, },process.env.JWT_SECRET,{ expiresIn: '1d'});
        res.status(200).json({message:"User login successfully!"});
    } catch (error) {
res.status(201).json({error:error.toString()});
    }

}
export const logoutUser=(req, res)=>{
    res.clearCookie('token',{
        httpOnly:true,
        secure:process.env.MODE_ENV==="development",
        sameSite:'Strict'
    });
res.status(200).json({message:'Logged out successfully!'})
};
