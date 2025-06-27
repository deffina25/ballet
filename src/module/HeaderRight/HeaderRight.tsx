import React from 'react';
import { Link } from 'react-router-dom';
import { facebook, instagram } from '../../config.ts';
import FacebookIcon from '../../../public/f.svg?react';
import InstagramIcon from '../../../public/i.svg?react';

export const HeaderRight = () => {
  const ScrollLink = ({
    to,
    children,
    className,
  }: {
    to: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        const offset = 52;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    };

    return (
      <a href={to} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  };

  return (
    <div className="flex items-center gap-x-[5px] sm:gap-x-2">
      <ScrollLink
        to="#subscribe"
        className="font-work mt-0 flex h-8 w-[7.375rem] items-center justify-center bg-[#FFD700] p-[0.313rem] text-sm font-black text-black uppercase transition-all duration-400 hover:opacity-[0.7] sm:mr-6"
      >
        <span>subscribe</span>
      </ScrollLink>
      {/*<Language />*/}
      <Link
        to={instagram}
        target="_blank"
        className="flex h-[32px] w-[32px] items-center justify-center transition-all duration-400 hover:opacity-[0.7]"
      >
        <InstagramIcon />
      </Link>
      <Link
        target="_blank"
        to={facebook}
        className="ml-0 flex h-[32px] w-[32px] items-center justify-center transition-all duration-400 hover:opacity-[0.7] sm:ml-[6px]"
      >
        <FacebookIcon />
      </Link>
    </div>
  );
};
