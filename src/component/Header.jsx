import React from 'react'
import Navibar from './Navibar'
import { Link } from 'react-router-dom'
import { FaCode } from "react-icons/fa6";
function Header() {
  return (
    <div style={{width:'100%',backgroundColor:'transparent'}}>
<div style={{width:'50%',display:'flex',justifyContent:'left',alignItems:'center',}}>
    <Link to='/'className='iconav active' style={{color:'black',padding:'40px',textDecoration:'none',fontSize:'50px',color:"#ffd11a"}}><FaCode /></Link>
</div>
<div style={{display:'flex',justifyContent:'right'}}>
<Navibar/>
</div>

    </div>
  )
}

export default Header