// Importation des modules et composants nécessaires.
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import data from './data';

function App() {
  // Définition de constantes pour l'exemple.
  let arr = [5, 10, 15, 20, 30];

  // Utilisation de l'hook useState pour gérer l'état local.
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(false);
  const [detailsIndex, setDetailsIndex] = useState(0);

  // Fonctions pour incrémenter et décrémenter le compteur.
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  // Affichage de données pour le débogage.
  console.log(data);

  return (
    <div className="App">
      <Router>
        <Header />
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>

        <Routes>
          <Route path="/" element={<Home setDetailsIndex={setDetailsIndex} />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details detailsIndex={detailsIndex} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
