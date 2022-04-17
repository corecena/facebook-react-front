import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register"
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Profile/>

        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />} />


        //         <Route path="login" element={<Login />} />


        //         {/* <Route path="/register">
        //         <Register />
        //     </Route>
        //     <Route path="/profile/:username ">
        //         <Profile />
        //     </Route> */}
        //     </Routes>
        //     <Profile />
        // </BrowserRouter>

    );

}

export default App;
