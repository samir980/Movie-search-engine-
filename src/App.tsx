import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../types/movie";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "../Componaents/Header"
import MoviesList from "../Componaents/MovieList"
import MovieDetails from "../Componaents/MovieDetails"


function App() {
  return <>
   <Router>
      <Header/> 
      <Routes>
        <Route path="/" element={<MoviesList/>}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
   </Router>
      
  </> 
}

export default App;
