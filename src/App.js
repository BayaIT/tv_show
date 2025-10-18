import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostList from "./components/PostList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviesPage";
import Detail from "./pages/Detail";
import FavoritesPage from "./pages/FavoritePage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/movies/:id" element={<Detail />} />
        <Route
          path="/"
          element={
            <div>
              <HomePage />
              <PostList />
            </div>
          }
        />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;