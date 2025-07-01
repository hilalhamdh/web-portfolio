import "./App.css";

import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Companies from "./components/Companies";
import ContactUs from "./components/ContactUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
function App() {
  return (
    <>
      <div className="p-[20px]">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
