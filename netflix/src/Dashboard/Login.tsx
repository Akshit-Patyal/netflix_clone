import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <img src="Netflix.png" alt="netflix" />
            <center>
                <div className="form-container">
                    <div className="form-comp">
                        <h1>Sign In</h1>
                        <Form className="form-data">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Email" value={userName} onChange={(ev) => { setUserName(ev.target.value) }} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} />
                            </Form.Group>
                            <Button className="mt-5">
                                Login
                            </Button>
                        </Form>
                        <div className="login-txt mt-3">
                            <p>First time using Netflix? <Link to="/SignUp">Create an account</Link></p>
                            <p>OR</p>
                            <p className="guest-txt">Login as a guest</p>
                        </div>
                    </div>
                </div>
            </center >
        </div >
    );
}

export default Login;