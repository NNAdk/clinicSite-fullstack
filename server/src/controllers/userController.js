import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 
import { validationResult } from 'express-validator';
import dotenv from 'dotenv';
import Reserve from '../models/Appointment.js';

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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'User not exists' });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = generateToken(user._id);

        res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
               
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

export const reserve = async (req,res) => {
    try {
        const { name, email, phone, date, time, message} = req.body;

        const newReserve = new Reserve({ name, email, phone, date, time, message});
        const saveReserve = await newReserve.save();

        const {...userData} = saveReserve._doc;

        res.status(200).json({...userData});

    }
    catch (err) {
        console.log(err);
        res.status(400).json('ERROR: ', err)
    }
};
