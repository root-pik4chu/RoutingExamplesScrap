import { useState } from 'react'

import './App.css'
import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';

const AppRoutes = () => {
  const routing = useRoutes(routes);
  return routing;
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <AppRoutes />
      </Router>
    </>
  )
}

export default App
