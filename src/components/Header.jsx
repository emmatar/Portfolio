import NavTabs from "./NavTabs";
function Header() {
  return (
    <header>
      <NavTabs />
      <section className="name-container">
        <h1 id="name">Elijah Matar</h1>
      </section>
    </header>
  );
}

export default Header;
