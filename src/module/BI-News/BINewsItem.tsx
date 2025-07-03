import React from 'react';
import RightIcon from '../../../public/right.svg?react';
import { Link } from 'react-router-dom';

interface Props {
  item: {
    id: number;
    title: string;
    date: string;
    text: string;
    image: string;
    alt: string;
  };
}

export const BINewsItem: React.FC<Props> = ({ item }) => {
  const { id, title, date, text, image, alt } = item || {};

  return (
    <article className="grid w-full grid-cols-1 items-center gap-x-[30px] lg:grid-cols-[570px_1fr]">
      <div className="h-[430px] border-t-slate-200 text-center">
        <img
          src={image}
          alt={alt}
          className="inline-block h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <h5 className="mt-[1.625rem] text-2xl leading-[27px] font-semibold tracking-[2px] uppercase">
          {title}
        </h5>
        <p className="mt-[4px] text-lg font-light">{date}</p>
        <div className="mt-4 text-base leading-[110.00000000000001%] font-normal">
          {text}
        </div>
        <Link
          to={`/news/${id}`}
          type="submit"
          className="mt-[20px] flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.198rem] pr-4 pl-[0.625rem] text-base uppercase transition-all duration-400 hover:opacity-[0.5]"
        >
          <span>More</span>
          <RightIcon />
        </Link>
      </div>
    </article>
  );
};
