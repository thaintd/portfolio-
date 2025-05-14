import React from 'react'
import './App.css'
import ME from './assets/me.png'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi2'
import { MdWork, MdCode, MdWeb, MdStorage, MdDevices } from 'react-icons/md'
import { SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiMongodb, SiExpress, SiGit, SiTailwindcss } from 'react-icons/si'

function App() {
  const handleDownloadCV = () => {
    // Thay đổi đường dẫn tới file CV của bạn
    const cvUrl = '/path-to-your-cv.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <>
      <nav id="desktop-nav">
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      

      <nav id="mobile-tab" className="mobile-tab">
    <a href="#about">About</a>
    <a href="#resume">Resume</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>


      

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="about-container">
          <div className="about-image">
            <img src={ME} alt="Duy Thái profile picture" />
          </div>
          <div className="about-content">
            <h1>Duy Thái</h1>
            <p className="section__text__p2">Frontend Developer</p>
            <p>
              I am a passionate Frontend Developer with experience in building responsive and user-friendly web applications.
              I specialize in React, TypeScript, and modern web technologies.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>+84 123 456 789</span>
              </div>
              <div className="contact-item">
                <FaBirthdayCake className="icon" />
                <span>01/01/2000</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>Hanoi, Vietnam</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>example@gmail.com</span>
              </div>
            </div>
            <div className="btn-container">
              <button className="btn btn-color-2" onClick={handleDownloadCV}>
                Download CV
              </button>
              <button className="btn btn-color-1">
                Contact Info
              </button>
            </div>
            <div id="socials-container">
              <FaLinkedin
                className="icon"
                onClick={() => window.open('https://linkedin.com/')}
              />
              <FaGithub
                className="icon"
                onClick={() => window.open('https://github.com/')}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="resume">
        <p className="section__text__p1">My Journey</p>
        <h1 className="title">Resume</h1>
        
        <div className="resume-container">
          <div className="resume-grid">
            <div className="resume-card">
              <h3>
                <HiAcademicCap className="icon" />
                Education
              </h3>
              <div className="resume-item">
                <h4>FPT University</h4>
                <span>2019 — 2023</span>
                <p>
                  Bachelor's Degree in Software Engineering
                  Major in Web Development and Software Design
                  GPA: 3.5/4.0
                </p>
              </div>
              <div className="resume-item">
                <h4>Web Development Bootcamp</h4>
                <span>2022</span>
                <p>
                  Intensive 6-month program focusing on modern web technologies
                  and best practices in software development
                </p>
              </div>
            </div>

            <div className="resume-card">
              <h3>
                <MdWork className="icon" />
                Experience
              </h3>
              <div className="resume-item">
                <h4>Frontend Developer</h4>
                <span>2022 — Present</span>
                <p>
                  • Developed responsive web applications using React and TypeScript
                  • Implemented state management using Redux and Context API
                  • Collaborated with UX/UI designers to create intuitive interfaces
                  • Optimized application performance and loading times
                </p>
              </div>
              <div className="resume-item">
                <h4>Web Developer Intern</h4>
                <span>2021 — 2022</span>
                <p>
                  • Assisted in developing and maintaining web applications
                  • Implemented responsive designs and UI components
                  • Worked with REST APIs and database integration
                  • Participated in code reviews and team meetings
                </p>
              </div>
            </div>
          </div>

          <div className="skills-container">
            <h3 className="h3 skills-title">My Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <SiJavascript className="icon" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <SiTypescript className="icon" />
                <span>TypeScript</span>
              </div>
              <div className="skill-item">
                <SiReact className="icon" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <SiNodedotjs className="icon" />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <SiHtml5 className="icon" />
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <SiCss3 className="icon" />
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <SiExpress className="icon" />
                <span>Express</span>
              </div>
              <div className="skill-item">
                <SiMongodb className="icon" />
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <SiGit className="icon" />
                <span>Git</span>
              </div>
              <div className="skill-item">
                <SiTailwindcss className="icon" />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-img-container">
              <img src={ME} alt="Project 1" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">E-Commerce Platform</h3>
              <p className="project-description">
                A full-stack e-commerce platform built with React, Node.js, and MongoDB.
                Features include user authentication, product management, shopping cart,
                and payment integration.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img-container">
              <img src={ME} alt="Project 2" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Task Management App</h3>
              <p className="project-description">
                A collaborative task management application with real-time updates.
                Includes features like task assignment, progress tracking, and team collaboration.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Firebase</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img-container">
              <img src={ME} alt="Project 3" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Weather Dashboard</h3>
              <p className="project-description">
                A weather dashboard that displays current and forecasted weather data.
                Features include location search, temperature conversion, and weather alerts.
              </p>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>OpenWeather API</span>
                <span>CSS3</span>
                <span>HTML5</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <FaEnvelope className="icon contact-icon email-icon" />
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <FaLinkedin className="icon contact-icon" />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default App
