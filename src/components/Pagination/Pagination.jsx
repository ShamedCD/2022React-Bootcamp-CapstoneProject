import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./Pagination.style";

const Pagination = ({ currentPage, pageSize, setCurrentPage }) => {
  const buildPageButtons = () => {
    let result = [];
    for (let i = 1; i < pageSize + 1; i++) {
      result.push(
        <button
          key={i}
          className={currentPage === i ? `pageCard active` : `pageCard`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return result;
  };

  return pageSize > 1 ? (
    <Container>
      <button
        className="pageCard"
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        disabled={currentPage <= 1}
      >
        <FontAwesomeIcon icon={faLessThan} />
      </button>
      {buildPageButtons()}
      <button
        className="pageCard"
        onClick={() => {
          if (currentPage < pageSize) {
            setCurrentPage(currentPage + 1);
          }
        }}
        disabled={currentPage === pageSize}
      >
        <FontAwesomeIcon icon={faGreaterThan} />
      </button>
    </Container>
  ) : null;
};

export default Pagination;
