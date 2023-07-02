import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameValid, setUserNameValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    /**
     * @method userNameValidation
     * @description userName validations requirements: name must not be empty. name should have email like format...eg- akshit@123.com or akshit.patyal@123.com.
     * @param {React.ChangeEvent<HTMLInputElement>} ev 
     */
    const userNameValidation = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const val = ev.target.value;
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!isNaN(+val) && val.length === 10) {
            setUserNameValid(true);
        }
        else if (val.length === 0) {
            setUserNameValid(false);
        } else if (regex.test(val)) {
            setUserNameValid(true);
        } else {
            setUserNameValid(false);
        }
        setUserName(val);
    };

    /**
     * @method passwordValidation
     * @description password validation requirements: Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character.
     * @param {React.ChangeEvent<HTMLInputElement>} ev 
     */
    const passwordValidation = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const val = ev.target.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (val.length === 0) {
            setPasswordValid(false);
        } else if (regex.test(val)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
        setPassword(val);
    };


    const loginHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (userNameValid && passwordValid) {
            console.log("Login");
        }
    };

    return (
        <div className="login-container">
            <img src="Netflix.png" alt="netflix" />
            <div className="form-container">
                <div className="form-comp">
                    <h1>Sign In</h1>
                    <Form className="form-data">
                        <Form.Group className="form-floating mb-3">
                            <Form.Control type="email" placeholder="Email or phone number" id="floatingEmail" value={userName} onChange={userNameValidation} />
                            <Form.Label htmlFor="floatingEmail">Email or phone number</Form.Label>
                            {!userNameValid && <span className="user-valid">Please enter a valid email address or phone number.</span>}
                        </Form.Group>
                        <Form.Group className="form-floating mb-3">
                            <Form.Control type="password" placeholder="Password" id="floatingPassword" value={password} onChange={passwordValidation} />
                            <Form.Label htmlFor="floatingPassword">Password</Form.Label>
                            {!passwordValid && <span className="pass-valid text-start">Your password must be strong.</span>}
                        </Form.Group>
                        <Button onClick={loginHandler} className="mt-4">
                            Login
                        </Button>
                    </Form>
                    <div className="login-txt mt-3 text-center">
                        <p>First time using Netflix? <Link to="/SignUp">Create an account</Link></p>
                        <p>OR</p>
                        <p className="guest-txt">Login as a guest</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;