// import React from "react";
import "./Landing.css";
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
          applications. When I am not coding, I do enjoy playing video games,
          photography, reading, and longboarding.
        </p>
      </div>
      <div className="project-section">
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
    </div>
  );
}

export default Landing;
