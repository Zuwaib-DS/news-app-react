import React from "react";

function Pagination({ totalPages, currentPage, handlePageChange }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage <= 1 ? 'disabled' : ''}`} onClick={() => handlePageChange(currentPage - 1)}>
          <span className="page-link">Previous</span>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i + 1} onClick={() => handlePageChange(i + 1)}>
            <span className="page-link">
              {i + 1}
            </span>
          </li>
        ))}
        <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`} onClick={() => handlePageChange(currentPage + 1)}>
          <span className="page-link">
            Next
          </span>
        </li>
      </ul>
    </nav>
  );

  // const pages = [];

  // for (let i = 1; i <= totalPages; i++) {
  //     pages.push(
  //         <button
  //             key={i}
  //             onClick={() => onPageChange(i)}
  //             disabled={i === currentPage}
  //             style={{
  //                 margin: '0 4px',
  //                 padding: '6px 12px',
  //                 background: i === currentPage ? '#007bff' : '#fff',
  //                 color: i === currentPage ? '#fff' : '#007bff',
  //                 border: '1px solid #007bff',
  //                 borderRadius: '4px',
  //                 cursor: i === currentPage ? 'default' : 'pointer'
  //             }}
  //         >
  //             {i}
  //         </button>
  //     );
  // }

  // return (
  //     <div style={{ textAlign: 'center', margin: '16px 0' }}>
  //         {pages}
  //     </div>
  // );
}

export default Pagination;
