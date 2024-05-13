import NavTabs from "./NavTabs";

function Header() {
  return (
    <header>
      <NavTabs />
      <div className="name-container">
        <h1 id="name">Elijah Matar</h1>
        <img src="../lib/images/Profile_pic.jpeg" alt="Profile picture" />
      </div>
    </header>
  );
}

export default Header;
