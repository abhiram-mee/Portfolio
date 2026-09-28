import React from 'react'
import './intro.css'
import bg from '../../assets/mypic.png'
import btnimg from '../../assets/btnimg.png'  
import {Link} from 'react-scroll';

const Intro = () => {
  return (
  <section id='intro'>
    <div className='introContent'>

        <span className='hello'>Hello,</span>

        <span className='introText'>
            I'm <span className='introName'>Abhiram</span><br/>
            MCA Graduate &<br/>
            Software Developer | Data Analyst
        </span>

        <p className='introPara'>
            Aspiring Data Analyst with a strong technical foundation in SQL,
            Excel, Power BI, Python, and MySQL, with experience in web
            development and data-driven projects.
        </p>

        <Link>
            <button className='btn'>
                <img src={btnimg} alt=''/>
                Hire me
            </button>
        </Link>

    </div>

    <img src={bg} alt='profile' className='bg'/>
</section>

  )
}

export default Intro
