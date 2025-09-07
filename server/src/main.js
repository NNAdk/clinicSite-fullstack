import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/router.js';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);


const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('DB CONNECTED');

    app.listen(process.env.PORT || 5000, () => {
      console.log('SERVER UP');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
};

start();
