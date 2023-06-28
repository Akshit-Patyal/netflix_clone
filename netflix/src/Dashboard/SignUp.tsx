import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SignUp.scss";

const SignUp = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="signup-container">
            <div className="header-container">
                <img src="Netflix.png" alt="netflix" />
                <div className="header-btn">
                    <Button>English</Button>
                    <Button>SignIn</Button>
                </div>
            </div>
            < Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email address" value={email} onChange={(ev) => { setEmail(ev.target.value) }} />
                </Form.Group>
            </Form >
        </div>
    );
}

export default SignUp;