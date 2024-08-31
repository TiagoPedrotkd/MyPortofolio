import "./Projects.css";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Completed</h3>
          <label>3 Finished Projects</label>
        </div>
        <div className="project-box">
          <i className="uil uil-users-alt"></i>
          <h3>Clients</h3>
          <label>Focused on Client Satisfaction</label>
        </div>
        <div className="project-box">
          <i className="uil uil-award"></i>
          <h3>Experience</h3>
          <label>Gaining Expertise in the Field</label>
        </div>
      </div>
    </section>
  );
};

export default Projects;
