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
import eatly from "../assets/eatly.jpg";

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
        </div>
      </div>
      <div className="project-section">
        <h1 className="project-title">Projects</h1>
        <div className="project-grid">
          <div className="project-card">
            <Card>
              <Card.Img variant="top" src={eatly} width={100} />
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
              <Card.Img variant="top" src={eatly} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="project-card">
            <Card>
              <Card.Img variant="top" src={eatly} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <h1 className="skills-title">Skills</h1>
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
    </div>
  );
}

export default Landing;
