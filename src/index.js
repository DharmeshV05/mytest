import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import './CSS/main-module.css';
import Login from "./pages/Login";
import React from "react";
import AboutUs from "./pages/ AboutUs";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutus" element={<AboutUs/>} />
          <Route path="service" element={<Service/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="signup" element={<Signup/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);