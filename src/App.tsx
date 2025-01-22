import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../types/movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Componaents/HeaderComponent/Header";
import MoviesList from "../Componaents/MovieListComponent/MovieList";
import MovieDetails from "../Componaents/MovieDetails";
import {} from "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
