import { User } from './models/User.js'

export const createUser = async (req,res) => {
    const newUser = new User(req.body);
    try {
        const saveUser = await newUser.save();
        res.status(200).json({message: succes});

    } catch (err) {
        res.status(404).json({message: 'Error creating user'});
    }
}