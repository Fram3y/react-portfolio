import { BrowserRouter, Routes, Route } from "react-router-dom";

import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/react-fontawesome'

//Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Import Pages
import Home from "./pages/Home";
import Show from "./pages/Show";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

import CollegeIndex from "./pages/projects/CollegeIndex";
import PersonalIndex from "./pages/projects/PersonalIndex";
// import Demo from "./pages/projects/Demo";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />

            <Route path="/projects/college" element={<CollegeIndex />} />
            <Route path="/projects/personal" element={<PersonalIndex />} />
            <Route path="/projects/:slug" element={<Show />} />
            {/* <Route path="/projects/:slug/demo" element={<Demo />} /> */}

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
