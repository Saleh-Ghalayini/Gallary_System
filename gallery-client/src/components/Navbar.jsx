import NavButton from "./NavButton";
import  "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Gallery</h1>
            <div className="actions">
                <NavButton text="Profile"/>
                <NavButton text="Settings"/>
                <NavButton text="Help"/>
            </div>
            <NavButton className="logout-btn" text="Logout"/>
        </nav>
    );
};

export default Navbar;