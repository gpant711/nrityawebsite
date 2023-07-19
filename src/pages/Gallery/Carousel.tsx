import type { Component } from 'solid-js';
import styles from './Carousel.module.css';
import globalstyles from '../../App.module.css';

const Carousel: Component = () => {
  return (
    <section class={styles.carousel} aria-label="Gallery">
      <ol class={styles.carousel__viewport}>
        <li id="carousel__slide1" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}>
            <a href="#carousel__slide4" class={styles.carousel__prev}>
              Go to last slide
            </a>
            <a href="#carousel__slide2" class={styles.carousel__next}>
              Go to next slide
            </a>
          </div>
        </li>
        <li id="carousel__slide2" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}></div>
          <a href="#carousel__slide1" class={styles.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide3" class={styles.carousel__next}>
            Go to next slide
          </a>
        </li>
        <li id="carousel__slide3" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}></div>
          <a href="#carousel__slide2" class={styles.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide4" class={styles.carousel__next}>
            Go to next slide
          </a>
        </li>
        <li id="carousel__slide4" tabindex="0" class={styles.carousel__slide}>
          <div class={styles.carousel__snapper}></div>
          <a href="#carousel__slide3" class={styles.carousel__prev}>
            Go to previous slide
          </a>
          <a href="#carousel__slide1" class={styles.carousel__next}>
            Go to first slide
          </a>
        </li>
      </ol>
      <aside class={styles.carousel__navigation}>
        <ol class={styles.carousel__navigation_list}>
          <li class={styles.carousel__navigation_item}>
            <a
              href="#carousel__slide1"
              class={styles.carousel__navigation_button}
            >
              Go to slide 1
            </a>
          </li>
          <li class={styles.carousel__navigation_item}>
            <a
              href="#carousel__slide2"
              class={styles.carousel__navigation_button}
            >
              Go to slide 2
            </a>
          </li>
          <li class={styles.carousel__navigation_item}>
            <a
              href="#carousel__slide3"
              class={styles.carousel__navigation_button}
            >
              Go to slide 3
            </a>
          </li>
          <li class={styles.carousel__navigation_item}>
            <a
              href="#carousel__slide4"
              class={styles.carousel__navigation_button}
            >
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
};

export default Carousel;
