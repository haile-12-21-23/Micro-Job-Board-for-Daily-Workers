import {useState} from 'react';
import axios from 'axios';

function JobForm(){

    const[job, setJob]=useState({
        'title':'',
        'description':'',
        'category':'',
        'location':''
    });
    const handleChange = (e) => {
        console.log('Job...',job);

        setJob({ ...job, [e.target.name]: e.target.value });
      };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log('Submitting:', job);

        try {
            await axios.post('http://localhost:5000/api/jobs', job, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            alert('Job posted!');
            setJob({
                'title':job.title,
                 'description':job.description,
                'category':job.category,
                'location':job.location ,
                 }) ;
             } catch (error) {
            alert('Error posting job');
        }
    };

    return (
<form onSubmit={handleSubmit}>
<input name='title' value={job.title} onChange={handleChange} placeholder="Job title" required  />
<input name='description' value={job.description} onChange={handleChange} placeholder="Job description" required/>
<input name='category' value={job.category} onChange={handleChange} placeholder="Job category" required />
<input name='location' value={job.location}onChange={handleChange}placeholder="Job location" required/>
<button type='submit'>
    Post Job
</button>
</form>
    );
};

export default JobForm;