import { menuTopList } from './list/menuTopList.tsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BottomIcon from '../../../public/language-str.svg?react';
import React, { useState } from 'react';

import type { MenuType } from './type/MenuType.tsx';

interface Props {
  isMobile?: boolean;
}

export const Menu: React.FC<Props> = ({ isMobile = false }) => {
  const { t } = useTranslation();
  const [openMenuId, setOpenMenuId] = useState<string | number | null>(null);

  const renderMenu = () => {
    const arr = menuTopList(t);

    return arr?.map(({ id, name, href, children }: MenuType) => {
      if (href) {
        return (
          <li
            key={id}
            className={`border-b-1 border-transparent transition-all duration-300 hover:border-b-1 hover:border-[#FFFEFE] ${
              isMobile ? 'py-4' : ''
            }`}
          >
            <Link to={href} className="color-[#FFFEFE]">
              {name}
            </Link>
          </li>
        );
      }

      const isOpen = openMenuId === id;

      return (
        <li
          key={id}
          className={`relative ${
            isMobile
              ? 'py-4'
              : 'border-b-1 border-transparent transition-all duration-300 hover:border-b-1 hover:border-[#FFFEFE]'
          }`}
        >
          <div
            className="flex cursor-pointer items-center gap-x-[5px]"
            onClick={() => setOpenMenuId(isOpen ? null : id)}
          >
            <span>{name}</span>
            <span
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
              <BottomIcon />
            </span>
          </div>
          {isOpen && children && (
            <div
              onMouseLeave={() => !isMobile && setOpenMenuId(null)}
              style={{
                border: '1px solid transparent',
                borderImage:
                  'linear-gradient(90deg, #FFD700 0%, #0057B8 86.06%) 1',
              }}
              className={`${
                isMobile
                  ? 'mt-4 w-full'
                  : 'absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2'
              } z-50 flex flex-col bg-black`}
            >
              {children.map((child, index) => (
                <Link
                  key={child.id}
                  to={child.href}
                  style={{
                    borderBottom:
                      index !== children.length - 1
                        ? '1px solid transparent'
                        : 'none',
                    borderImage:
                      index !== children.length - 1
                        ? 'linear-gradient(90deg, #FFD700 0%, #0057B8 86.06%) 1'
                        : 'none',
                  }}
                  className="flex min-h-[50px] cursor-pointer items-center justify-center px-[5px] py-1 text-center text-[12px] font-light tracking-[3px] text-white transition-colors duration-400 hover:bg-white/10"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </li>
      );
    });
  };

  return (
    <div className="w-full">
      <ul
        className={`font-work ${
          isMobile
            ? 'flex flex-col items-start gap-y-2'
            : 'flex items-center gap-x-[14px]'
        } text-[0.938rem] font-light tracking-[0.188rem] uppercase`}
      >
        {renderMenu()}
      </ul>
    </div>
  );
};
