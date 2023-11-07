import { Movie } from "../../../../Data";
import styles from "./Slider.module.css";
import Buttons from "./SliderComponent/Buttons";
import Slide from "./SliderComponent/Slide";
import { useEffect, useState } from "react";

export default function Slider() {
  const Slides = [Movie[2], Movie[1], Movie[10], Movie[6], Movie[4]];
  const [slideRight, setSlideRight] = useState(0);
  const [slideCenter, setSlideCenter] = useState(1);
  const [slideLeft, setSlideLeft] = useState(2);

  function handleRightClick() {
    slideRight === 0 ? setSlideRight(4) : setSlideRight(slideRight - 1);
    slideCenter === 0 ? setSlideCenter(4) : setSlideCenter(slideCenter - 1);
    slideLeft === 0 ? setSlideLeft(4) : setSlideLeft(slideLeft - 1);
  }

  function handleLeftClick() {
    slideRight === 4 ? setSlideRight(0) : setSlideRight(slideRight + 1);
    slideCenter === 4 ? setSlideCenter(0) : setSlideCenter(slideCenter + 1);
    slideLeft === 4 ? setSlideLeft(0) : setSlideLeft(slideLeft + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideRight === 0) {
        return setSlideRight(4);
      }
      setSlideRight(slideRight - 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideRight]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideCenter === 0) {
        return setSlideCenter(4);
      }
      setSlideCenter(slideCenter - 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideCenter]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideLeft === 0) {
        return setSlideLeft(4);
      }
      setSlideLeft(slideLeft - 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideLeft]);

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.slides}>
          <Slide slide={Slides[slideRight]} />
          <Slide slide={Slides[slideCenter]} />
          <Slide slide={Slides[slideLeft]} />
          <Buttons
            onRightClick={handleRightClick}
            onLeftClick={handleLeftClick}
          />
        </div>
      </div>
    </>
  );
}
