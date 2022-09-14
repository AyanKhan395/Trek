// import './App.css';
import Login from "./components/login/login"
import Register from "./components/register/register"
import Home from "./pages/Home";
import Treks from "./pages/Treks";
import Posts from "./pages/Posts";
import EquipmentLister from "./pages/EquipmentLister";
import Camps from "./pages/Camps";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import Mountains from "./pages/Mountains";
import Valleys from "./pages/Valleys";
import Waterfalls from "./pages/Waterfalls";
import Lakes from "./pages/Lakes";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import './style.css';

function App() {
const [ user, setLoginUser] = useState({})
    return (
      <>
        <div className="container">
          <Routes>
            <Route exact path="/" element={user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>} />
            <Route path="/treks" element={<Treks />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/equipment-lister" element={<EquipmentLister />} />
            <Route path="/camps" element={<Camps />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/mountains" element={<Mountains />} />
            <Route path="/valleys" element={<Valleys />} />
            <Route path="/waterfalls" element={<Waterfalls />} />
            <Route path="/Lakes" element={<Lakes />} />
            <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </>
    )
}

export default App;