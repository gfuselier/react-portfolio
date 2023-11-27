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
            <i class="fa-brands fa-linkedin"></i>
          </a>
          {/* Github */}
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          {/* Stack Overflow */}
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fa-brands fa-stack-overflow"></i>
          </a>
        </section>
      </div>
    </footer>
  );
}

// source: https://mdbootstrap.com/docs/standard/navigation/footer/
