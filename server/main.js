import express from 'express';
import { prisma } from './prisma/prismaClient.js';
import { configDotenv } from 'dotenv';
import router from './router/router.js';
import cors from 'cors';

configDotenv();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use('/api', router);



const start = async () => {
    try {
        await prisma.$connect();
        console.log('DB ✅');
        app.listen(process.env.PORT || 5000, () => console.log("SERVER ✅"));
    } catch (err) {
        console.log(err)
    }
};

start();