import './App.css';
import Home from './Container/Home'
import Signin from './Container/SignIn/Signin';
import Watch from './Container/Watch/Watch';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/watch" exact element={<Watch />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/contactus" exact element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
