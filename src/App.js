import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Footer } from "./components/Footer";
import { Try } from "./components/Try";
import { AboutPage } from "./Pages/_about";
import { ContactPage } from "./Pages/_contact";
import { HomePage } from "./Pages/_home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Try />
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App;
