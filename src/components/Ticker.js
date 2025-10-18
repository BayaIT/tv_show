import React from "react";
import "./Ticker.css";

function Ticker() {
    return (
        <div className="ticker-container">
            <div className="ticker-content">
                <span className="ticker-text">
                    🎬 Добро пожаловать на сайт IT-122 | Лучшие TV Шоу 2024 года | 
                    Смотрите новинки и классику | Рейтинги и обзоры | 
                    Подпишитесь на наши обновления 🎬
                </span>
                <span className="ticker-text" aria-hidden="true">
                    🎬 Добро пожаловать на сайт IT-122 | Лучшие TV Шоу 2024 года | 
                    Смотрите новинки и классику | Рейтинги и обзоры | 
                    Подпишитесь на наши обновления 🎬
                </span>
            </div>
        </div>
    );
}

export default Ticker;
