import { useState } from 'react';
import { IPost } from '../store/posts/types';
import POSTS_PER_PAGE from '../configs/pagination';

const usePagination = (posts: IPost[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pagesCount = Math.ceil(posts.length / POSTS_PER_PAGE);
  const pages = [];

  for (let i = 0; i < pagesCount; i++) {
    const page = posts.slice(i, i + POSTS_PER_PAGE);
    pages.push(page);
  }

  if (currentPage > pages.length + 1) {
    setCurrentPage(1);
  }

  const page = pages[currentPage - 1];

  return {
    page,
    pagesCount: pages.length,
    currentPage,
    setCurrentPage,
  };
};

export default usePagination;
