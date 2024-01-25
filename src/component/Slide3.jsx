import React from 'react'
import { Button } from '@mui/material'
import { FaArrowUp } from "react-icons/fa";
import {HashLink as Link} from 'react-router-hash-link'
function Slide3() {
  return (
    <div style={{ height: '100vh' }}>
      <div style={{ display: 'flex', paddingTop: '10%' }}>
        <div style={{ height: "fit-content", width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="slide3form" style={{ display: 'flex-row', justifyContent: 'center', alignItems: 'center', color: 'white' }} >
            <h1 style={{ fontSize: '50px' }}>Send me a message!</h1>
            <h3 style={{ fontSize: '25px', marginLeft: "150px", color: '#e3dddc' }}>say helloo</h3>
          </div>
        </div>

      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }} >
        <div className='formdiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '25px' }} class=" input-group" id="full-name">
          <label for="full-name"> Your Name</label>
          <input id="full-name" placeholder="Enter your name" type="text" name="name" required="required" style={{ width: '300px', height: '40px',maxWidth:'500px', backgroundColor: '#e3dddc', borderRadius: '9px', border: 'none', padding: '10px', margin: '5px' }} /></div>
      
        <div className='formdiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '25px' }} class=" input-group" id="full-name">
          <label for="email">your email</label>
          <input id="email" placeholder="Enter your emailid" type="text" name="name" required="required"
            style={{ width: '70%',maxWidth:'300px', height: '40px', backgroundColor: '#e3dddc', borderRadius: '9px', border: 'none', padding: '10px', margin: '5px' }} /></div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: '-20px' }} >
        <div className='formdiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '10px' }} class=" input-group" id="full-name">
          <label for="full-name"> Your message</label>
          <input id="full-name" placeholder="Enter your message" type="textarea" name="name" required="required" style={{ width: '658px', height: '100px', backgroundColor: '#e3dddc', borderRadius: '9px', border: 'none', padding: '10px', margin: '5px' }} /></div>


      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: '-20px' }} >
      <div className='formdiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
      <Button variant="contained" size='medium' style={{backgroundColor:'#ffd11a',color:'black',textShadow:'1px 1px 1px 1px black',height:'40px',marginTop:'15px'}}>Containedde</Button>
      </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', marginTop: '-20px' }} >
   <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',width:'70px',height:'70px',backgroundColor:'#ffd11a',margin:'0 20px',borderRadius:'50%',border:'1px solid black'}}>

   <Link to='#homesection'className='iconav' style={{padding:'40px',textDecoration:'none',fontSize:'50px',color:"#00264d"}}><FaArrowUp/></Link>
   </div>
      </div>
    </div>
  )
}

export default Slide3