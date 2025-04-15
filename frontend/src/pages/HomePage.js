import JobForm from '../components/JobForm';
import JobList from '../components/JobList';

const HomePage=()=>{
    return (
<div>
    <h1>Micro Job Boarding</h1>
    <JobForm />
    <JobList />
</div>
    );
};

export default HomePage;