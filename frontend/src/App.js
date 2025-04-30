import JobList from "./components/JobList";
import HomePage  from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobForm from "./components/JobForm";
import SignUp from "./components/SignUpForm";
import Login from "./components/LoginForm";
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import Services from './pages/Services';

function App(){
  return (
    <Router>
      <Routes>  {/* Use Routes instead of Route directly */}
        <Route path="/" element={<JobList />} />
        <Route path="/post-job" element={<JobForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};
export default App;