import { FaGithub } from "react-icons/fa";

function Project({ project }) {
  return (
    <div className="card" key={project.id}>
      <img className="card-img-top" src={project.image} alt={project.title} height="200px" width="200px"/>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.languages}</p>
        <a href={project.href} type="button" className="btn btn-light">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Project;
