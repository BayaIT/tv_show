import React from "react";
import "./PostList.css";
import tvShowsData from "../data/tvShows.json";

function PostList() {
    return (
        <div className="post-list-container">
            <h2 className="post-list-title">Популярные TV Шоу</h2>
            <div className="post-list-grid">
                {tvShowsData.map((show, index) => (
                    <div 
                        key={show.id} 
                        className="post-card"
                        style={{animationDelay: `${index * 0.1}s`}}
                    >
                        <div className="post-card-image">
                            <img src={show.image} alt={show.title} />
                            <div className="post-card-overlay">
                                <button className="view-details-btn">Подробнее</button>
                            </div>
                        </div>
                        <div className="post-card-content">
                            <h3 className="post-card-title">{show.title}</h3>
                            <p className="post-card-year">{show.year} | {show.genre}</p>
                            <p className="post-card-description">{show.description}</p>
                            <div className="post-card-footer">
                                <span className="post-card-rating">⭐ {show.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostList;

