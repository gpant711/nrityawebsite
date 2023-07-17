import type { Component } from 'solid-js';
import { Router, Route, Routes } from '@solidjs/router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
