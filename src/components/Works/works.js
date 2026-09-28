
import React from 'react';
import './works.css';

import portfolio1 from '../../assets/motorhub.png';
import portfolio2 from '../../assets/streamverse.png';
import portfolio3 from '../../assets/amazon.png';
import portfolio4 from '../../assets/currency.png';
import portfolio5 from '../../assets/scissor.png';
import portfolio6 from '../../assets/Dashboard.png.png';
import portfolio7 from '../../assets/pizza.png';

const Works = () => {
  return (
    <section id='works'>

      <h2 className='workTitle'>Projects</h2>

      <span className='workDesc'>
        Here are some of the projects I developed using modern web technologies
        including React, Django, Python, JavaScript, and MySQL.
      </span>
      <div className='workCards'>
      <div className='workCard'>
          <img src={portfolio6} alt='COFFEE SHOP SALES' className='workImg'/>

          <h3>COFFEE SHOP SALES</h3>

          <p>
           Created an interactive sales dashboard using Excel to analyze coffee shop sales, customer orders, product performance, and revenue trends.
          </p>

          <span className='techStack'>
          Excel • Pivot Tables • Data Analysis • Dashboard
          </span>
          <div className='projectBtns'>

    <a
      href='https://github.com/abhiram-mee/Coffee-shop-sales'
      target='_blank'
      rel='noreferrer'
      className='projectBtn'
    >
      GitHub
    </a>

  </div>
        </div>

       <div className='workCard'>
          <img src={portfolio7} alt='Pizza Sales Analysis Using SQL' className='workImg'/>

          <h3>Pizza Sales Analysis using SQL</h3>

          <p>
          Analyzed pizza sales data using SQL to uncover revenue trends,
    top-selling pizzas, customer order patterns, and category-level
    performance.
          </p>

          <span className='techStack'>
          MySQL • SQL • Data Analysis • MySQL Workbench
          </span>
          <div className='projectBtns'>

    <a
      href='https://github.com/abhiram-mee/pizza-sales--SQL'
      target='_blank'
      rel='noreferrer'
      className='projectBtn'
    >
      GitHub
    </a>

  </div>
        </div>
        <div className='workCard'>
          <img src={portfolio1} alt='MOTORHUB' className='workImg'/>

          <h3>MOTORHUB</h3>

          <p>
            Digital vehicle management system developed using Django and MySQL
            for managing vehicle records and bookings.
          </p>

          <span className='techStack'>
            Python • Django • MySQL • HTML • CSS
          </span>
          <div className='projectBtns'>

    <a
      href='https://github.com/abhiram-mee/MOTORHUB-Digital-vehicle-management-system-'
      target='_blank'
      rel='noreferrer'
      className='projectBtn'
    >
      GitHub
    </a>

  </div>
        </div>

        <div className='workCard'>
          <img src={portfolio2} alt='StreamVerse' className='workImg'/>

          <h3>StreamVerse</h3>

<p>
  Movie streaming web application developed using React
  with API integration and Axios for fetching movie data
  and playing trailers dynamically.
</p>

<span className='techStack'>
  React • JavaScript • Axios • API • CSS
</span>
<div className='projectBtns'>

    <a
      href='https://github.com/abhiram-mee/STREAM-VERSE'
      target='_blank'
      rel='noreferrer'
      className='projectBtn'
    >
      GitHub
    </a>

  </div>

 </div>

        <div className='workCard'>
          <img src={portfolio3} alt='Amazon Clone' className='workImg'/>

          <h3>Amazon Clone</h3>

          <p>
            Built a responsive Amazon homepage clone using HTML and CSS, featuring a modern user interface, flexible layout design, navigation bar, product sections, and mobile-friendly responsiveness.
          </p>

          <span className='techStack'>
            React • CSS • JavaScript
          </span>

          <div className='projectBtns'>

    <a
      href='https://github.com/abhiram-mee/Amazon-Website'
      target='_blank'
      rel='noreferrer'
      className='projectBtn'
    >
      GitHub
    </a>

  </div>
        </div>

        <div className='workCard'>
          <img src={portfolio4} alt='Currency Converter' className='workImg'/>

          <h3>Currency Converter</h3>

          <p>
            Real-time currency converter application using API integration
            and responsive user interface.
          </p>

          <span className='techStack'>
            JavaScript • API • HTML • CSS
          </span>

          <div className='projectBtns'>

    <a
      href='https://github.com/abhiram-mee/currency-converter'
      target='_blank'
      rel='noreferrer'
      className='projectBtn'
    >
      GitHub
    </a>

  </div>
        </div>

        <div className='workCard'>
          <img src={portfolio5} alt='stone scissor' className='workImg'/>

          <h3>Rock Paper Scissors Game</h3>

       <p>
           Interactive Rock Paper Scissors game developed using
           JavaScript with real-time score tracking and dynamic
          game result updates.
       </p>

<span className='techStack'>
  JavaScript • HTML • CSS
</span>

<div className='projectBtns'>

    <a
      href='https://github.com/abhiram-mee/Rock-paper-scissor-game'
      target='_blank'
      rel='noreferrer'
      className='projectBtn'
    >
      GitHub
    </a>

  </div>
        </div>

      </div>

    </section>
  )
}

export default Works;