import { Route, Routes } from "react-router";
import SignUp from "../Dashboard/SignUp";
import Login from "../Dashboard/Login";

const NetflixRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default NetflixRoutes;