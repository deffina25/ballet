import { useState } from 'react';
import BottomIcon from '../../../public/language-str.svg?react';

const allLanguages = ['UA', 'NL', 'EN'];

export const Language = () => {
  const [lang, setLang] = useState<string>('EN');
  const [isOpen, setIsOpen] = useState(false);

  const getAvailableLanguages = () => {
    return allLanguages.filter((l) => l !== lang);
  };

  const handleLanguageChange = (newLang: string) => {
    setLang(newLang);
    setIsOpen(false);
  };

  return (
    <div className="relative w-auto lg:w-[54px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center gap-x-[5px] text-sm font-light tracking-[2px]"
      >
        <span>{lang}</span>
        <span
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <BottomIcon />
        </span>
      </div>
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          style={{
            border: '1px solid transparent',
            borderImage: 'linear-gradient(90deg, #FFD700 0%, #0057B8 86.06%) 1',
          }}
          className="absolute top-[calc(100%+15px)] left-1/2 flex min-w-[54px] -translate-x-1/2 flex-col bg-black"
        >
          {getAvailableLanguages().map((language, index) => (
            <div
              key={language}
              onClick={() => handleLanguageChange(language)}
              style={{
                borderBottom:
                  index !== getAvailableLanguages().length - 1
                    ? '1px solid transparent'
                    : 'none',
                borderImage:
                  index !== getAvailableLanguages().length - 1
                    ? 'linear-gradient(90deg, #FFD700 0%, #0057B8 86.06%) 1'
                    : 'none',
              }}
              className="flex h-[50px] w-[54px] cursor-pointer items-center justify-center px-4 py-2 align-middle text-[15px] font-light tracking-[3px] text-white transition-colors duration-400 hover:bg-white/10"
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
