import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRout.js';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const URL = process.env.MONGOURL;

// MongoDB connection
mongoose.connect(URL).then(() => {
    console.log("Connected to database");
}).catch((error) => {
    console.error("Database connection error:", error);
});
// routes creat
app.use('/api',route);
// Start the server

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
