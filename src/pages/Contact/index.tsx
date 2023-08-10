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
          <p>kalpna711@gmail.com</p>
          <p>+1 832-759-1762</p>
          <p>Insta - @nrityakalpna</p>
          <p>FB - Kalpna Bora</p>
        </div>
        <div class={styles.contactimage}></div>
      </div>
    </>
  );
};

export default About;

