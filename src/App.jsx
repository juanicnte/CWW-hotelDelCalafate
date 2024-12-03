import './App.css'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// Componente para cambiar el título de la página
const RouteWithTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
};
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RouteWithTitle title="Home - Arandú"><Home /></RouteWithTitle>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
