import React from "react";
import Ticker from "../components/Ticker";
import Slider from "../components/Slider";
import "./HomePage.css";

function HomePage(){
    return(
        <div className="homepage-container">
            <Ticker/>
            <h1 className="homepage-title">🎬 Главная страница 🎬</h1>
            <div className="slider-section">
                <Slider/>
            </div>
        </div>
    );
}
export default HomePage;