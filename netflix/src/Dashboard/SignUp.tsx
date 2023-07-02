import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCaretDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./SignUp.scss";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const navigate = useNavigate();

    const userNameHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const val = ev.target.value;
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!isNaN(+val) && val.length === 10) {
            setIsEmailValid(true);
        }
        else if (val.length === 0) {
            setIsEmailValid(false);
        } else if (regex.test(val)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
        setEmail(val);
    };

    const submitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (isEmailValid) {
            console.log("valid");
        }
    };

    return (
        <div className="signup-container">
            <div className="header-container">
                <img src="Netflix.png" alt="netflix" />
                <div className="header-btn">
                    <Button className="dropdown-btn"><FontAwesomeIcon icon={faGlobe} className="globe-icon" />English<FontAwesomeIcon icon={faCaretDown} className="down-icon" /></Button>
                    <Button className="signIn-btn" onClick={() => navigate("/login")}>Sign In</Button>
                </div>
            </div>
            <center>
                <div className="body-container">
                    <h1 className="mb-4">Unlimited movies, TV shows and more</h1>
                    <h3 className="mb-4">Watch anywhere. Cancel anytime.</h3>
                    <Form>
                        <Form.Label className="mb-3">Ready to watch? Enter your email to create or restart your membership.</Form.Label>
                        <div className="get-start">
                            <Form.Group className="form-floating mb-3">
                                <Form.Control type="email" placeholder="Email address" id="floatingEmail" value={email} onChange={userNameHandler} />
                                <Form.Label htmlFor="floatingEmail">Email address</Form.Label>
                                {!isEmailValid && <span className="valid">Please enter a valid email address or phone number.</span>}
                            </Form.Group>
                            <Button onClick={submitHandler}>Get Started<FontAwesomeIcon icon={faChevronRight} className="right-icon" /></Button>
                        </div>
                    </Form >
                </div>
            </center>
        </div>
    );
}

export default SignUp;