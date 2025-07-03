import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

interface Props {
  pageSize: number;
  total: number;
}

export const BIPagination: React.FC<Props> = ({ pageSize, total }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const currentPage = Number(query.get('page')) || 1;

  const handleClick = ({ selected }: { selected: number }) => {
    navigate(`?page=${selected + 1}`);
  };

  const pageCount = Math.ceil(total / pageSize);

  return (
    <div className="mt-[69px] text-center select-none">
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handleClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={currentPage - 1}
        />
      </div>
    </div>
  );
};
