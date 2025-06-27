import { BlSlider } from '../../module/Bl-Slider';
import type { EmblaOptionsType } from 'embla-carousel';

export const SliderSection = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [];
  for (let i = 1; i <= 15; i++) {
    SLIDES.push(`./slider/slide${i}.jpg`);
  }

  return (
    <div className="container mx-auto max-w-[1440px] pb-[86px]">
      <BlSlider slides={SLIDES} options={OPTIONS} />
    </div>
  );
};
