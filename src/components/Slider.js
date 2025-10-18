import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
    'https://s4.afisha.ru/mediastorage/62/d1/da2b0810e19c40e0ab76fa58d162.jpg',
    'https://thumbs.dfs.ivi.ru/storage0/contents/d/3/cb359e5712417994c4a2ac58bacf47.jpg',
    'https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE5/6803760d64f4429560f95ce6/IMAGE_2_3_XL.jpg'
];

function Slider() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex(prev => (prev + 1) % images.length);
                setFade(true);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const next = () => {
        setFade(false);
        setTimeout(() => {
            setIndex(prev => (prev + 1) % images.length);
            setFade(true);
        }, 500);
    };

    const prev = () => {
        setFade(false);
        setTimeout(() => {
            setIndex(prev => (prev - 1 + images.length) % images.length);
            setFade(true);
        }, 500);
    };

    const goToSlide = (slideIndex) => {
        setFade(false);
        setTimeout(() => {
            setIndex(slideIndex);
            setFade(true);
        }, 500);
    };

    return (
        <div className="slider-container">
            <div className="slider-image-wrapper">
                <img
                    src={images[index]}
                    alt={`slide ${index + 1}`}
                    className={`slider-image ${fade ? 'fade-active' : 'fade-enter'}`}
                />
            </div>
            <div className="slider-controls">
                <button className="slider-btn" onClick={prev}>⬅ Предыдущий</button>
                <button className="slider-btn" onClick={next}>Следующий ➡</button>
            </div>
            <div className="slider-indicators">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slider-indicator ${idx === index ? 'active' : ''}`}
                        onClick={() => goToSlide(idx)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;