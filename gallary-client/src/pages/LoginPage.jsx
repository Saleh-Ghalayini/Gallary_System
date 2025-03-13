import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import axios from "axios";
import "../styles/index.css";
import "../styles/login.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        if(!email || !password){
            alert("missing input values");
            return;
        }

        const credentials = {email, password};

        try {
            const response = await axios.post("http://localhost/GALLARY_SYSTEN/gallary-server/login", credentials);

            if(response.data.status === "Succeed") {
                alert("logged in successfully");
                window.location.href = "./gallary.jsx";
            } else {
                alert("Invalid credentials, try again");
            }
        } catch(error) {
            alert("Error logging in" + error);
        }
    };

    return (
        <div className="container">
            <h1>Gallary System</h1>
            <div className="input-area">
                <InputField
                    type="email" 
                    placeholder="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-area">
                <InputField 
                    type="password" 
                    placeholder="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div className="btn-wrapper">
                <Button className="login-btn" text="Log in" onClick={handleLogin} />
            </div>
            <div className="register">
                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    )

};

export default LoginPage;