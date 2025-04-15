import {useEffect,useState} from 'react';
import axios from 'axios';

const JobList=()=>{
    const [jobs, setJobs]=useState([]);
    useEffect(() => {
        const fetchJobs=async ()=>{
            const res=await axios.get('http://localhost:5000/api/jobs');
            setJobs(res.data);
        };
        fetchJobs();
    }, []);

    return(
<div>
    <h2>
        Available Jobs</h2>
<ul>
    {jobs.map((job)=>{
        <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p> <strong>Category:</strong> {job.category}</p>
            <p> <strong>Location:</strong>{job.location}</p>
        </li>
    })}
</ul>
</div>
    );
};

export default JobList;