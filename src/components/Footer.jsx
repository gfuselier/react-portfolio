import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-lg m-1"
            href="mailto:gisellefuselier@gmail.com"
            type="button"
          >
            <MdEmail />
          </a>
          <a
            className="btn btn-link btn-lg m-1"
            href="https://www.linkedin.com/in/giselle-fuselier-5b9273136/"
            type="button"
          >
            <FaLinkedin />
          </a>
          <a
            className="btn btn-link btn-lg m-1"
            href="https://github.com/gfuselier"
            type="button"
          >
            <FaGithub />
          </a>
        </section>
      </div>
    </footer>
  );
}
