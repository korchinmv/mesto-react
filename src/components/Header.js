import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <img className="header__logo" src={logo} alt="Логотип Mesto" />
        </div>
      </div>
    </header>
  );
}

export default Header;
