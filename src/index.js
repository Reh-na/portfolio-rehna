import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Routes } from 'react-router-dom';

import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { Route } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/myprojects" element={<Projects/>}/>
        <Route path="/myResume" element={<Resume />}/>
       
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

