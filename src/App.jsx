import './App.css';
import ToDoApp from './components/BeginnerProjects/ToDoApp/ToDoApp';
import BeginnerSection from './components/BeginnerSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <BeginnerSection />
      </div>
    </>
  );
}

export default App;
