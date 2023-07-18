import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './Nav.module.css';

const pages = ['ABOUT', 'GALLERY', 'CONTACT'];

const Nav: Component<{ currentPage: string }> = ({ currentPage }) => {
  const navs = pages.filter((item) => item !== currentPage);
  return (
    <div class={styles.nav}>
      <A href="/">HOME</A>
      {navs.map((nav) => (
        <A href={'/' + nav.toLowerCase()}> {nav}</A>
      ))}
    </div>
  );
};

export default Nav;
