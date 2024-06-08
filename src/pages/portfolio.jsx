import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import list from '../list';
import './portfolio.css'; // Import the CSS file

export default function Portfolio() {
  return (
    <div className="container">
      <h1 className="text-center my-4">My Portfolio</h1>
      <div className="row">
        {list.map((project) => (
          <PortfolioCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function PortfolioCard({ project }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`col-md-6 mb-4 ${inView ? 'fade-in' : 'fade-out'}`} ref={ref}>
      <div className="card h-100 card-custom">
        <img src={project.img} alt={project.name} className="card-img img-fluid card-img-custom" />
        <div className="card-body d-flex flex-column card-body-custom">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <div className="btn-group mt-auto">
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Repo
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
