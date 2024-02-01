import './App.css';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { Route } from 'react-router-dom';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/myprojects" element={<Projects/>}/>
        <Route path="/myResume" element={<Resume />}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
