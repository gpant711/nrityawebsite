import { Component, createSignal, createEffect } from 'solid-js';
import styles from './Carousel.module.css';
import globalstyles from '../../App.module.css';

const Carousel: Component = () => {
  const [slideIndex, setSlideIndex] = createSignal(1);

  createEffect(() => showDivs(slideIndex()));

  function plusDivs(n: number) {
    setSlideIndex((prev) => prev + n);
    showDivs(slideIndex() + n);
  }

  function showDivs(n: number) {
    let i;
    const x = document.getElementsByClassName(
      styles.mySlides
    ) as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(x.length);
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    x[slideIndex() - 1].style.display = 'block';
  }
  return (
    <div class={`w3-content w3-display-container ${styles.slides}`}>
      <img
        class={styles.mySlides}
        src="https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg5.jpg?raw=true"
        style="width:100%"
      />
      <img
        class={styles.mySlides}
        src="https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg3.jpg?raw=true"
        style="width:100%"
      />
      <img
        class={styles.mySlides}
        src="https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg2.jpg?raw=true"
        style="width:100%"
      />
      <img
        class={styles.mySlides}
        src="https://github.com/borakuldeep/solidjs-templates-sftyh4/blob/main/src/assets/caraimg1.jpg?raw=true"
        style="width:100%"
      />

      <button
        class="w3-button w3-black w3-display-left"
        onClick={() => plusDivs(-1)}
      >
        &#10094;
      </button>
      <button
        class="w3-button w3-black w3-display-right"
        onClick={() => plusDivs(1)}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
