import React from 'react';
import Header from '../component/Header';
import cv from '../images/cv.svg';
import Footer from '../component/Footer';
import './resume.css'
function Resume() {
  return (
  <>
      <div className='pro'  >
      <div className="headover " ><Header/></div>
        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',padding:'3%' }}>
          <img src={cv} alt="CV" style={{ Width: '70%', height: 'auto' }} />
        </div>
  
      </div>
     <Footer/>
  </>

  );
}

export default Resume;
