import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        min: [3, 'Минимальное количество букв: 3'],
        max: 18,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

const User = ('User', UserSchema);

export default User;