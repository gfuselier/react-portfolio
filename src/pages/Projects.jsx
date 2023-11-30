import Project from "../components/Project";
import Canyon from "../assets/images/canyon.jpg";
import Clouds from "../assets/images/clouds.jpg";
import Laptop from "../assets/images/laptop.jpg";
import Meeting from "../assets/images/meeting.jpg";
import Paper from "../assets/images/paper.jpg";
import StyleSaga from "../assets/images/style-saga.png";

const projects = [
  {
    id: 1,
    title: "Style Saga",
    languages: "Javascript, Handlebars, CSS - Bulma",
    github: "https://github.com/gfuselier/style-saga",
    deployed: "https://rocky-harbor-10081-a01abff67a03.herokuapp.com/",
    image: StyleSaga,
  },
  {
    id: 2,
    title: "Text Editor",
    languages: "Javascript, Weboack, IndexedB",
    github: "https://github.com/gfuselier/text-editor",
    deployed: "https://infinite-mesa-80804-f85e71a95510.herokuapp.com/",
    image: Meeting,
  },
  {
    id: 3,
    title: "Note Taker",
    languages: "Javascript, HTML, Express",
    github: "https://github.com/gfuselier/note-taker",
    deployed: "https://note-taker-10-23-30783c9d1a20.herokuapp.com/",
    image: Paper,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "HTML, CSS, JavaScript",
    github: "https://github.com/gfuselier/weather-dashboard",
    deployed: "https://gfuselier.github.io/weather-dashboard",
    image: Clouds,
  },
  {
    id: 5,
    title: "Movie Grabber",
    languages: "HTML, CSS, JavaScript, Bulma",
    github: "https://github.com/gfuselier/movie-grabber",
    deployed: "https://gfuselier.github.io/movie-grabber",
    image: Laptop,
  },
  {
    id: 6,
    title: "Work-Day Scheduler",
    languages: "HTML, CSS, JavaScript",
    github: "https://github.com/gfuselier/work-day-scheduler",
    deployed: "https://gfuselier.github.io/work-day-scheduler",
    image: Canyon,
  },
];

function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <div className="container">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
