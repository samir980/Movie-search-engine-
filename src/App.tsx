import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie, TMDBResponse } from "../types/types";
import Header from "../Componaents/Header"
import MoviesList from "../Componaents/MovieList"


function App() {
  return <>
      <Header/> 
      <MoviesList/>
  </> 
}

export default App;
