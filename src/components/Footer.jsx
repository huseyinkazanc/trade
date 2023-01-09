import React from 'react'
import "./css/Footer.css"
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='foot'>
      <ul className="foot-one">
        <li className='foot-two'><Link to='/'>Adress</Link></li>
        <li className='foot-two'><Link to='/products'>Contact</Link></li>
        <li className='foot-two'><Link to='/galer'>Location</Link></li>
      </ul>
    </div>
  )
}

export default Footer
