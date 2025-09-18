import { Outlet } from 'react-router';
import './App.css';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Outlet></Outlet>
        <Footer />
      </div>
    </>
  );
}

export default App;
