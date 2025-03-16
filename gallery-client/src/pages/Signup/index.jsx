import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import axios from "axios";
import "./style.css";

const SignupPage = () => {
    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {

        if(full_name && email && password) {

            const signup_info = {
                full_name,
                email,
                password
            };

            const response = await axios.post("http://localhost/GALLARY_SYSTEN/gallary-server/signup", signup_info);

            if (response.status === "Succeed") {
                alert("Signed Up Successfully!");
                window.location.href = "./GallaryPage.jsx";
            } else {
                alert("Invalid input, Try again");
            }
        } else {
            alert("missing input values");
            return;
        }
    };

    return (
        <div className="container">
            <h1>Signup Form</h1>
            <div className="input-area">
                <InputField 
                    type="text"
                    placeholder="full name"
                    value={full_name}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div>
                <InputField 
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <InputField 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="register">
                <Button className="register-btn" text="Sign Up" onClick={handleSignup}/>
            </div>
        </div>
    );
};
export default SignupPage;