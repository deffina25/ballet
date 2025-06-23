import { Link } from 'react-router-dom';
import TopIcon from '../../../public/top.svg?react';
import BottomIcon from '../../../public/bottom.svg?react';
import { useState } from 'react';

interface Event {
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  address: string;
}

export const Events = () => {
  const eventsData = [
    {
      day: '27',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      day: '02',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
    {
      day: '11',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
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

  const EventItem = ({ event }: { event: Event }) => (
    <article className="grid grid-cols-[170px_auto_370px] items-center gap-[30px] py-7">
      <div className="text-center">
        <p className="font-playfair text-8xl leading-[40%] font-bold tracking-[2px]">
          {event.day}
        </p>
        <p className="mt-[50px] text-[32px] leading-[40%] font-light tracking-[2px]">
          {event.month}
        </p>
      </div>
      <div className="border-l-1 border-white pb-[10px] pl-[15px]">
        <h6 className="text-4xl font-semibold tracking-[2px] uppercase">
          {event.title}
        </h6>
        <div className="mt-[25px] text-base leading-[40%] font-light [&>p]:mb-[1rem] [&>p]:last:mb-0">
          <p>{event.time}</p>
          <p className="uppercase">{event.location}</p>
          <p className="uppercase">{event.address}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-[30px]">
        <Link
          to="#"
          className="font-work flex h-[48px] w-[170px] items-center justify-center border-1 border-white p-[0.313rem] text-sm font-black text-white uppercase transition-all duration-400 hover:opacity-[0.7]"
        >
          <span>tickets</span>
        </Link>
        <button className="font-work flex h-[48px] w-[170px] cursor-pointer items-center justify-center bg-[#FFD700] p-[0.313rem] text-sm font-black text-black uppercase transition-all duration-400 hover:opacity-[0.7]">
          <span>tickets</span>
        </button>
      </div>
    </article>
  );

  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, rgba(17, 17, 23, 0) 60.96%, #1C1C25 100%)',
      }}
    >
      <div className="relative container mx-auto h-[730px] max-w-[1202px] px-4 pt-[103px] pb-[5.813rem]">
        <h2 className="font-playfair text-[4.875rem] leading-[40%] font-bold tracking-[0.125rem] uppercase">
          Events
        </h2>
        <div className="mt-[66px] h-[365px] overflow-hidden">
          <div style={slideStyles}>
            {visibleEvents.map((event, index) => (
              <EventItem key={`${currentIndex}-${index}`} event={event} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-[21px] flex w-full flex-col items-center">
          <div className="flex flex-col items-center gap-y-[20px]">
            <span
              onClick={handlePrev}
              className={`cursor-pointer transition-all duration-400 hover:opacity-[0.5] ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-30' : ''
              }`}
            >
              <TopIcon />
            </span>
            <span
              onClick={handleNext}
              className={`cursor-pointer transition-all duration-400 hover:opacity-[0.5] ${
                isLastPage ? 'cursor-not-allowed opacity-30' : ''
              }`}
            >
              <BottomIcon />
            </span>
          </div>
          <div className="mt-[5px] h-[24px]">
            {isLastPage && (
              <Link
                to="#"
                className="text-[10px] leading-[40%] font-light tracking-[2px] uppercase transition-opacity hover:opacity-70"
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
