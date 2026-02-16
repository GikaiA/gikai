// import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import eatly from "../assets/eatly.png";
import legend from "../assets/legendofti.png";
import cinalog from "../assets/cinalog.png";
import portfolio from "../assets/portfolio.png";

function Landing() {
  return (
    <div className="home">
      <div className="landing-section">
        <h1 className="landing-title">Hi, I&apos;m Gikai Andrews. </h1>
        <h2 className="landing-subtitle">Aspiring Software Engineer</h2>
        <p className="landing-description">
          I am a computer science graduate with a passion in software
          engineering. I mainly focus on web development and minor mobile
          applications developement. When I am not coding, I do enjoy playing
          video games, photography, reading, and longboarding.
        </p>
        <div className="socials-section">
          <Link to="https://www.linkedin.com/in/gikai-andrews/">
            <FaLinkedin className="social-icon" />
          </Link>
          <Link to="https://github.com/gikaia">
            <FaGithub className="social-icon" />
          </Link>
          <Link to="https://drive.google.com/file/d/1hHKro193IFviPJsVgIT2dRHFR5ZZE8Qe/view?usp=sharing">
            <button className="resume-button">Resume</button>
          </Link>
        </div>
      </div>
      <div className="project-section" id="projects">
        <h1 className="project-title">Projects</h1>
        <div className="project-grid">
          <div className="project-card">
            <Card>
              <Card.Img variant="top" src={eatly} />
              <Card.Body>
                <Card.Title>Eatly</Card.Title>
                <Card.Text>
                  Eatly is a mood-based food recommendation web app that helps
                  users discover restaurants based on how they’re feeling.
                  Instead of endlessly scrolling, Eatly matches your mood to the
                  perfect place to eat.
                </Card.Text>

                <Link to="https://eatly-ci.netlify.app">
                  <Button variant="primary" className="button-link">
                    Website
                  </Button>
                </Link>
                <Link to="https://github.com/gikai/eatly">
                  <Button variant="primary" className="button-link">
                    Github
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="project-card">
            <Card>
              <Card.Img variant="top" src={portfolio} />
              <Card.Body>
                <Card.Title>Portfolio V2 (This Website)</Card.Title>
                <Card.Text>
                  Redesigned and rebuilt personal portfolio (V2) with modern
                  UI/UX principles, implementing dark/light theme switching and
                  responsive design.
                </Card.Text>
                <Link to="https://gikaiandrews.netlify.app">
                  <Button variant="primary" className="button-link">
                    Website
                  </Button>
                </Link>
                <Link to="https://github.com/GikaiA/gikai">
                  <Button variant="primary" className="button-link">
                    Github
                  </Button>
                </Link>{" "}
              </Card.Body>
            </Card>
          </div>
          <div className="project-card">
            <Card>
              <Card.Img variant="top" src={cinalog} />
              <Card.Body>
                <Card.Title>Cinalog</Card.Title>
                <Card.Text>
                  Cinalog is a movie and TV show recommendation web app that
                  helps users discover new content based on their preferences.
                </Card.Text>
                <Link to="https://github.com/gikai/cinalog">
                  <Button variant="primary" className="button-link">
                    Github
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="project-card">
            <Card>
              <Card.Img variant="top" src={legend} />
              <Card.Body>
                <Card.Title>Legend of Ti</Card.Title>
                <Card.Text>
                  This custom portfolio website was designed and developed to
                  highlight the unique style and brand of the creator,
                  integrating social media and sponsor visibility enhancements
                  to maximize engagement and revenue.
                </Card.Text>
                <Link to="https://legendofti.netlify.app">
                  <Button variant="primary" className="button-link">
                    Website
                  </Button>
                </Link>
                <Link to="https://github.com/gikaia/legendofti">
                  <Button variant="primary" className="button-link">
                    Github
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <h1 className="skills-title" id="skills">
          Skills
        </h1>
        <div className="skills-grid">
          <IoLogoJavascript className="skill-icon" />
          <FaReact className="skill-icon" />
          <FaHtml5 className="skill-icon" />
          <FaCss3Alt className="skill-icon" />
          <IoLogoFirebase className="skill-icon" />
          <FaBootstrap className="skill-icon" />
          <FaGithub className="skill-icon" />
          <FaNodeJs className="skill-icon" />
        </div>
      </div>
      <div className="contact-section">
        <h1 className="contact-title" id="contact">
          Contact
        </h1>
        <p className="contact-description">
          I am currently open to new opportunities. If you would like to get in
          touch, please feel free to reach out to me through email or LinkedIn.
        </p>
        <div className="contact-buttons">
          <button className="contact-button">
            <Link to="mailto:gikaiandrews@gmail.com" className="contact-link">
              Email
          </Link>
          </button>
          <button className="contact-button">
            <Link to="https://www.linkedin.com/in/gikai-andrews/"
              className="contact-link"
            >
              LinkedIn
            </Link>
          </button>
          <button className="contact-button">
            <Link to="https://github.com/gikaia" className="contact-link">
              Github
            </Link>
          </button>
        </div>
        <p className="copyright-sentence">© Gikai Andrews</p>
      </div>
    </div>
  );
}

export default Landing;
