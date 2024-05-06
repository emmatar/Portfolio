function Footer() {
  return (
    <footer>
      <section className="section-content" id="contact">
        <section id="contact-flex">
          <a className="contact-info mail" href="mailto:m.matar515@gmail.com">
            m.matar515@gmail.com
          </a>
          <a className="contact-info github" href="https://github.com/emmatar">
            <img id="github-logo" src="./assets/images/github-mark.png" />
            GitHub
          </a>
          <a
            className="contact-info linkedin"
            href="https://www.linkedin.com/in/elijah-m-818597b1/"
          >
            <img
              id="linkedin-logo"
              src="./assets/images/linkedin.svg"
              alt="Linkedin logo"
            />
            Linkedin
          </a>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
