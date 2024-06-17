function Footer() {
  return (
    <footer
      id="footer"
      className="d-flex flex-wrap justify-content-between align-items-center border-top"
    >
      <div className="copyright col-md-4 d-flex align-items-center">
        <span className="mx-2 text-muted">
          © 2024 Elijah M. All Rights Reserved
        </span>
      </div>
      <ul className="app-links nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a
            className="text-muted contact-info github"
            href="https://github.com/emmatar"
            target="_blank"
          ></a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted contact-info mail"
            href="mailto:m.matar515@gmail.com"
          ></a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted contact-info linkedin"
            href="https://www.linkedin.com/in/elijahmatar/"
            target="_blank"
          ></a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
