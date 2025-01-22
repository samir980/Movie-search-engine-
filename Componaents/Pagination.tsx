import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}


const Pagination:React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange}) => {

    const handlePageClick = (page:number) =>{
        if (page>=1 && page<=totalPages) {
            onPageChange(page);
            window.scrollTo({top:0 , behavior: "smooth"})
        }
    }
    return<>
     <div className="d-flex justify-content-center align-items-center my-4">
      <button
        className="btn btn-outline-primary me-2"
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Previous
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="btn btn-outline-primary ms-2"
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
    </>
}
export default Pagination;