import type { Component } from 'solid-js';
import Nav from '../Common/Nav';
import styles from './Contact.module.css';
import globalstyles from '../../App.module.css';

const About: Component = () => {
  return (
    <>
      <Nav currentPage="CONTACT" />
      <div class={globalstyles.page}>
        <div class={globalstyles.pagetext}>
          <h1>Contact</h1>
          <p>Contact us at:</p>
        </div>
        <div class={styles.contactimage}></div>
      </div>
    </>
  );
};

export default About;
