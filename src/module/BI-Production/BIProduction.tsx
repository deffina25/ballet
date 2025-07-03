import React from 'react';
import { BIProductionItem } from './BIProductionItem.tsx';

interface Props {
  data: {
    id: number;
    title: string;
    image: string;
    alt: string;
  }[];
}

export const BIProduction: React.FC<Props> = ({ data }) => {
  return (
    <article className="grid w-full grid-cols-1 justify-start gap-x-[30px] gap-y-[69px] md:grid-cols-2 xl:grid-cols-3">
      {data?.map((item) => <BIProductionItem key={item.id} item={item} />)}
    </article>
  );
};
