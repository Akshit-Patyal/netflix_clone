import { useState } from "react";
import { Form } from "react-bootstrap";
import "./Login.scss";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <center>
                <div className="container">
                    <div className="form-comp">
                        <h1>Sign In</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="name@example.com" value={userName} onChange={(ev) => { setUserName(ev.target.value) }} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="password" placeholder="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Login;