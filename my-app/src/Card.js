import React from "react";
import "./App.css";

function Card() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using ReactJS",
      image: "/images/project1.png",
      link: "",
    },
    {
      title: "Student Result Management System ",
      description: "Python +  Tkinter ",
      image: "/images/project2.png",
      link: "https://github.com/kunalpawar8788/Python-Project",
    },
    {
      title: "Hospital Management System  ",
      description: "Web Development ",
      image: "/images/project3.png",
      link: "https://github.com/kunalpawar8788/VSmedi-Lab",
    },
    



  ];

  return (
    <section id="projects" className="full-section">
      <div className="cards-section">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="card-image"
            />
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="card-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
