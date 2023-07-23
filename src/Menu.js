import { Outlet, Link } from "react-router-dom";
// run bootstrap
// npm install bootstrap@5.3.0
// and file with sass
// (var) $temp: $fff; + nestting. not relavent anymoe?
// Then import Bootstrap
// @import "../node_modules/bootstrap/scss/bootstrap";


const Menu = () => {
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )

}

export default Menu;