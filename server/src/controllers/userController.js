import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 
import { validationResult } from 'express-validator';
import dotenv from 'dotenv';

dotenv.config(); 


const generateToken = (userID) => {
    return jwt.sign({_id: userID}, process.env.JWT_SECRET, {expiresIn: '30d'});
};

export const register = async (req, res) => {
   try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const { userName, email, password} = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({message: 'Email is taken'});
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User ({ userName, email, passwordHash});
    const savedUser = await newUser.save();

    const token = generateToken(savedUser._id);

    const { passwordHash: _, ...userData} = savedUser._doc;

    res.status(201).json({...userData, token});
   } catch (err) {
    console.log(err)
    res.status(500).json({message: 'Error registration'})
   }
}


