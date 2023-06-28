const Form = () => {
    return (
    <div className="form-container">
        <h3>Sign in to your account</h3>
        <form >
            <div className="input-container">
                <label>Username: </label>
                <input type = "text" placeholder="Enter your username"></input>
            </div>
            <div className="input-container">
                <label>Password: </label>
                <input type = "password" placeholder="Enter your password"></input>
            </div>
            <div className= "button">
            <button type ="submit">Login</button>
            </div>
        </form>
         
    </div>
    );
    
};

export default Form;