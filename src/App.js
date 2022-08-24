import {Testimonial} from './components/Testimonial'
import { Courses } from "./components/Courses";
import { Destination } from './components/Destination';
import { Services } from './components/Services';
import { TestPrepration } from './components/TestPrepration';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Colleges } from './components/Colleges';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <TestPrepration />
    <Services />
    <Destination />
    <Testimonial />
    <Courses />
    <Colleges />
    <Footer />
    </>
    
  );
}

export default App;
