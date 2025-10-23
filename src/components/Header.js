import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">
                        <span className="logo-icon">🎬</span>
                        <span className="logo-text">TV Shows</span>
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="header-nav desktop-nav">
                    <Link to="/" className="nav-link">Главная</Link>
                    <Link to="/movies" className="nav-link">Фильмы</Link>
                    <Link to="/favorites" className="nav-link">Избранное</Link>
                    <Link to="/register" className="nav-link nav-link-register">Регистрация</Link>
                </nav>
                
                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>
            
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="mobile-nav">
                    <nav className="mobile-nav-content">
                        <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                            Главная
                        </Link>
                        <Link to="/movies" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                            Фильмы
                        </Link>
                        <Link to="/favorites" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                            Избранное
                        </Link>
                        <Link to="/register" className="mobile-nav-link mobile-nav-link-register" onClick={() => setMobileMenuOpen(false)}>
                            Регистрация
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;

