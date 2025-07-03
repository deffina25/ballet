import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  item: {
    id: number;
    day: string;
    month: string;
    title: string;
    time: string;
    location: string;
    address: string;
  };
}

export const BIEventsItem: React.FC<Props> = ({ item }) => {
  const { day, month, title, time, location, address } = item || {};
  return (
    <article className="grid auto-rows-auto grid-cols-[20%_1fr] items-center gap-[30px] py-7 xl:grid-cols-[170px_auto_370px] [&>*:last-child]:col-span-2 xl:[&>*:last-child]:col-span-1">
      <div className="text-center">
        <p className="font-playfair text-7xl leading-[40%] font-bold tracking-[2px] md:text-8xl">
          {day}
        </p>
        <p className="mt-[50px] text-[32px] leading-[40%] font-light tracking-[2px]">
          {month}
        </p>
      </div>
      <div className="border-l-1 border-white pb-[10px] pl-[15px]">
        <h6 className="text-e line-clamp-1 text-3xl font-semibold tracking-[2px] uppercase md:text-4xl">
          {title}
        </h6>
        <div className="mt-[25px] text-base leading-normal font-light xl:leading-[40%] [&>p]:mb-[1rem] [&>p]:last:mb-0">
          <p>{time}</p>
          <p className="uppercase">{location}</p>
          <p className="uppercase">{address}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-[30px] xl:justify-between">
        <Link
          to="#"
          className="font-work flex h-[48px] w-[170px] items-center justify-center border-1 border-white p-[0.313rem] text-sm font-black text-white uppercase transition-all duration-400 hover:opacity-[0.7]"
        >
          <span>read more</span>
        </Link>
        <button className="font-work flex h-[48px] w-[170px] cursor-pointer items-center justify-center bg-[#FFD700] p-[0.313rem] text-sm font-black text-black uppercase transition-all duration-400 hover:opacity-[0.7]">
          <span>tickets</span>
        </button>
      </div>
    </article>
  );
};
