import ProfilePic from "../assets/images/profile-pic-yellow.jpeg";

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <div id="about-me-text">
        <p>
          Hi! My name is Giselle Fuselier and I'm an aspiring web developer. I'm
          currently enrolled in a full-stack bootcamp at SMU. By the end of the
          bootcamp, this portfolio will be full of projects showcasing skills
          that I will learn over the next few months. I'm originally from Tulsa,
          OK and currently live in Dallas, TX. Previously, I worked as an
          educator, teaching middle-school English Language Arts. Web
          development is an interest of mine that I am finally pursuing. I'm
          looking forward to growing and learning as much as possible.
        </p>
        <img
          src={ProfilePic}
          alt="picture of Giselle"
          height="200px"
          width="230px"
        ></img>
      </div>
    </div>
  );
}

export default AboutMe;
