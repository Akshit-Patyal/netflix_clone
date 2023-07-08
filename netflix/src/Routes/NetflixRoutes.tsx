import { Route, Routes } from "react-router";
import SignUp from "../Dashboard/SignUp";
import Login from "../Dashboard/Login";
import MainPage from "../mainPage/MainPage";

const NetflixRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    );
}

export default NetflixRoutes;