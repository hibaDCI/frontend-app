import "./App.css";

// eslint-disable-next-line
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import Register from "./component/Register";
import AllUsers from "./component/AllUsers";
import Navbar from "./component/Navbar";
import ContactUs from "./component/ContactUs";
import CreatePost from "./component/CreatePost";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/profile" element={<h1>Hello there</h1>} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
