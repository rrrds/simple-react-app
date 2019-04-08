import React from "react";

function Paginator({ current, pages, onPageChange }) {
  const handleClick = ev => {
    ev.preventDefault();

    if (ev.target.nodeName === "BUTTON") {
      onPageChange(ev.target.dataset.page);
    }
  };

  return (
    pages > 1 && (
      <div>
        <ul onClick={handleClick}>
          {[...Array(pages)].map((val, idx) => {
            const pageNumber = idx + 1;
            return (
              <li>
                <button data-page={pageNumber} disabled={current == pageNumber}>
                  {pageNumber}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}

export default Paginator;
