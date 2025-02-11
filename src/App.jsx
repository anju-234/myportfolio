import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Contactform from "./Pages/Contactform";
import Header from '../src/components/Header/Header'



function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contactform />} />
       </Routes>
    </>
  );
}

export default App;
