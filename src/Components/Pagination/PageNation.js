import React from "react";

const PageNation = ({ dataPerPage, totalData, paginate, currentPage }) => {
  console.log(totalData);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div class="btn-group flex justify-center mt-6">
      {pageNumber.map((number) => (
        <button
          onClick={() => paginate(number)}
          class={
            number === currentPage
              ? "btn border-0 bg-gray-800 mx-1"
              : "btn border-0 bg-slate-500 mx-1"
          }
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PageNation;
