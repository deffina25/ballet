import { useState } from 'react';
import PlayIcon from '../../../public/play.svg?react';
import StopIcon from '../../../public/stop.svg?react';

export const Banner = () => {
  const [play, setPlay] = useState(true);

  return (
    <section className="relative h-[36.75rem]">
      <img
        src="./banner.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative top-[22px] container mx-auto max-w-[1202px] px-4">
        <button
          onClick={() => setPlay((prev) => !prev)}
          className="transaction-all absolute top-0 right-[27px] z-10 cursor-pointer duration-400 hover:opacity-[0.5]"
        >
          {!play ? <PlayIcon /> : <StopIcon />}
        </button>
      </div>
    </section>
  );
};
