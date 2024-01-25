import React from 'react'
import Navibar from './Navibar'
import { FaCode } from "react-icons/fa6";
import{HashLink as Link } from 'react-router-hash-link';
function Header() {
  return (
    <div style={{width:'100%',backgroundColor:'transparent'}}>
<div style={{width:'50%',display:'flex',justifyContent:'left',alignItems:'center',}}>
    <Link to={'/'}className='iconav' style={{padding:'40px',textDecoration:'none',fontSize:'50px',color:"#00264d"}}><FaCode /></Link>
</div>
<div style={{display:'flex',justifyContent:'right'}}>
<Navibar/>
</div>

    </div>
  )
}

export default Header