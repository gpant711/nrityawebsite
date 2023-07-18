import type { Component } from 'solid-js';
import Nav from '../Common/Nav';
import styles from './About.module.css';
import globalstyles from '../../App.module.css';

const About: Component = () => {
  return (
    <>
      <Nav currentPage="ABOUT" />
      <div class={globalstyles.page}>
        <div class={globalstyles.pagetext}>
          <h1>Welcome to NK Dance School</h1>
          <p>
            Your gateway to the vibrant and captivating world of Indian dance
            and culture right here in the US. We celebrate the rich tapestry of
            culture and unleash the vibrant talents of our local community. We
            take pride in nurturing a sense of community and fostering
            cross-culture exchange.
          </p>
        </div>
        <div class={styles.aboutimage}></div>
      </div>
    </>
  );
};

export default About;
