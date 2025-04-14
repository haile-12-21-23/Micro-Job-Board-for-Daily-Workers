import mongoose from "mongoose"

const jobSchema=new mongoose.Schema({
    title:{type:String, required:true, },
    description:String,
    phone:{type :String, required:true},
    location: String,
    jobType:String,
    createdAt:{type: Date, default:Date.now}

})
export default mongoose.model("Job",jobSchema);