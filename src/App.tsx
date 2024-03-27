import React from 'react';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
      <>
          <Navigation/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </>
  );
}

export default App;
