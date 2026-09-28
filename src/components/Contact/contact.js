import React, { useRef } from 'react'
import './contact.css'
import img1 from '../../assets/python.png'
import img2 from '../../assets/mysql.png'
import img3 from '../../assets/java.png'
import img4 from '../../assets/react.png'
import img5 from '../../assets/django.png'
import img6 from '../../assets/html.png'
import img7 from '../../assets/css.png'
import img8 from '../../assets/js.png'
import img9 from '../../assets/power.png'
import img10 from '../../assets/excel.png'
import img11 from '../../assets/postman.png'
import img12 from '../../assets/axios.png'
import img13 from '../../assets/git.png'
import img14 from '../../assets/dream.jpg'
import img15 from '../../assets/vs.png'
import img16 from '../../assets/pc.png'
import icon1 from '../../assets/git.png'
import icon3 from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0i354lp', 'template_va4y6ew', form.current, {
        publicKey: 'Y0zK64IKlUVWaiP6q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <section className='contactPage'>
   <div id='clients'>
    <h1 className='contactPageTitle'> Tech Stack</h1>
    <p className='clientDesc'>
         Technologies and tools I use for developing
  responsive web applications, software solutions,
  and data-driven projects.
    </p>
    <div className='clientImgs'>
        <img src={img1} alt='' className='clientImg'/>
             <img src={img2} alt='' className='clientImg'/>
                  <img src={img3} alt='' className='clientImg'/>
                       <img src={img4} alt='' className='clientImg'/>
                       <img src={img5} alt='' className='clientImg'/>
                       <img src={img6} alt='' className='clientImg'/>
                       <img src={img7} alt='' className='clientImg'/>
                       <img src={img8} alt='' className='clientImg'/>
                       <img src={img9} alt='' className='clientImg'/>
                       <img src={img10} alt='' className='clientImg'/>
                       <img src={img11} alt='' className='clientImg'/>
                       <img src={img12} alt='' className='clientImg'/>
                       <img src={img13} alt='' className='clientImg'/>
                       <img src={img14} alt='' className='clientImg'/>
                        <img src={img15} alt='' className='clientImg'/>
                         <img src={img16} alt='' className='clientImg'/>
    </div>

<section id="techkills">

  <div className="skillsContainer">

    <h1 className="skillTitle">
      Skills & Expertise
    </h1>

    <p className="skillDescription">
      Passionate about developing responsive and user-friendly web applications
      while continuously improving technical and professional skills.
    </p>
    
   
    <div className="aboutSkillBars">
       <div className="aboutSkillCard">

        <div className="aboutSkillText">
          <h1>Data Analytics</h1>

          <p>
           SQL, Excel, Power BI, Python, Pandas, NumPy,
      Data Cleaning & Visualization
          </p>
        </div>

      </div>

      <div className="aboutSkillCard">

        <div className="aboutSkillText">
          <h1>Frontend Development</h1>

          <p>
            HTML, CSS, JavaScript, React.js,
            Responsive Web Design
          </p>
        </div>

      </div>

      

      <div className="aboutSkillCard">

        <div className="aboutSkillText">
          <h1>Backend Development</h1>

          <p>
            Python, Django Framework , .NET Basics, Java 
          </p>
        </div>

      </div>

      <div className="aboutSkillCard">

        <div className="aboutSkillText">
          <h1>Database Management</h1>

          <p>
            MySQL, SQL Queries,
            Database Design
          </p>
        </div>

      </div>

      <div className="aboutSkillCard">

        <div className="aboutSkillText">
          <h1>Tools & Technologies</h1>

          <p>
            Git, GitHub, VS Code,
            PyCharm, Postman
          </p>
        </div>

      </div>

      <div className="aboutSkillCard">

        <div className="aboutSkillText">
          <h1>Professional Skills</h1>

          <p>
            Communication, Problem Solving,
            Teamwork, Adaptability,
            Time Management, Patience
          </p>
        </div>

      </div>

      <div className="aboutSkillCard">

        <div className="aboutSkillText">
          <h1>Learning & Growth</h1>

          <p>
            Continuous Learning,
            Self-Motivation,
            Quick Learner,
            Attention to Detail
          </p>
        </div>

      </div>

    </div>

  </div>

</section> 

   
   
   </div>
    <div id='contact'> 
     <h1 className='contactPageTitle'> Contact Me</h1>
     <span className='contactDesc'> Feel free to contact me for job opportunities, collaborations, or project discussions.</span>
     <form className='contactForm' ref={form} onSubmit={sendEmail}>
     <input type='text' className='name' placeholder='Your Name' name='name'/>
     <input type='email' className='email' placeholder='Email' name='email'/>
     <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
     <button  type='submit' value='send' className='submitBtn'> Submit</button>
     <div className='links'>

  <a 
    href="https://github.com/abhiram-mee"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={icon1} alt='github' className='link'/>
  </a>

  <a 
    href="https://linkedin.com/in/abhiram-e-a901793a2"
    target="_blank"
    rel="noopener noreferrer"
  >
   
   
  
    <img src={icon3} alt='linkedin' className='link'/>
  </a>

</div>

     </form>
    </div>
    </section>
  )
}

export default Contact
