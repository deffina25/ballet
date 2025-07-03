import React from 'react';
import { BINewsItem } from './BINewsItem.tsx';

interface Props {
  data: {
    id: number;
    title: string;
    date: string;
    text: string;
    image: string;
    alt: string;
  }[];
}

export const BINews: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid w-full gap-[30px]">
      {data?.map((item) => <BINewsItem key={item.id} item={item} />)}
    </div>
  );
};
