function Project({ project }) {
  return (
    <div class="card" key={project.id}>
      <img className="card-img-top" src={project.image} alt={project.title} />
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.languages}</p>
        <a href={project.href} className="btn btn-primary">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
