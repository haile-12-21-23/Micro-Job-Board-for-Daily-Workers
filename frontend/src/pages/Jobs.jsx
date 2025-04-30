import React from 'react'
import HeroSection from '../components/HeroSection';
import FilterSidebar from '../components/FilterSidebar';
import JobList from '../components/JobList';

const Jobs=()=> {
   return     (
    <div>
        <HeroSection />
    <div className="container mx-auto px-4 py-8 flex space-x-6">
<FilterSidebar />
<JobList />
    </div>

    </div>
);}
export default Jobs;