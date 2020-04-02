import React from 'react';
import '../../scss/HomeTablePagination.scss';

const HomeTablePagination = ({recordsPerPage, totalRecords, paginate, activeNumber}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination" style={{visibility: pageNumbers.length>1 ? "visible" : "hidden"}}>
      <ul className="pagination__list">
        {pageNumbers.map(number => (
          <li key={number}>
            <span onClick={() => paginate(number)} href='!#' style={{border: activeNumber===number && "0.75px solid #3c3c3c"}}>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeTablePagination;