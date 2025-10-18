import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavourite } from "../store/slices/favoriteSlice";
import "./Detail.css";

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    
    const favorites = useSelector((state) => state.favorite.list);

    useEffect(() => {
        // Имитируем загрузку данных
        setLoading(true);
        
        // Импортируем данные из JSON файла
        import('../data/tvShows.json').then((data) => {
            const foundShow = data.default.find(item => item.id === parseInt(id));
            if (foundShow) {
                setShow(foundShow);
                setIsFavorite(favorites.some(fav => fav.id === foundShow.id));
            }
            setLoading(false);
        });
    }, [id, favorites]);

    const handleAddToFavorites = () => {
        if (show) {
            console.log('Current favorites:', favorites);
            console.log('Show to add/remove:', show);
            console.log('Current isFavorite:', isFavorite);
            
            if (isFavorite) {
                console.log('Removing from favorites');
                dispatch(removeFavourite(show.id));
                setIsFavorite(false);
            } else {
                console.log('Adding to favorites');
                dispatch(addFavorite(show));
                setIsFavorite(true);
            }
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return (
            <div className="detail-loading">
                <div className="loading-bat">🦇</div>
                <p>Загрузка...</p>
            </div>
        );
    }

    if (!show) {
        return (
            <div className="detail-error">
                <h2>🦇 Шоу не найдено 🦇</h2>
                <button onClick={handleGoBack} className="back-btn">
                    ← Вернуться назад
                </button>
            </div>
        );
    }

    return (
        <div className="detail-container">
            <div className="detail-background">
                <div className="detail-content">
                    <button onClick={handleGoBack} className="back-button">
                        ← Назад
                    </button>
                    
                    <div className="detail-main">
                        <div className="detail-image-section">
                            <div className="detail-image-wrapper">
                                <img 
                                    src={show.image} 
                                    alt={show.title}
                                    className="detail-image"
                                />
                                <div className="detail-overlay">
                                    <div className="detail-rating">
                                        ⭐ {show.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="detail-info-section">
                            <div className="detail-header">
                                <h1 className="detail-title">{show.title}</h1>
                                <div className="detail-meta">
                                    <span className="detail-year">{show.year}</span>
                                    <span className="detail-genre">{show.genre}</span>
                                </div>
                            </div>
                            
                            <div className="detail-description">
                                <h3>Описание</h3>
                                <p>{show.description}</p>
                            </div>
                            
                            <div className="detail-actions">
                                <button 
                                    onClick={handleAddToFavorites}
                                    className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
                                >
                                    {isFavorite ? '❤️ В избранном' : '🤍 Добавить в избранное'}
                                </button>
                                
                                <button className="watch-btn">
                                    ▶️ Смотреть
                                </button>
                            </div>
                            
                            <div className="detail-stats">
                                <div className="stat-item">
                                    <h4>Рейтинг</h4>
                                    <div className="rating-display">
                                        <span className="rating-number">{show.rating}</span>
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <span 
                                                    key={i} 
                                                    className={`star ${i < Math.floor(show.rating / 2) ? 'filled' : ''}`}
                                                >
                                                    ⭐
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="stat-item">
                                    <h4>Год выпуска</h4>
                                    <span className="stat-value">{show.year}</span>
                                </div>
                                
                                <div className="stat-item">
                                    <h4>Жанр</h4>
                                    <span className="stat-value">{show.genre}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;