import type { Component } from 'solid-js';
import Header from '../Common/Header';
import styles from './About.module.css';

const About: Component = () => {
  return (
    <>
      <Header />
      <div class={styles.aboutpage}>
        <div class={styles.abouttext}>
          <h1>Welcome to NK Dance School</h1>
          <p>
            Your gateway to the vibrant and captivating world of Indian dance
            and culture right here in the US. We celebrate the rich tapestry of
            culture and unleash the vibrant talents of our local community. We
            take pride in nurturing a sense of community and fostering
            cross-culture exchange.
          </p>
        </div>
        <div class={styles.aboutimage}>
          {/* <img
          src={
            'https://github.com/borakuldeep/nrityangana/blob/main/IMG_3254.JPEG?raw=true'
          }
          width={400}
          alt="logo"
        /> */}
        </div>
      </div>
    </>
  );
};

export default About;
