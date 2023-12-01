
const frontEnd = [
    "HTML/CSS",
    "JavaScript/jQuery",
    "Responsive Design",
    "Bootstrap",
    "Bulma",
    "Handlebars",
    "Progressive Web Applications",
    "Local Storage, Session Storage, IndexedDB",
    "React.js"
]

const backEnd = [
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "User Authentication - JWT, Express Sessions",
    "GraphQL"
]

const tools = [
    "Git/Github",
    "GitHub Pages",
    "Heroku",
    "Netlify",
    "Apollo",
    "Shell Scripting",
    "Unit Testing",
    "Linting"
]

function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <p>Download my <a href="https://docs.google.com/document/d/1OJFOlAO_isKn9sAYssI0X9HDYQ8fzNVC2yEiI87bxPM/edit?usp=sharing" download>resume</a> for more information.</p>
            <h4>Front-End</h4>
            <ul className="list">
                {frontEnd.map((skill) => (
                    <li className="list-item" key="">{skill}</li>
                ))}
            </ul>
            <h4>Back-End</h4>
            <ul className="list">
                {backEnd.map((skill) => (
                    <li className="list-item" key="">{skill}</li>
                ))}
            </ul>
            <h4>Tools</h4>
            <ul className="list">
                {tools.map((skill) => (
                    <li className="list-item" key="">{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default Skills;