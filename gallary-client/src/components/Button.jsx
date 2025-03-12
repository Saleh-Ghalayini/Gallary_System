const Button = ({text, onclick}) => {
    return (
        <button className="login-btn" onclick={onclick}>{text}</button>
    );
};

export default Button;