import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from'../../assets/contact.png';
import menu from '../../assets/menu.png'
import {Link} from 'react-scroll';


const Navbar = () => {
  const [showMenu,setshowMenu]=useState(false)
  return (
   <nav className='navbar'>
    <img src ={logo} alt='Logo' className='logo'/>
    <div className='desktopMenu'>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={500}   className='desktopMenuListItem'>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100}  duration={500}  className='desktopMenuListItem'>About</Link>
    <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100}  duration={500} className='desktopMenuListItem'>Projects</Link>
    <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-100}  duration={500} className='desktopMenuListItem'>Tech Stack</Link>
    <Link  activeClass='active' to='techkills' spy={true} smooth={true} offset={-100}  duration={500} className='desktopMenuListItem'>Skills</Link>
    </div>
    <button className='desktopMenuBtn' onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
    }}>
    <img src={contact}alt='Contact'className='desktopMenuImg'/> Contact me</button>
    <img src ={menu} alt='Menu' className='mobMenu' onClick={()=>{setshowMenu(!showMenu)}}/>
    <div
  className='navMenu'style={{ display: showMenu ? 'flex' : 'none' }}>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={500}   className='listItem' onClick={()=>{setshowMenu(false)}}>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100}  duration={500}  className='listItem'onClick={()=>{setshowMenu(false)}}>About</Link>
    <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100}  duration={500} className='listItem' onClick={()=>{setshowMenu(false)}}>Projects</Link>
    <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-100}  duration={500} className='listItem'onClick={()=>{setshowMenu(false)}}>Tech Stack</Link>
    <Link  activeClass='active' to='techkills' spy={true} smooth={true} offset={-100}  duration={500} className='listItem'onClick={()=>{setshowMenu(false)}}>Skills</Link>
    <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100}  duration={500} className='listItem'onClick={()=>{setshowMenu(false)}}>contact</Link>
    </div>
        
    </nav>
  )
}

export default Navbar
