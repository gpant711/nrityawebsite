import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

import styles from './Home.module.css';

const Home: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class={styles.images}>
          <div class={styles.image}>
            <span class={styles.imagetext}>HOME</span>
            <img
              src={
                'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/lowres/home.jpeg?raw=true'
              }
              alt="logo"
            />
          </div>
          <div class={styles.image}>
            <A href="/about">
              <span class={styles.imagetext}>ABOUT</span>
              <img
                src={
                  'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/lowres/about.jpg?raw=true'
                }
                alt="logo"
              />
            </A>
          </div>
          <div class={styles.image}>
            <A href="/gallery">
              <span class={styles.imagetext}>GALLERY</span>
              <img
                src={
                  'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/lowres/gallery.jpg?raw=true'
                }
                alt="logo"
              />
            </A>
          </div>
          <div class={styles.image}>
            <A href="/contact">
              <span class={styles.imagetext}>CONTACT</span>
              <img
                src={
                  'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/lowres/contact.jpeg?raw=true'
                }
                alt="logo"
              />
            </A>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
