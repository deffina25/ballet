import { BlSlider } from '../../module/Bl-Slider';
import type { EmblaOptionsType } from 'embla-carousel';

export const SliderSection = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    './slider/slide1.jpg',
    './slider/slide2.jpg',
    './slider/slide3.jpg',
    './slider/slide1.jpg',
    './slider/slide2.jpg',
    './slider/slide3.jpg',
  ];

  return (
    <div className="container mx-auto max-w-[1440px] pb-[86px]">
      <BlSlider slides={SLIDES} options={OPTIONS} />
    </div>
  );
};
