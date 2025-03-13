const InputField = ({ type, placeholder, value, onChange }) => {
    return (
        <>
            <div className="input-area">
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                />
            </div>
        </>
    );
};

export default InputField;