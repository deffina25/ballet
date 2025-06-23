import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import './style.css';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './BlSliderButtons.tsx';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

export const BlSlider: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="theme-dark">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((img, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__img">
                  <img
                    width="570px"
                    height="570px"
                    className="h-full w-full"
                    src={img}
                    alt={img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
