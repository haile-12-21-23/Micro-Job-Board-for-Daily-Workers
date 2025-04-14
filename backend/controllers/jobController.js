import Job from '../models/job.js';

//creating jobs
export const createJob=async (req, res)=>{
try {
    const job=new Job(req.body);
await job.save();
res.status(201).json(job);
} catch (error) {
res.status(400).json({error: error.message});
}
};

//get all jobs
export const getJobs=async (req,res)=>{
    try {
        const jobs=await Job.find().sort({createdAt:-1});
        res.json(jobs);
    } catch (error) {

    }
};