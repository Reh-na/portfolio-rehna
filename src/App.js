import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { Route } from 'react-router-dom';
import Slide2 from './component/Slide2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/myprojects" element={<Projects/>}/>
        <Route path="/myResume" element={<Resume />}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
