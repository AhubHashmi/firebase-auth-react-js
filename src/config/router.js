import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../screen/home";
import Login from "../screen/login";
import Signup from "../screen/signup";
function AppRouter() {
  return (
    <>
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='signup'>Signup</Link>
          <Link to='login'>Login</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
