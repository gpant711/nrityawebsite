import type { Component } from 'solid-js';
import { Router, Route, Routes } from '@solidjs/router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <Router>
      <header class={styles.header}>
        <p>N R I T Y A . K A L P N A</p>
      </header>
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
