import JobList from "./components/JobList";
import HomePage  from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobForm from "./components/JobForm";
import SignUp from "./components/SignUpForm";
import Login from "./components/LoginForm";

function App(){
  return (
    <Router>
      <Routes>  {/* Use Routes instead of Route directly */}
        <Route path="/" element={<JobList />} />
        <Route path="/post-job" element={<JobForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default App;