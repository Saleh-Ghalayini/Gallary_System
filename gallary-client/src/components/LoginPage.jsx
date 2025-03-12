import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import axios from "../../node_modules/axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if(!email || !password){
        alert("missing input values");
        return;
    }

    const handleLogin = async () => {
        const credentials = {email, password};

        try {
            const response = await axios.post("http://localhost/GALLARY_SYSTEN/gallary-server/login", credentials);
        }
    };

};