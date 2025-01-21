import React from "react";
import Header from "./Components/Header";
import Post from "./Components/Post";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter and Routes

import "./App.css";
import Login from "./Components/login";
import Feed from "./Components/Home";

function App() {

  const[isAuth,setIsAuth] = React.useState(localStorage
  .getItem("isAuth")?true:false
  )
  return (
    <Router> 
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      
      {/* Use Routes to wrap the Route components */}
      {/* <Feed isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Post isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Login isAuth={isAuth} setIsAuth={setIsAuth}/> */}
      <Routes>
        <Route  path="/Header" element={<post isAuth={isAuth}/>}/>
        <Route path="/Feed" element={<Post isAuth={isAuth} />} />
        <Route path="/Home" element={<Feed isAuth={isAuth} />} />
        <Route path="/Post" element={<Post isAuth={isAuth} />} /> {/* Use the `element` prop instead of `component` */}
        <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
