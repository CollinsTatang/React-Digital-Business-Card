import "./css/Navbar.css";
import logo from '../images/logo.png';

const Navbar = () => {
    return(
        <header>
            <nav className="navbar">
                <img src={logo} alt="logo" className="nav-logo" />
                <h1>TilovZion</h1>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;