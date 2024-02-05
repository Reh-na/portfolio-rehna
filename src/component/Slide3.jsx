import React from 'react'
import { Button } from '@mui/material'
import { FaArrowUp } from "react-icons/fa";
import {HashLink as Link} from 'react-router-hash-link'

import './Slide3.css'
function Slide3() {
  return (
    <div className='slide-3' >
      <div  style={{ display: 'flex', paddingTop: '5%',marginTop:'70px' }}>
        <div style={{ height: "fit-content", width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="slide3form" style={{ display: 'flex-row', justifyContent: 'center', alignItems: 'center', color: 'white' }} >
            <h1 className='slide3mainhead'>Send me a message!</h1>
            <h3 className='slide3sidehead' >say helloo</h3>
          </div>
        </div>

      </div>
      <div  className='slidetabs' >
       
        <div className='formdiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '25px' }} class=" input-group" id="full-name">
          <label for="full-name"> Your Name</label>
          <input id="full-name" className='tabs' placeholder="Enter your name" type="text" name="name" required="required"  /></div>
      
          <div className='formdiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '25px' }} class=" input-group" id="email">
          <label for="email"> Your Email</label>
          <input id="email" className='tabs' placeholder="Enter your email" type="text" name="email" required="required"  /></div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: '-20px' }} >
        <div className='formdiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '10px' }} class=" input-group" id="full-name">
          <label for="full-name"> Your message</label>
          <textarea className='msgtab' placeholder="Enter your message" type="textarea"  required="required" rows='3' /></div>


      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: '-20px' }} >
      <div className='formdiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
      <Button className='gradbtn'variant="contained" size='medium' style={{backgroundColor:'#ffd11a',color:'black',textShadow:'1px 1px 1px 1px black',height:'40px',marginTop:'15px'}}>Send To Me</Button>
      </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', marginTop: '-20px' }} >
   <div className='grad' style={{
        marginBottom:'40px'
      }}> 

   <Link to='#homesection'className='iconav' ><FaArrowUp/></Link>
   </div>
      </div>
    </div>
  )
}

export default Slide3