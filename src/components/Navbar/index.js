import React, {useState} from 'react'
import Logo from '../../assets/logo (2).png'
import {FaBars, FaTimes} from 'react-icons/fa'
import './style.css'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState(false);

    const handleNav = () => setNav(!nav);

    const handleColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener('scroll', handleColor)

  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar' }>
        <div className='container'>
            <div><img src={Logo} alt='smash logo'/></div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li>Home</li>
                <li>Order</li>
                <li>Menu</li>
                <li>Delivery</li>
                <li>Contact</li>
            </ul>
            <div className='burger-menu' onClick={handleNav}>
                {nav ? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20}/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar