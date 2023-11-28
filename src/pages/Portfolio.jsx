import Project from '../components/Project'


const projects = [
    {
        id: 1,
        title: "Weather Dashboard",
        href: "https://gfuselier.github.io/weather-dashboard",
        languages: "HTML, CSS, JavaScript",
        image: ""
    },
    {
        id: 2,
        title: "Movie Grabber",
        href: "https://gfuselier.github.io/movie-grabber",
        languages: "HTML, CSS, JavaScript, Bulma",
        image: ""
      }, {
        id: 3,
        title: "Work-Day Scheduler",
        href: "https://gfuselier.github.io/work-day-scheduler",
        languages: "HTML, CSS, JavaScript",
        image: ""
      }, {
        id: 4,
        title: "Password Generator",
        href: "https://gfuselier.github.io/password-generator",
        languages: "HTML, CSS, JavaScript",
        image: ""
      }, {
        id: 5,
        title: "Horiseon Accessibility Refactor",
        href: "https://gfuselier.github.io/password-generator",
        languages: "HTML, CSS",
        image: ""
      }, 

]
function Portfolio() {
    return (
        projects.map(project => <Project project={project}/>)
    )
}

export default Portfolio;