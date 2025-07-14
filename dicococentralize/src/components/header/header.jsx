import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            <img src="/logo.png" alt="Logo Dicoco" />    
        </div>
        <div>
            <nav className="nav"> 
                <a href="#">Home</a>
                <a href="#">Instagram</a>
                <a href="#">Site</a>
                <a href="#">Catalogo</a>
            </nav>
        </div>
        <div className="login/logout">
            {/* <a href="#">Login</a> */}
            <a href="#">Logout</a>
        </div>
    </header>
  );
};


