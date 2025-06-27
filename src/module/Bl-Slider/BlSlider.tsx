import useEmblaCarousel from 'embla-carousel-react';
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaEventType,
} from 'embla-carousel';
import './style.css';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './BlSliderButtons.tsx';
import { useCallback, useEffect, useRef } from 'react';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

export const BlSlider: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const TWEEN_FACTOR_BASE = 1; // Увеличил для более выраженного эффекта
  const numberWithinRange = (
    number: number,
    min: number,
    max: number,
  ): number => Math.min(Math.max(number, min), max);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOverlay = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          // Инвертируем значение: активный слайд будет иметь прозрачный оверлей
          const opacity = 1 - numberWithinRange(tweenValue, 0, 1);

          // Находим затемняющий элемент и меняем его прозрачность
          const slide = emblaApi.slideNodes()[slideIndex];
          const overlay = slide.querySelector(
            '.embla__slide-overlay',
          ) as HTMLElement;
          if (overlay) {
            overlay.style.opacity = opacity.toString();
          }
        });
      });
    },
    [],
  );

  // Эффект для создания затемняющих оверлеев
  useEffect(() => {
    if (!emblaApi) return;

    // Добавляем затемняющий элемент к каждому слайду
    emblaApi.slideNodes().forEach((slide) => {
      // Проверяем, есть ли уже затемняющий элемент
      if (!slide.querySelector('.embla__slide-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'embla__slide-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = '#11111780';
        overlay.style.opacity = '0'; // Начальное значение
        overlay.style.pointerEvents = 'none'; // Чтобы не блокировать события
        overlay.style.transition = 'opacity 0.2s ease';

        // Убеждаемся, что у слайда есть position: relative
        if (getComputedStyle(slide).position === 'static') {
          slide.style.position = 'relative';
        }

        slide.appendChild(overlay);
      }
    });

    setTweenFactor(emblaApi);
    tweenOverlay(emblaApi);
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOverlay)
      .on('scroll', tweenOverlay)
      .on('slideFocus', tweenOverlay);

    // Очистка при размонтировании
    return () => {
      if (emblaApi) {
        emblaApi
          .off('reInit', setTweenFactor)
          .off('reInit', tweenOverlay)
          .off('scroll', tweenOverlay)
          .off('slideFocus', tweenOverlay);
      }
    };
  }, [emblaApi, setTweenFactor, tweenOverlay]);

  return (
    <div className="theme-dark">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((img, index) => (
              <div
                className="embla__slide"
                key={index}
                style={{ position: 'relative' }}
              >
                <div className="embla__slide__img">
                  <img width="570px" height="570px" src={img} alt={img} />
                </div>
                {/* Можно добавить оверлей здесь в JSX вместо DOM-манипуляций */}
                <div
                  className="embla__slide-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: '#11111780',
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                />
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
