import React from 'react';

interface Props {
  number: number | string;
  isActive: boolean;
  onClick?: () => void;
}

export const BIPaginationItem: React.FC<Props> = ({
  number,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`custom-hover-border flex h-[32px] w-[32px] cursor-pointer items-center justify-center border p-1 text-base leading-[40%] font-light text-white transition-all duration-300 hover:text-[#FFD700] ${
        isActive ? 'active' : ''
      }`}
    >
      <span>{number}</span>
    </div>
  );
};
