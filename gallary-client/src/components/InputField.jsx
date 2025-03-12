const InputField = ({ type, placeholder, value }) => {
    return (
        <>
            <div className="input-area">
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    required
                />
            </div>
        </>
    );
};

export default InputField;