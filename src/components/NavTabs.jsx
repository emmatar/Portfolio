import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <section className="menu">
        <button className="menu-button">
          <div className="menu-button-logo"></div>
          <div className="menu-button-logo"></div>
          <div className="menu-button-logo"></div>
        </button>
        <ul className="menu-content">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <div className="nav-style-line"></div>

          <li className="nav-item">
            <Link
              to="/Projects"
              className={
                currentPage === "/Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <div className="nav-style-line"></div>
          <li className="nav-item">
            <Link
              to="/Resume"
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/Contact"
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </section>
    </>
  );
}

export default NavTabs;
