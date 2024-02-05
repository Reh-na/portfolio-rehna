import React from 'react'
import Navibar from './Navibar'
import { FaCode } from "react-icons/fa6";
import './header.css'
import{HashLink as Link } from 'react-router-hash-link';
function Header() {
  return (
    <div  style={{width:'100%',backgroundColor:'transparent',height:'50px'}}>
<div  style={{width:'50%',display:'flex',justifyContent:'left',alignItems:'center',}}>
    <Link to={'/'}className='clrhead' style={{padding:'40px',textDecoration:'none'}}><FaCode /></Link>
</div>
<div className='headclr' style={{display:'flex',justifyContent:'right',marginTop:'-40px'}}>
<Navibar/>
</div>

    </div>
  )
}

export default Header