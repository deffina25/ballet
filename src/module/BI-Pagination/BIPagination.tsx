import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BIPaginationItem } from './BIPaginationItem.tsx';

interface Props {
  pageSize: number;
  total: number;
}

export const BIPagination: React.FC<Props> = ({ pageSize, total }) => {
  const totalPages = Math.ceil(total / pageSize);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const [pageNumber, setPageNumber] = useState(currentPageFromUrl);

  useEffect(() => {
    setPageNumber(currentPageFromUrl);
  }, [currentPageFromUrl]);

  const handleClick = (page: number) => {
    navigate(`?page=${page}`);
    setPageNumber(page);
  };

  return (
    <div className="mt-[69px] flex w-full items-center justify-center gap-x-3.5">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <BIPaginationItem
            key={page}
            number={page}
            isActive={page === pageNumber}
            onClick={() => handleClick(page)}
          />
        );
      })}
    </div>
  );
};
