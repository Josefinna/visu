import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
 
// Importa el componente Popular
import Popular from '../Popular/popular';
// Importa la página principal (HomePage)
import HomePage from '../Home/home';
 
function App() {
  return (
    <Router>
      <div>
        <title>JLDesign</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <link href="./fontawesome/css/all.min.css" rel="stylesheet" />
        <link href="./css/owl.carousel.min.css" rel="stylesheet" />
        <link href="./css/style.css" rel="stylesheet" />
        <script src="./js/jquery.min.js"></script>
        <script src="./js/owl.carousel.min.js"></script>
        
        {/* Routes para manejar las rutas */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<Popular />} />
          {/* Otras rutas */}
        </Routes>
 
      </div>
      
    </Router>

  );
}
 
export default App;