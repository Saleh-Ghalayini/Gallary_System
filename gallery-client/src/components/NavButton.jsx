const NavButton = ({ text, onClick, className = "" }) => {

    return(
        <button className={`nav-btn ${className}`} onClick={onClick}>{text}</button>
    );
};

export default NavButton;