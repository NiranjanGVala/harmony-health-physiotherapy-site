import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout'; 
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Founders from './component/Founders';
import ContactUs from './component/ContactUs';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Whether animation should happen only once or every time you scroll
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="service" element={<Service/>} />
          <Route path="founders" element={<Founders/>} />
          <Route path="contact-us" element={<ContactUs/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
