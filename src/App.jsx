import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Post from "./Components/Post";
import Login from "./Components/login";
import Feed from "./Components/Home";
import Navbar from "./Components/navbar";
import ProfilePage from "./Components/Profile"; // Import ProfilePage

function App() {
  const [isAuth, setIsAuth] = React.useState(
    localStorage.getItem("isAuth") ? true : false
  );

  return (
    <Router>
      {/* Pass isAuth and setIsAuth to Navbar */}
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

      <Routes>
        <Route path="/" element={<Feed isAuth={isAuth} />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Feed" element={<Feed isAuth={isAuth} />} />
        <Route path="/Post" element={<Post isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/profile" element={<ProfilePage isAuth={isAuth} />} /> {/* Add Profile Route */}
      </Routes>
    </Router>
  );
}

export default App;
