import Project from '../components/Project'
import Canyon from '../assets/images/canyon.jpg'
import Clouds from '../assets/images/clouds.jpg'
import Laptop from '../assets/images/laptop.jpg'
import Lilypads from '../assets/images/lilypads.jpg'
import Meeting from '../assets/images/meeting.jpg'
import Paper from '../assets/images/paper.jpg'
import ProfilePic from '../assets/images/profile-pic-yellow.jpg'

const projects = [
    {
        id: 1,
        title: "Weather Dashboard",
        href: "https://gfuselier.github.io/weather-dashboard",
        languages: "HTML, CSS, JavaScript",
        image: Clouds
    },
    {
        id: 2,
        title: "Movie Grabber",
        href: "https://gfuselier.github.io/movie-grabber",
        languages: "HTML, CSS, JavaScript, Bulma",
        image: Laptop
      }, {
        id: 3,
        title: "Work-Day Scheduler",
        href: "https://gfuselier.github.io/work-day-scheduler",
        languages: "HTML, CSS, JavaScript",
        image: Paper
      }, {
        id: 4,
        title: "Password Generator",
        href: "https://gfuselier.github.io/password-generator",
        languages: "HTML, CSS, JavaScript",
        image: Canyon
      }, {
        id: 5,
        title: "Horiseon Accessibility Refactor",
        href: "https://gfuselier.github.io/password-generator",
        languages: "HTML, CSS",
        image: Meeting
      }, 

]
function Portfolio() {
    return (
      <>
        <h2>Portfolio</h2>
        <div className="container">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </>
    );
}

export default Portfolio;