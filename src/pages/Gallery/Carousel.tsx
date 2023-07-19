import type { Component } from 'solid-js';
import styles from './Carousel.module.css';
import globalstyles from '../../App.module.css';

const Carousel: Component = () => {
  return (
    <section class={styles.carousel} aria-label="Gallery">
      <ol class={styles.carousel__viewport}>
        <li id="carousel__slide1" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}>
            <img
              src={
                'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg4.jpg?raw=true'
              }
              class={styles.img}
              alt="logo"
            />
            <a href="#carousel__slide4" class={styles.carousel__prev}>
              Go to last slide
            </a>
            <a href="#carousel__slide2" class={styles.carousel__next}>
              Go to next slide
            </a>
          </div>
        </li>
        <li id="carousel__slide2" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}>
            <img
              src={
                'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg1.jpg?raw=true'
              }
              class={styles.img}
              alt="logo"
            />
          </div>
          <a href="#carousel__slide1" class={styles.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide3" class={styles.carousel__next}>
            Go to next slide
          </a>
        </li>
        <li id="carousel__slide3" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}>
            <img
              src={
                'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg2.jpg?raw=true'
              }
              class={styles.img}
              alt="logo"
            />
          </div>
          <a href="#carousel__slide2" class={styles.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide4" class={styles.carousel__next}>
            Go to next slide
          </a>
        </li>
        <li id="carousel__slide4" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}>
            <img
              src={
                'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg3.jpg?raw=true'
              }
              class={styles.img}
              alt="logo"
            />
          </div>
          <a href="#carousel__slide3" class={styles.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide5" class={styles.carousel__next}>
            Go to first slide
          </a>
        </li>
        <li id="carousel__slide5" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}>
            <img
              src={
                'https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg5.jpg?raw=true'
              }
              class={styles.img}
              alt="logo"
            />
            <a href="#carousel__slide4" class={styles.carousel__prev}>
              Go to last slide
            </a>
            <a href="#carousel__slide1" class={styles.carousel__next}>
              Go to next slide
            </a>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Carousel;
