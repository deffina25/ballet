import React from 'react';
import { BIEventsItem } from './BIEventsItem.tsx';

interface Props {
  data: {
    id: number;
    day: string;
    month: string;
    title: string;
    time: string;
    location: string;
    address: string;
  }[];
}

export const BIEvents: React.FC<Props> = ({ data }) => {
  return data?.map((e) => <BIEventsItem key={e.id} item={e} />);
};
