import * as React from 'react';
import RightIcon from '../../../public/right.svg?react';

interface Props {
  item: {
    id: number;
    img: string;
    title: string;
    date: string;
    text: string;
  };
}

export const NewsItem: React.FC<Props> = ({ item }) => {
  const { id, img, title, date, text } = item;
  return (
    <article key={id}>
      <div className="h-[430px] border-t-slate-200 text-center">
        <img src={img} alt="" className="inline-block" />
      </div>
      <h5 className="mt-[1.625rem] text-2xl leading-[27px] font-semibold tracking-[2px] uppercase">
        {title}
      </h5>
      <p className="mt-[4px] text-lg font-light">{date}</p>
      <p className="mt-5 text-base leading-[110.00000000000001%]">{text}</p>
      <button
        type="submit"
        className="mt-[20px] flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.438rem] pr-4 pl-[0.625rem] uppercase transition-all duration-400 hover:opacity-[0.5]"
      >
        <span>More</span>
        <RightIcon />
      </button>
    </article>
  );
};
