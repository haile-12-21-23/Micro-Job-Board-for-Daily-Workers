import express from 'express';
import cors from 'cors';
import jobRoutes from './routes/jobRoutes.js';

const app= express();

app.use(cors());
app.use(express.json());
app.use('/api/jobs', jobRoutes);
app.use('/api/getJobs', jobRoutes);


export default app;

