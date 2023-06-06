import { FC, SetStateAction, Dispatch } from 'react';
import { Pagination as PaginationBootstrap } from 'react-bootstrap';

type PaginationProps = {
  pagesCount: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const Pagination: FC<PaginationProps> = ({ pagesCount, currentPage, setCurrentPage }) => {
  return (
    <PaginationBootstrap className='align-self-center'>
      <PaginationBootstrap.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
      <PaginationBootstrap.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />

      {Array(pagesCount)
        .fill(0)
        .map((_, idx) => (
          <PaginationBootstrap.Item key={idx} active={idx + 1 === currentPage} onClick={() => setCurrentPage(idx + 1)}>
            {idx + 1}
          </PaginationBootstrap.Item>
        ))}

      <PaginationBootstrap.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pagesCount} />
      <PaginationBootstrap.Last onClick={() => setCurrentPage(pagesCount)} disabled={currentPage === pagesCount} />
    </PaginationBootstrap>
  );
};

export default Pagination;
