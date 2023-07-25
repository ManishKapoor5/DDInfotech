import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ClientsSpeak from "./components/ClientsSpeak";
import Consultant from "./components/Consultant";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FirstPage from "./components/FirstPage";
import Footer from "./components/Footer";
import Policy from "./components/Policy";

import Resources from "./components/Resources";
import Home from "./components/Home";
import Navbar from "./components/Navbar";




function App() {
  return (
    <div>
      
      <Routes>
      
      <Route exact path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/vision" element={<ClientsSpeak />} />
      
      <Route path="/team" element={<Resources />} />
      
      <Route path="/policy" element={<Policy />} />
      
      <Route path="/projects" element={<FAQ /> } />
      <Route path="/contact" element={<Contact /> } />
      
      </Routes>
      
    </div>
  );
}

export default App;
