import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopIcon from '../../../public/top.svg?react';
import BottomIcon from '../../../public/bottom.svg?react';
import { BIEventsItem } from '../../module/Bl-Events';

export const Events = () => {
  const eventsData = [
    {
      id: 1,
      day: '27',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      id: 2,
      day: '02',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
    {
      id: 3,
      day: '11',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      id: 4,
      day: '31',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
    {
      id: 5,
      day: '27',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      id: 6,
      day: '02',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
    {
      id: 7,
      day: '11',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      id: 8,
      day: '31',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'up' | 'down' | null>(
    null,
  );
  const eventsPerPage = 2;
  const isLastPage = currentIndex + eventsPerPage >= eventsData.length;

  const handleNext = () => {
    if (currentIndex + eventsPerPage < eventsData.length && !isAnimating) {
      setIsAnimating(true);
      setSlideDirection('up');
      setTimeout(() => {
        setCurrentIndex((prev) => prev + eventsPerPage);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setSlideDirection('down');
      setTimeout(() => {
        setCurrentIndex((prev) => prev - eventsPerPage);
        setIsAnimating(false);
      }, 300);
    }
  };

  const visibleEvents = eventsData.slice(
    currentIndex,
    currentIndex + eventsPerPage,
  );

  const slideStyles = {
    transition: 'all 0.3s ease-out',
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? `translateY(${slideDirection === 'up' ? '20%' : '-20%'})`
      : 'translateY(0)',
  };

  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, rgba(17, 17, 23, 0) 60.96%, #1C1C25 100%)',
      }}
    >
      <div className="relative container mx-auto min-h-[730px] max-w-[1202px] overflow-hidden px-4 pt-[86px] pb-[5.813rem]">
        <h2 className="font-playfair text-center text-[3.875rem] leading-normal font-bold tracking-[0.125rem] uppercase md:text-[4.875rem] xl:text-left">
          Events
        </h2>
        <div className="mt-[45px] h-[650px] overflow-hidden xl:h-[365px]">
          <div style={slideStyles}>
            {visibleEvents.map((item) => (
              <BIEventsItem item={item} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-[10px] flex w-full flex-col items-center xl:bottom-[21px]">
          <div className="flex flex-col items-center gap-y-[20px]">
            <span
              onClick={handlePrev}
              className={`transition-all duration-400 hover:opacity-[0.5] ${
                currentIndex === 0
                  ? 'cursor-default opacity-30'
                  : 'cursor-pointer'
              }`}
            >
              <TopIcon />
            </span>
            <span
              onClick={handleNext}
              className={`transition-all duration-400 hover:opacity-[0.5] ${
                isLastPage ? 'cursor-default opacity-30' : 'cursor-pointer'
              }`}
            >
              <BottomIcon />
            </span>
          </div>
          <div className="mt-[5px] h-[24px]">
            {isLastPage && (
              <Link
                to="#"
                className="text-[10px] font-light tracking-[2px] uppercase transition-opacity hover:opacity-70 xl:leading-[40%]"
              >
                See more events
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
