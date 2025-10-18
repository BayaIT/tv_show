import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../store/slices/favoriteSlice";

function FavoritesPage() {
    const favorites = useSelector((state) => state.favorite.list);
    const dispatch = useDispatch();

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Избранные фильмы</h2>
            {favorites.length === 0 ? (
                <p style={{ textAlign: "center" }}>Нет избранных фильмов</p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "16px",
                    }}
                >
                    {favorites.map((movie) => (
                        <div
                            key={movie.id}
                            style={{
                                background: "#fff",
                                padding: "12px",
                                borderRadius: "20px",
                            }}
                        >
                            <h3>{movie.title}</h3>
                            <p>{movie.body.slice(0, 100)}...</p>
                            <button onClick={() => dispatch(removeFavourite(movie.id))}>
                                Удалить из избранного
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritesPage;