import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  //[1,2,3]
  const { itemsCount, pageSize } = props;
  //ceil: float point보다 큰 integer return. ex: 0.5 => 1
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1); // use the lodash(make array)

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link" style={{ cursor: "pointer" }}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
