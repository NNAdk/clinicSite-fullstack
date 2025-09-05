import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        min: [3, 'Минимальное количество букв: 3'],
        max: 18,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
    }
})

const Appointment = ('Appointment', AppointmentSchema);

export default Appointment;