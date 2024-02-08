import React from 'react';

function Footer() {
  return (
    <>
      <div className='mainfoot' style={{ backgroundColor: '#00264d' }}>
        <div className='flex flex-col items-center justify-center'>

          <div className='social flex justify-between items-center  ml-10 pt-5'>
            <div className='icon mr-4'>
              <a href='https://www.linkedin.com/in/rehna-p-g/' target='_blank'>
                <i className='fab fa-linkedin-in text-white text-2xl'></i>
              </a>
            </div>
            <div className='icon mr-4'>
              <a href='https://github.com/Reh-na' target='_blank'>
                <i className='fab fa-github text-white text-2xl'></i>
              </a>
            </div>
            <div className='icon mr-4'>
              <a href='https://wa.me/9074885922' target='_blank'>
                <i className='fab fa-whatsapp text-white text-2xl'></i>
              </a>
            </div>
            <div className='icon mr-4'>
              <a href='' target='_blank'>
                <i className='fab fa-instagram text-white text-2xl'></i>
              </a>
            </div>
          </div>

          <div className='block mt-25'>
            <p className='text-white'>Copyright © 2024 portfolio of rehna. Built with React.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
