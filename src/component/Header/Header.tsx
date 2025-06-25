import { useState } from 'react';
import { Menu } from '../../module/Menu';
import { Link } from 'react-router-dom';
import { HeaderRight } from '../../module/HeaderRight';
import LogoIcon from '../../../public/logo.svg?react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[#111117]">
      <div className="gradient-border-bottom">
        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="flex h-[52px] items-center justify-between gap-[70px]">
            <Link
              to="/"
              className="transition-all duration-400 hover:opacity-[0.7]"
            >
              <LogoIcon />
            </Link>

            {/* desktop */}
            <div className="hidden w-full items-end justify-end text-right min-[940px]:flex">
              <Menu />
            </div>

            {/* mobile  */}
            <button
              className="flex h-8 w-8 flex-col items-center justify-center min-[940px]:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
              />
              <span
                className={`my-1.5 h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
              />
            </button>

            {/* mobile*/}
            <div
              className={`fixed top-[52px] left-0 h-[calc(100vh-52px)] w-full transform bg-[#111117] transition-transform duration-300 ease-in-out min-[940px]:hidden ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="p-4">
                <Menu isMobile={true} />
              </div>
            </div>

            <HeaderRight />
          </div>
        </div>
      </div>
    </header>
  );
};
