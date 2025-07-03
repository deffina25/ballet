import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  item: {
    id: number;
    title: string;
    image: string;
    alt: string;
  };
}

export const BIProductionItem: React.FC<Props> = ({ item }) => {
  const { id, title, image, alt } = item || {};

  return (
    <Link
      to={`/productions/${id}`}
      type="submit"
      className="inline-block flex-1 cursor-pointer gap-[20px]"
    >
      <div className="ransition-all h-[370px] duration-300 hover:opacity-70">
        <img
          src={image}
          alt={alt}
          className="inline-block h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <h5 className="mt-[20px] text-2xl leading-[27px] font-semibold tracking-[2px] uppercase">
          {title}
        </h5>
      </div>
    </Link>
  );
};
