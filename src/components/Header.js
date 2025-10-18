import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">
                        <span className="logo-icon">🎬</span>
                        <span className="logo-text">TV Shows</span>
                    </Link>
                </div>
                <nav className="header-nav">
                    <Link to="/" className="nav-link">Главная</Link>
                    <Link to="/movies" className="nav-link">Фильмы</Link>
                    <Link to="/favorites" className="nav-link">Избранное</Link>
                    <Link to="/register" className="nav-link nav-link-register">Регистрация</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;

