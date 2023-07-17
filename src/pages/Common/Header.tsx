import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './Header.module.css';

const Header: Component = () => {
  return (
    <div class={styles.header}>
      <A href="/">Home</A>
      <A href="/gallery">Gallery</A>
      <A href="/contact">Contact</A>
    </div>
  );
};

export default Header;
