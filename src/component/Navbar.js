import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-info ">
      <div className="container justify-content-around ">
        <Link className="navbar-brand text-light" to="/login">
          Navbar
        </Link>
        <Link to="/register" className="nav-link text-light ">
          register
        </Link>
        <span className="nav-item">
          <Link to="/login" className="nav-link text-light ">
            Login
          </Link>
        </span>
        <span className="nav-item">
          <Link className="nav-link text-light " to="/post">
            Add Post
          </Link>
        </span>
        <span className="nav-item">
          <Link className="nav-link text-light " to="/contactus">
            Contact us
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
