import Job from '../models/job.js';

//creating jobs
export const createJob=async (req, res)=>{
try {
    console.log("Request data......", req.body);

    const {title, description, location,category,  }=req.body;
if (!title || !description|| !category|| !location) {
    return res.status(400).json({'error':'All fields are required.'});
}
const newJob=Job({title,description,location,category, });
const savedJob=await newJob.save();
res.status(200).json(newJob);
} catch (error) {
res.status(500).json({error: error.message});
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