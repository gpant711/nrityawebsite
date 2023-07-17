import type { Component } from 'solid-js';
import { Router, Route, Routes } from '@solidjs/router';

import Home from './pages';
import About from './pages/About';

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  );
};

export default App;
