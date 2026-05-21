import React from 'react'
import './intro.css'
import bg from '../../assets/bg.png'
import btnimg from '../../assets/btnimg.png'  
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='IntroText'>I'm <span className='introName'>Abhiram</span><br/> MCA Graduate & Software Developer</span>
            <p className='introPara'> Aspiring software developer focused on frontend and  <br/> backend web development with modern technologies.</p>
        <Link><button className='btn'><img src={btnimg}alt=''/>Hire me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>

  )
}

export default Intro
