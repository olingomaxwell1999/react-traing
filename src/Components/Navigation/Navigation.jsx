import React from 'react'
import './navigation.scss'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link style={{textDecoration: 'none'}} to='/'>Home</Link>
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to='/about'>about</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navigation