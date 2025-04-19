import React from 'react'
import {Link} from "react-router-dom"
const Navbar=()=>{
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-blue-600">
MicroJobs
</div>
<div className="space-x-6 text-gray-700 font-medium hidden md:flex">
    <Link to="/jobs" className="hover:text-blue-600 transition"> Find Jobs</Link>
    <Link to="/companies" className="hover:text-blue-600 transition"> Companies </Link>
    <Link to="/services" className="hover:text-blue-600 transition"> Services </Link>
</div>
<div className="md:hidden">
 {/* Add mobile menu icon here later */}
 <button className="text-gray-700 focus:outline-none">
          ☰
        </button>
</div>
        </nav>
    )
}
export default Navbar;