// import React from 'react';
// import'./skills.css';
// import UIdesign from '../../assets/uidesign.png'
// import Webdesign from '../../assets/webdesign.png'
// import Dataanalyst from '../../assets/dataanalyst.png'
// import software from '../../assets/software.png'
// const Skills = () => {
//   return (
//     <section id='skills'>
//       <span className='skillTitle'>What I do</span>
//       <span className='classDescription'>I am an MCA graduate passionate about software and web development. I enjoy building responsive and user-friendly applications using React, Django, Python, and MySQL. I am continuously learning modern technologies and improving my development skills through personal and academic projects.</span>
//      <div className='skillBars'>
//       <div className='skillBar'>
//         <img src={UIdesign} alt='uidesign'className='skillBarimg'/>
//         <div className='skillBarText'>
//           <h1>UI/UX Design</h1>
//           <p>This is a demo text</p>
//         </div>
//       </div>
//       <div className='skillBar'>
//         <img src={Webdesign} alt='webdesign'className='skillBarimg'/>
//         <div className='skillBarText'>
//           <h1> WEb Designing</h1>
//           <p>This is a demo text</p>
//         </div>
//       </div>
//       <div className='skillBar'>
//         <img src={Dataanalyst} alt='dataanalyst'className='skillBarimg'/>
//         <div className='skillBarText'>
//           <h1>Data analysis</h1>
//           <p>This is a demo text</p>
//         </div>
//       </div>
//       <div className='skillBar'>
//         <img src={software} alt='software developer'className='skillBarimg'/>
//         <div className='skillBarText'>
//           <h1>Software Developer</h1>
//           <p>This is a demo text</p>
//         </div>
//       </div>
//      </div>
//     </section>
//   )
// }

// export default Skills

import React from 'react';
import './skills.css';

import UIdesign from '../../assets/uidesign.png';
import backend from '../../assets/back.png';
import database from '../../assets/database.png';
import datanalyst from '../../assets/dataanalyst.png';

const Skills = () => {
  return (
    <section id='skills'>
      
      <span className='skillTitle'>About Me</span>

      <span className='skillDescription'>
        MCA Graduate & Software Developer | Data Analyst
       I enjoy analyzing data and building responsive, user-friendly applications using
SQL, Excel, Power BI, Python, React, Django, and MySQL. I have created an SQL
sales analysis project and an interactive Excel dashboard to explore data,
identify trends, and present meaningful insights. I continuously improve my
analytical and technical skills through personal and academic projects.
      </span>

      <div className='skillBars'>
         <div className='skillBar'>
          <img src={datanalyst} alt='software development' className='skillBarimg'/>

          <div className='skillBarText'>
            <h1>Data Analysis</h1>
            <p>
             Skilled in analyzing and visualizing data using 
             Python, MySQL, Excel, and Power BI to generate 
             meaningful insights and reports.
            </p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={UIdesign} alt='frontend development' className='skillBarimg'/>

          <div className='skillBarText'>
            <h1>Frontend Development</h1>

            <p>
              Building responsive and interactive user interfaces using 
              HTML, CSS, JavaScript, and React.
            </p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={backend} alt='backend development' className='skillBarimg'/>

          <div className='skillBarText'>
          <h1>Backend Development</h1>

            <p>
              Developing scalable backend applications using 
              Python,Django and MySQL.
            </p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={database} alt='database management' className='skillBarimg'/>

          <div className='skillBarText'>
            <h1>Database Management</h1>

            <p>
              Experience in designing and managing databases 
              using MySQL for web applications.
            </p>
          </div>
        </div>

       
      <div className='educationSection'>

  <h2 className='educationTitle'>
    Education
  </h2>

  <div className='educationCard'>

    <h3>MCA - Master of Computer Applications</h3>

    <p>
      SEA College of Science, Commerce and Arts
    </p>

    <span>
      Bangalore North University | 2023 - 2025
    </span>

  </div>

  <div className='educationCard'>

    <h3>BSc Computer Science</h3>

    <p>
      Kannur University
    </p>

    <span>
     kannur Unniversity | 2020-2023
    </span>

  </div>

</div>



      </div>
    </section>
  )
}

export default Skills;