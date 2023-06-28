import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import "./SignUp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCaretDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <div className="header-container">
                <img src="Netflix.png" alt="netflix" />
                <div className="header-btn">
                    <Button className="dropdown-btn"><FontAwesomeIcon icon={faGlobe} className="globe-icon" />English<FontAwesomeIcon icon={faCaretDown} className="down-icon" /></Button>
                    <Button className="signIn-btn" onClick={() => navigate("/login")}>SignIn</Button>
                </div>
            </div>
            <center>
                <div className="body-container">
                    <h1 className="mb-4">Unlimited movies, TV shows and more</h1>
                    <h3 className="mb-4">Watch anywhere. Cancel anytime.</h3>
                    <Form>
                        <Form.Label className="mb-3">Ready to watch? Enter your email to create or restart your membership.</Form.Label>
                        <div className="get-start">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Email address" value={email} onChange={(ev) => { setEmail(ev.target.value) }} />
                            </Form.Group>
                            <Button>Get Started<FontAwesomeIcon icon={faChevronRight} className="right-icon" /></Button>
                        </div>
                    </Form >
                </div>
            </center>
        </div>
    );
}

export default SignUp;