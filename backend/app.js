import express from 'express';
import cors from 'cors';
import jobRoutes from './routes/jobRoutes.js';
import authRoutes from "./routes/authRoutes.js"

const app= express();

app.use(cors());
app.use(express.json());
app.use('/api/jobs', jobRoutes);
app.use('/api/getJobs', jobRoutes);
app.use('/api/auth', authRoutes);


export default app;

