import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './navbar.css'
import Sidebar from './Sidebar'
function Navibar() {
  const [showNav, setshownav] = useState(false)
  return (
    <div><header>
      <GiHamburgerMenu onClick={() => setshownav(!showNav)} style={{ color: '#00264d' }} />
    </header>
      {<Sidebar show={showNav} />}
    </div>
  )
}

export default Navibar