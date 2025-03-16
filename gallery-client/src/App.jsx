import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import SignupPage from "./pages/Auth/Signup";
import GalleryPage from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
    const { pathname } = useLocation();
    const hideNavbarRoutes = ["/", "/signup"];

    return(
            <div className="flex">
                {!hideNavbarRoutes.includes(pathname) && <Navbar />}
                <Routes>
                    <Route path="/" element={<LoginPage />}/>
                    <Route path="/signup" element={<SignupPage />}/>
                    <Route path="/gallery" element={<GalleryPage />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </div>
    );
};

export default App;