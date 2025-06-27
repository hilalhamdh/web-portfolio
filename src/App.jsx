import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Companies from "./components/Companies";
function App() {
  return (
    <>
      <div className="p-[20px]">
        <Navbar />
        <Home />
        <Aboutme />
        <Skills />
        <Portfolio />
        <Companies />
      </div>
    </>
  );
}

export default App;
