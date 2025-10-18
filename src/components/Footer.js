import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">О нас</h3>
                    <p className="footer-text">
                        Лучшая платформа для просмотра TV шоу и сериалов.
                        Смотрите любимые фильмы в HD качестве!
                    </p>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-title">Навигация</h3>
                    <ul className="footer-links">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/movies">Фильмы</a></li>
                        <li><a href="/favorites">Избранное</a></li>
                        <li><a href="/register">Регистрация</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-title">Контакты</h3>
                    <ul className="footer-contacts">
                        <li>📧 info@tvshows.com</li>
                        <li>📱 996 554 214 214</li>
                        <li>📍 Бишкек, Кыргызстан</li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-title">Социальные сети</h3>
                    <div className="footer-social">
                        <a href="#" className="social-link">📘</a>
                        <a href="#" className="social-link">🐦</a>
                        <a href="#" className="social-link">📷</a>
                        <a href="#" className="social-link">▶️</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 TV Shows IT-122. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;

