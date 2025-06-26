import React, { useState } from 'react';
import PlayIcon from '../../../public/play.svg?react';
import StopIcon from '../../../public/stop.svg?react';

interface Props {
  playBtn?: boolean;
  src?: string;
}

export const Banner: React.FC<Props> = ({ playBtn, src }) => {
  const [play, setPlay] = useState(true);

  return (
    <section className="relative h-[36.75rem] bg-fixed">
      <img
        src={src || ''}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {playBtn && (
        <div className="relative top-[22px] container mx-auto max-w-[1202px] px-4">
          <button
            onClick={() => setPlay((prev) => !prev)}
            className="transaction-all absolute top-0 right-[27px] z-10 cursor-pointer duration-400 hover:opacity-[0.5]"
          >
            {!play ? <PlayIcon /> : <StopIcon />}
          </button>
        </div>
      )}
    </section>
  );
};
