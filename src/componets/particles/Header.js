import { Link } from 'react-router-dom'

import images from '../../assets/images/imgs'

import '../../assets/styles/css/particles/header.css'

function Header() {
  return (
    <header className='main-header'>
      <div className='cover'>
      <Link to="/" className='logo'>
        <img src={images.logo} alt='logp'/>
        <h3 className='title'>Palette</h3>
      </Link>

      <ul>
        <li>
          <Link to="about">About us</Link>
        </li>
        <li>
          <Link to="pallete/create">create palette</Link>
        </li>
      </ul>

      <Link to="contact-us" className='special-link'>Contact us</Link>
      </div>
    </header>
  )
}

export default Header;
