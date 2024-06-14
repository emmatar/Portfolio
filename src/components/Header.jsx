import NavTabs from "./NavTabs";
import image from "../lib/images/Profile_pic.jpeg";
import { Container } from "react-bootstrap";

function Header() {
  return (

    <header>
      <NavTabs />
      <div className="name-container">
        <h1 id="name">Elijah Matar</h1>
        <img src={image} alt="Profile picture" />
      </div>
    </header>
  );
}

export default Header;
