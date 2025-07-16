import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="mt-6 flex justify-between items-center">
    <button
      onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      disabled={currentPage === 1}
      className="btn disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Previous
    </button>
    <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
    <button
      onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="btn disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
);

export default Pagination;