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
            Welcome to Nrityakalpna Dance School, where we celebrate the rich
            tapestry of culture and unleash the vibrant talents of our local
            community. At NK Dance School, we believe that dance is not only a
            form of artistic expression but also a powerful medium for embracing
            diversity, preserving traditions and fostering unity. Our dance
            program not only emphasize technical excellence but also aim to
            instill a profound appreciation for cultural diversity.
          </p>
          <p>
            We actively collaborate with local cultural organisations, community
            centers and schools to organise performances, charity events that
            bring community together. Wether you are a beginner or an
            experienced dancer, a child or an adult, NK Dance School welcomes
            you with open arms. Join us on this incredible journey of self -
            discovery, cultural exploration and artistic expression. Unleash
            your talent , connect with your roots and dance your way to a
            brighter , more enriched future.
          </p>
          <h3>Courses offered:</h3>
          <ul>
            <li>Kathak Classes</li>
            <li>Bollywood Beginners Classes</li>
            <li>Bollywood Advanced Classes</li>
            <li>Semi Classical Classes</li>
            <li>Customized Choreography</li>
            <li>Wedding Choreography</li>
            <li>Cultural Event Choreography</li>
          </ul>
        </div>
        <div class={styles.aboutimage}></div>
      </div>
    </>
  );
};

export default About;
