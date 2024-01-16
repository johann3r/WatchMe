import NavListItem from "../NavListItem/NavListItem";
import navListData from "../../data/navListData";

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        WatchMe
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
