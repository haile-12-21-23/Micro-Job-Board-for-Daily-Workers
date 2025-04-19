import { use, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
const navigate=useNavigate();

  useEffect(() => {
    const token=localStorage.getItem('token');
    if(!token){
      navigate('/login')
    }
    else{
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/getJobs');
        console.log('App res:', res.data);
        setJobs(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };
    fetchJobs();
  }
  }, [navigate]); // only once on mount

  if (loading) return <p>Loading jobs...</p>;
const logout=async()=>{
const response=await axios.post('http://localhost:5000/api/auth/logout');
if (response.status===200) {
  alert('User logout successfully!');
  navigate('/login');
}
else{
  alert('Something went wrong.')
}
}
  return (
    <div>
      <header>
        <button  onClick={logout} className="bg-red-400 hover:bg-red-300 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200">Logout </button>
      </header>
      <h2>Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Category:</strong> {job.category}</p>
              <p><strong>Location:</strong> {job.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
