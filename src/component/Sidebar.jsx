import React from 'react'

import './sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar({show}) {
  return (
    <div className={show?'sidenav active':'sidenav'}>
        <ul>
            <li><Link to='/'>Home</Link></li>
        </ul>
        <ul>
            <li><Link to='/myprojects'>My Projects</Link></li>
        </ul>
        <ul>
            <li><Link to='/myResume'>My Resume</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar