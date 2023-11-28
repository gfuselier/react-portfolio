import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="text-center bg-body-tertiary">
      {/* Grid container */}
      <div class="container pt-4">
        {/* Section: Social media */}
        <section class="mb-4">
          {/* Linkedin */}
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaLinkedin />
          </a>
          {/* Github */}
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaGithub />
          </a>
          {/* Stack Overflow */}
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
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
