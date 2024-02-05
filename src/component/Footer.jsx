import React from 'react'
import './footer.css'
function Footer() {
  return (
<>
      <div className='mainfoot'>
  <div style={{display:'flex-row',alignItems:'center',justifyContent:'center'}}>
    
    <div className='social'>
        <div class="icon">
        <a href="https://www.linkedin.com/in/rehna-p-g/" target="_blank"><i class="fa-brands fa-linkedin-in fa-2xl" ></i></a>
        </div>
        <div class="icon">
         <a href="https://github.com/Reh-na" target="_blank"><i class="fa-brands fa-github fa-2xl" ></i></a>
        </div>
        
        <div class="icon">
        <a href="https://wa.me/9074885922" target="_blank"><i class="fa-brands fa-whatsapp fa-2xl" ></i></a>
        </div> 
        <div class="icon">
        <a href="" target="_blank"><i class="fa-brands fa-instagram fa-2xl" ></i></a>
        
        </div> 
    </div>
    <div style={{display:'block',marginTop:'25px'}}>
        <p style={{color:'white'}}>Copyright © 2024 portfolio of rehna. Built with React.</p>
      </div>
        </div>
  </div>
    
</>
  )
}

export default Footer