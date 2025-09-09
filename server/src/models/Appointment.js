import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema ({
    name: {
        type: String,
        required: true,
        min: [3, 'Минимальное количество букв: 3'],
        max: 18,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String || null,
        required: true,
    },
    message: {
        type: String,
    }
})

const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;