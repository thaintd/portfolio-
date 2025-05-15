import React, { useState } from 'react'
import './App.css'
import ME from './assets/me.png'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaLanguage } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi2'
import { MdWork, MdCode, MdWeb, MdStorage, MdDevices } from 'react-icons/md'
import { SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiMongodb, SiExpress, SiGit, SiTailwindcss, SiNestjs, SiRedux, SiMui, SiBootstrap } from 'react-icons/si'

function App() {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'vi' for Vietnamese

  const translations = {
    en: {
      nav: {
        about: "About",
        resume: "Resume",
        projects: "Projects",
        contact: "Contact"
      },
      about: {
        getToKnow: "Get To Know More",
        aboutMe: "About Me",
        role: "Frontend Developer",
        description: "Motivated software engineering student seeking a developer internship to gain hands-on experience in Software Development. I aim to leverage my expertise in technologies such as NodeJS, ReactJS to contribute to impactful projects. Long-term, I aspire to drive innovation and support organizational growth as a key team member.",
        downloadCV: "Download CV",
        contactInfo: "Contact Info"
      },
      resume: {
        myJourney: "My Journey",
        resume: "Resume",
        education: "Education",
        experience: "Experience",
        skills: "My Skills",
        fptUniversity: "FPT University",
        major: "Major: Software Engineering",
        finalYear: "Final year student",
        frontendIntern: "Frontend Intern - FPT Software",
        internTasks: [
          "Participated in building interfaces and small functions for the project",
          "Supported fixing frontend errors and ensured optimal performance",
          "Made weekly reports"
        ]
      },
      projects: {
        browse: "Browse My Recent",
        projects: "Projects",
        koiShop: {
          title: "KOI SHOP",
          description: "E-commerce platform for koi fish. Buyers can browse and purchase koi fish, sellers can manage their listings, and admins handle the overall system. Completed with a team of 5 members."
        },
        goodsExchange: {
          title: "Goods Exchange Application for FU Students",
          description: "Platform for FPT University students to buy and sell goods within the university. Features include item browsing, search functionality, real-time chat, and user reviews. Worked as both Frontend and Backend Developer in a team of 5."
        },
        onlineShop: {
          title: "Online Shop",
          description: "Online platform for buyers to make purchases and manage profiles, shop owners to manage their products, and administrators to oversee the entire system. Worked as Frontend Developer in a team of 5."
        },
        viewCode: "View Code"
      },
      contact: {
        getInTouch: "Get in Touch",
        contactMe: "Contact Me"
      }
    },
    vi: {
      nav: {
        about: "Giới Thiệu",
        resume: "Hồ Sơ",
        projects: "Dự Án",
        contact: "Liên Hệ"
      },
      about: {
        getToKnow: "Tìm Hiểu Thêm",
        aboutMe: "Về Tôi",
        role: "Lập Trình Viên Frontend",
        description: "Sinh viên ngành kỹ thuật phần mềm đang tìm kiếm cơ hội thực tập để phát triển kinh nghiệm thực tế về Phát triển Phần mềm. Tôi mong muốn ứng dụng kiến thức về NodeJS, ReactJS để đóng góp vào các dự án có tác động. Về lâu dài, tôi khát khao thúc đẩy sự đổi mới và hỗ trợ sự phát triển của tổ chức với vai trò là thành viên chủ chốt trong đội ngũ.",
        downloadCV: "Tải CV",
        contactInfo: "Thông Tin Liên Hệ"
      },
      resume: {
        myJourney: "Hành Trình Của Tôi",
        resume: "Hồ Sơ",
        education: "Học Vấn",
        experience: "Kinh Nghiệm",
        skills: "Kỹ Năng",
        fptUniversity: "Đại học FPT",
        major: "Chuyên ngành: Kỹ thuật phần mềm",
        finalYear: "Sinh viên năm cuối",
        frontendIntern: "Thực tập sinh Frontend - FPT Software",
        internTasks: [
          "Tham gia xây dựng giao diện và các chức năng nhỏ cho dự án",
          "Hỗ trợ sửa lỗi frontend và đảm bảo hiệu suất tối ưu",
          "Làm báo cáo hàng tuần"
        ]
      },
      projects: {
        browse: "Khám Phá Những",
        projects: "Dự Án Gần Đây",
        koiShop: {
          title: "KOI SHOP",
          description: "Nền tảng thương mại điện tử cho cá koi. Người mua có thể duyệt và mua cá koi, người bán có thể quản lý danh sách sản phẩm, và quản trị viên điều hành toàn bộ hệ thống. Hoàn thành với đội nhóm 5 thành viên."
        },
        goodsExchange: {
          title: "Ứng Dụng Trao Đổi Hàng Hóa cho Sinh Viên FU",
          description: "Nền tảng cho sinh viên Đại học FPT mua bán hàng hóa trong trường. Tính năng bao gồm duyệt sản phẩm, tìm kiếm, trò chuyện thời gian thực và đánh giá người dùng. Làm việc với vai trò Lập trình viên Frontend và Backend trong đội nhóm 5 người."
        },
        onlineShop: {
          title: "Cửa Hàng Trực Tuyến",
          description: "Nền tảng trực tuyến cho người mua để mua hàng và quản lý hồ sơ, chủ cửa hàng quản lý sản phẩm của họ, và quản trị viên giám sát toàn bộ hệ thống. Làm việc với vai trò Lập trình viên Frontend trong đội nhóm 5 người."
        },
        viewCode: "Xem Mã Nguồn"
      },
      contact: {
        getInTouch: "Kết Nối",
        contactMe: "Liên Hệ Với Tôi"
      }
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  const handleDownloadCV = () => {
    // Path to your CV file
    const cvUrl = '/Frontend Developer_Nguyen Tran Duy Thai.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <>
      <div className="language-toggle">
        <label className="language-switch">
          <input type="checkbox" checked={language === 'vi'} onChange={toggleLanguage} />
          <span className="language-slider round">
            <span className="language-option left">EN</span>
            <span className="language-option right">VI</span>
          </span>
        </label>
      </div>

      <nav id="desktop-nav">
        <div>
          <ul className="nav-links">
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#resume">{t.nav.resume}</a></li>
            <li><a href="#projects">{t.nav.projects}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
        </div>
      </nav>
      
      <nav id="mobile-tab" className="mobile-tab">
        <a href="#about">{t.nav.about}</a>
        <a href="#resume">{t.nav.resume}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>

      <section id="about">
        <p className="section__text__p1">{t.about.getToKnow}</p>
        <h1 className="title">{t.about.aboutMe}</h1>
        <div className="about-container">
          <div className="about-image">
            <img src={ME} alt="Duy Thái profile picture" />
          </div>
          <div className="about-content">
            <h1>Nguyen Tran Duy Thai</h1>
            <p className="section__text__p2">{t.about.role}</p>
            <p>
              {t.about.description}
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>0981642669</span>
              </div>
              <div className="contact-item">
                <FaBirthdayCake className="icon" />
                <span>12/02/2003</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>9 District, Ho Chi Minh City</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>thaintd12@gmail.com</span>
              </div>
            </div>
            <div className="btn-container">
              <button className="btn btn-color-2" onClick={handleDownloadCV}>
                {t.about.downloadCV}
              </button>
              <button className="btn btn-color-1" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
                {t.about.contactInfo}
              </button>
            </div>
            <div id="socials-container">
              <FaLinkedin
                className="icon"
                onClick={() => window.open('https://www.linkedin.com')}
              />
              <FaGithub
                className="icon"
                onClick={() => window.open('https://github.com/thaintd')}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="resume">
        <p className="section__text__p1">{t.resume.myJourney}</p>
        <h1 className="title">{t.resume.resume}</h1>
        
        <div className="resume-container">
          <div className="resume-grid">
            <div className="resume-card">
              <h3>
                <HiAcademicCap className="icon" />
                {t.resume.education}
              </h3>
              <div className="resume-item">
                <h4>{t.resume.fptUniversity}</h4>
                <span>09/2021 — Present</span>
                <p>
                  {t.resume.major}
                  <br />
                  {t.resume.finalYear}
                </p>
              </div>
            </div>

            <div className="resume-card">
              <h3>
                <MdWork className="icon" />
                {t.resume.experience}
              </h3>
              <div className="resume-item">
                <h4>{t.resume.frontendIntern}</h4>
                <span>01/2024 — 04/2024</span>
                <p>
                  • {t.resume.internTasks[0]}
                  <br />
                  • {t.resume.internTasks[1]}
                  <br />
                  • {t.resume.internTasks[2]}
                </p>
              </div>
            </div>
          </div>

          <div className="skills-container">
            <h3 className="h3 skills-title">{t.resume.skills}</h3>
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
                <SiExpress className="icon" />
                <span>Express</span>
              </div>
              <div className="skill-item">
                <SiNestjs className="icon" />
                <span>NestJS</span>
              </div>
              <div className="skill-item">
                <SiRedux className="icon" />
                <span>Redux Toolkit</span>
              </div>
              <div className="skill-item">
                <SiMui className="icon" />
                <span>MUI</span>
              </div>
              <div className="skill-item">
                <SiBootstrap className="icon" />
                <span>Bootstrap</span>
              </div>
              <div className="skill-item">
                <SiGit className="icon" />
                <span>Git/GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <p className="section__text__p1">{t.projects.browse}</p>
        <h1 className="title">{t.projects.projects}</h1>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-img-container">
              <img src={ME} alt="KOI SHOP Project" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{t.projects.koiShop.title}</h3>
              <p className="project-description">
                {t.projects.koiShop.description}
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Redux Toolkit</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/koithe" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                  {t.projects.viewCode}
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img-container">
              <img src={ME} alt="Goods Exchange App" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{t.projects.goodsExchange.title}</h3>
              <p className="project-description">
                {t.projects.goodsExchange.description}
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>WebSocket</span>
                <span>NestJS</span>
                <span>KeyCloak</span>
                <span>MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/SWD392" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                  {t.projects.viewCode}
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img-container">
              <img src={ME} alt="Online Shop" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{t.projects.onlineShop.title}</h3>
              <p className="project-description">
                {t.projects.onlineShop.description}
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Spring Boot</span>
                <span>Docker</span>
                <span>MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/swp391" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                  {t.projects.viewCode}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <p className="section__text__p1">{t.contact.getInTouch}</p>
        <h1 className="title">{t.contact.contactMe}</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <FaEnvelope className="icon contact-icon email-icon" />
            <p><a href="mailto:thaintd12@gmail.com">thaintd12@gmail.com</a></p>
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
