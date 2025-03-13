import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/gallery" element={<GalleryPage />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;