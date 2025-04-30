import React from 'react';

const  HeroSection =()=>{
    return (
        <section className=' bg-blue-600 py-12'>
            <div className=' container mx-auto  px-4 text-center text-white'>
                <h1 className='text-4xl font-bold mb-4'>Find Your Dream Jobs</h1>
<p className='mb-6'> Search from thousands of jobs listing across various industries.</p>
<div className='flex-justify-center'>
    <input className='w-1/2 p-3 rounded-1-md text-gray'
    type='text'
    placeholder='Job title or keyword'
    />

</div>
            </div>


        </section>
    );
};

export default HeroSection;
