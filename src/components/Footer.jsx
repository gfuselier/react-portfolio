import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center bg-body-tertiary">
      {/* Grid container */}
      <div className="container pt-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Linkedin */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaLinkedin />
          </a>
          {/* Github */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaGithub />
          </a>
          {/* Stack Overflow */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaStackOverflow />
          </a>
        </section>
      </div>
    </footer>
  );
}

// source: https://mdbootstrap.com/docs/standard/navigation/footer/
