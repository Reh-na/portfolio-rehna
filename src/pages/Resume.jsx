import React from 'react';
import Header from '../component/Header';
import cv from '../images/cv.svg';

function Resume() {
  return (
    <div className='pro' style={{  width: '100%' }}>
      <Header />
      <div style={{ width: '100%', display: 'block', margin: '2%', textAlign: 'center', padding: '2%' }}>
        <img src={cv} alt="CV" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Resume;
