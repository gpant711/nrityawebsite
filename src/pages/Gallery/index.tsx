import type { Component } from 'solid-js';
import Nav from '../Common/Nav';
import Carousel from './Carousel2';
import styles from './Gallery.module.css';
import globalstyles from '../../App.module.css';

const Gallery: Component = () => {
  return (
    <>
      <Nav currentPage="GALLERY" />
      <div class={styles.page}>
        <div class={globalstyles.pagetext}>
          <h1>Gallery</h1>
          <p>:</p>
          <Carousel />
          <div class={styles.vidcontainer}>
            <iframe
              width="300"
              height="200"
              class={styles.vid}
              src="https://www.youtube.com/embed/WZwpx8Bsy1A"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="200"
              class={styles.vid}
              src="https://www.youtube.com/embed/dkEFeVGr8WE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="200"
              class={styles.vid}
              src="https://www.youtube.com/embed/MINgPMmn4sA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="200"
              class={styles.vid}
              src="https://www.youtube.com/embed/91dZHsGDdUo"
              title="Rangili Pichhodi / Pahadi Dance Cover/ Priyanka Meher/ Kalpna Bora Choreography/ Nrityakalpna"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class={styles.info}>
            <p>Checkout our YouTube channel for more videos.</p>
            <a class={styles.yt} href="https://www.youtube.com/@Nrityakalpna">
              VISIT CHANNEL
            </a>
          </div>
        </div>
        <div class={styles.galleryimage}></div>
      </div>
    </>
  );
};

export default Gallery;
