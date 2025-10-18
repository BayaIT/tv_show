import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../store/slices/favoriteSlice";
import { Link } from "react-router-dom";
import "./FavoritePage.css";

function FavoritesPage() {
    const favorites = useSelector((state) => state.favorite.list);
    const dispatch = useDispatch();

    console.log('Favorites in FavoritesPage:', favorites);

    return (
        <div className="favorites-container">
            <div className="favorites-background">
                <div className="favorites-content">
                    <h2 className="favorites-title">🦇 Избранные TV Шоу 🦇</h2>
                    {favorites.length === 0 ? (
                        <div className="favorites-empty">
                            <div className="empty-bat">🦇</div>
                            <p>Нет избранных шоу</p>
                            <Link to="/" className="browse-btn">
                                Перейти к просмотру
                            </Link>
                        </div>
                    ) : (
                        <div className="favorites-grid">
                            {favorites.map((show) => (
                                <div key={show.id} className="favorite-card">
                                    <div className="favorite-image">
                                        <img src={show.image} alt={show.title} />
                                        <div className="favorite-overlay">
                                            <Link to={`/movies/${show.id}`} className="view-details-link">
                                                Подробнее
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="favorite-info">
                                        <h3 className="favorite-title">{show.title}</h3>
                                        <p className="favorite-year">{show.year} | {show.genre}</p>
                                        <p className="favorite-description">
                                            {show.description.slice(0, 100)}...
                                        </p>
                                        <div className="favorite-footer">
                                            <span className="favorite-rating">⭐ {show.rating}</span>
                                            <button 
                                                onClick={() => dispatch(removeFavourite(show.id))}
                                                className="remove-btn"
                                            >
                                                ❌ Удалить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FavoritesPage;