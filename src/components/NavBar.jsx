import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">✦</span>
        <span className="logo-text">MiTienda</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
