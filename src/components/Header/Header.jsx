import NavListItem from "../NavListItem/NavListItem";

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        WatchMe
      </a>
      <ul className="navbar">
        <NavListItem name="Home" />
        <NavListItem name="Favoriten" />
      </ul>
    </header>
  );
};

export default Header;
