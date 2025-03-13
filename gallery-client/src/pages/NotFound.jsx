import Button from "../components/Button";
import "../styles/notfound.css";

const NotFound = () => {

    //this will take the user to the previous page he was surfing in
    const previousPage = () => window.history.back();

    return (
        <div className="notfound-container">
            <i className='bx bx-error-circle'></i>
            <p>Oops! The page you are looking for was not found.</p>
            <Button 
                className="back-btn"
                text="Go Back"
                onClick={previousPage}
            />
        </div>
    );
};
export default NotFound;