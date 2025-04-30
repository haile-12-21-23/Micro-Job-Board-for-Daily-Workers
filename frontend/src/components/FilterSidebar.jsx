const FilterSidebar=()=>{
    return (
        <aside className=" w-1/4 p-4 bg-white rounded-md shadow-md">
<h2 className="text-xl fond-semibold mb-4 "> Filter Jobs</h2>
<div className="mb-4">
<label className="block mb-2 font-medium" > Category</label>
<select className="w-full  p-2 border rounded-md">
<option>  Design</option>
<option>  Development</option>
<option>  Marketing</option>
<option>  Accounting</option>
</select>
</div>
<div className="mb-4">
    <label className="block mb-2 font-medium"> Location</label>
<input type="text " className="w-full p-2 border rounded-md" placeholder="e.g. , Addis Ababa" />
</div>
<button className="w-full bg-blue-600 text-white py-2 rounded-md"> Apply filters</button>
        </aside>
    );
};

export default  FilterSidebar;