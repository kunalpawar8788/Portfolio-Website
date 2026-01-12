import React from "react";

function AboutMe() {
  return (
    <div className="about-section">
      <div className="about-box">
        <h1>About Me</h1>
        <div className="about-content">
          <img src="/images/kunal.jpg" alt="Kunal" className="about-photo" />
          <div className="about-text">
            <p>
                I am a Software Developer and Data Analyst who enjoys working on real-world problems. I like building structured solutions and using data to understand patterns, improve decisions, and create meaningful results.
            </p>
            <h3>Skills</h3>
            <ul>
              ReactJS | JavaScript  |   PowerBI  |  HTML    |   NodeJS   |   CSS  | OOPS    |   Bootstrap   |   SQL |   Git |   Problem Solving |   Python  |   MongoDB |   Java (Basic)    |   DSA |   REST API    |   Computer Networking |   SQLLite3    |   Responsive Design   |   UI/UX   |   Data Analyst    |   MS Office
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
